from bot.tokenizer import NLTKTokenizer
from bot.detokenizer import NLTKDetokenizer
from bot.filter import NLTKStopWordRemover, NLTKWordNetLemmatizer
from bot.recognizer import NLTKRecognizer, StanzaRecognizer
from bot.wordbank import no_words, yes_words


class ExampleOne:
    def parseBoolean(self, input):
        if input.lower() in yes_words:
            return "Great!"
        elif input.lower() in no_words:
            return "That's too bad!"
        else:
            return "I didn't understand your answer"

    def parseMultiple(self, input):
        if input.lower() in set(["a", "toyota", "1"]):
            return "A Toyota? Gotcha."
        elif input.lower() in set(["b", "mazda", "2"]):
            return "A Mazda? Gotcha."
        elif input.lower() in set(["c", "lexus", "3"]):
            return "A Lexus? Gotcha."
        elif input.lower() in set(["d", "other", "4"]):
            return "You've chosen Other. That's fine too."
        else:
            return input + " is not a valid option"

    def parseRating(self, input):
        if input.lower() in set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]):
            return "Thanks, you've given a rating of: " + input
        else:
            return input + " is not a valid rating"

    def parseName(self, input):
        nameList = StanzaRecognizer().recognize_persons(input)

        if not nameList:
            return "Sorry, we were unable to identify your name."

        return "Full Name: [" + " ".join(nameList) + "]"

    def parseNumber(self, input):
        numberList = StanzaRecognizer().recognize_numbers(input)

        if not numberList:
            return "Sorry, we were unable to identify a number."

        return "You've reported your salary as $" + numberList[0] + " / year"

