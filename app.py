from flask import Flask, request
from flask_cors import CORS, cross_origin
import requests
from twilio.twiml.messaging_response import MessagingResponse
from bot.tokenizer import NLTKTokenizer
from bot.detokenizer import NLTKDetokenizer
from bot.filter import NLTKStopWordRemover, NLTKWordNetLemmatizer
from bot.recognizer import NLTKRecognizer

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})

@app.route('/bot', methods=['POST'])
def bot():
    incoming_msg = request.values.get('Body', '').lower()
    resp = MessagingResponse()
    msg = resp.message()
    responded = False
    if 'quote' in incoming_msg:
        # return a quote
        r = requests.get('https://api.quotable.io/random')
        if r.status_code == 200:
            data = r.json()
            quote = f'{data["content"]} ({data["author"]})'
        else:
            quote = 'I could not retrieve a quote at this time, sorry.'
        msg.body(quote)
        responded = True
    if 'cat' in incoming_msg:
        # return a cat pic
        msg.media('https://cataas.com/cat')
        responded = True
    if not responded:
        msg.body('I only know about famous quotes and cats, sorry!')
    return str(resp)

@app.route('/parse/<category>', methods=['GET'])
def parse_with_NLTK(category):
    input = request.args.get('input')

    # operations
    # tokens = NLTKTokenizer().process(input)
    # tokens = NLTKStopWordRemover().process(tokens)
    # tokens = NLTKWordNetLemmatizer().process(tokens)
    # result = NLTKRecognizer().recognize_persons(tokens)

    # category handling
    if category == 'boolean':
        result = category
    elif category == 'multiple':
        result = category
    elif category == 'rating':
        tokens = NLTKTokenizer().process(input)
        result = NLTKRecognizer().recognize_numbers(tokens)
    elif category == 'name':
        tokens = NLTKTokenizer().process(input)
        result = NLTKRecognizer().recognize_persons(tokens)
    elif category == 'numeric':
        tokens = NLTKTokenizer().process(input)
        result = NLTKRecognizer().recognize_numbers(tokens)

    return "Category: " + category + ", identified: [" + ', '.join(result) + "]"