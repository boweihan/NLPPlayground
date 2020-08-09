import stanza

stanza.download("en")

from flask import Flask, request
from flask_cors import CORS, cross_origin
from twilio.twiml.messaging_response import MessagingResponse
from iterations.one import ExampleOne
import requests

# api configuration
app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})

"""
-- Query Examples by Category --
{number} example number
{category} input category (i.e. boolean, multiple, rating, name, numeric) 
{input} query string for user input
returns string {response}
"""


@app.route("/example/<number>/<category>", methods=["GET"])
def example_one(number, category):
    input = request.args.get("input")

    if not input:
        return "Please supply a valid query string [input]"

    example = None

    if number == "1":
        example = ExampleOne()
    else:
        return "Please enter a valid example number"

    if category == "boolean":
        return example.parseBoolean(input)
    elif category == "multiple":
        return example.parseMultiple(input)
    elif category == "rating":
        return example.parseRating(input)
    elif category == "name":
        return example.parseName(input)
    elif category == "numeric":
        return example.parseNumber(input)

    return "Please enter a valid category"


if __name__ == "__main__":
    app.run(threaded=True, host="0.0.0.0", port=8081)
