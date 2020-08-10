# NLP Playground

### Bot.annotator

- StanzaAnnotator

### Bot.detokenizer

- NLTKDetokenizer (TreeBank)

### Bot.filter

- NLTKStopWordRemover
- NLTKPorterStemmer
- NLTKSnowballStemmer
- NLTKWordNetLemmatizer

### Bot.interface

- TokenOperationInterface
- TextOperationInterface

### Bot.recognizer

- NLTKRecognizer (people, numbers)

### Bot.tokenizer

- NLTKTokenizer (word_tokenizer)
- StanzaTokenizer

### Bot.wordbank

- stop_words
- yes_words
- no_words

## Run Instructions

### Python Server

pip install -r requirements.txt (linux)
OR
pip install -r osxrequirements.txt (mac)

requirements.txt uses CPU only Pytorch for a smaller deployment size

./start_bot.sh
OR
gunicorn app:app

### Client

cd client/

npm install

npm run dev
