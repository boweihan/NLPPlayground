from bot.tokenizer import NLTKTokenizer
from bot.detokenizer import NLTKDetokenizer
from bot.filter import NLTKStopWordRemover, NLTKWordNetLemmatizer
from bot.recognizer import NLTKRecognizer, StanzaRecognizer
from bot.wordbank import no_words, yes_words


class ExampleOne:
    def parseBoolean(self, input):
        if input.lower() in yes_words:
            return "Glad to hear that you have reliable transportation!"
        elif input.lower() in no_words:
            return "Sorry to hear that you don't have reliable transportation."
        else:
            return "I didn't understand your answer."

    def parseMultiple(self, input):
        if input.lower() in set(["a", "toyota", "1"]):
            return "Toyota? Thanks."
        elif input.lower() in set(["b", "mazda", "2"]):
            return "Mazda? Thanks."
        elif input.lower() in set(["c", "lexus", "3"]):
            return "Lexus? Thanks."
        elif input.lower() in set(["d", "other", "4"]):
            return "Other? Thanks."
        else:
            return input + " is not a valid option."

    def parseRating(self, input):
        if input.lower() in set(["6", "7", "8", "9", "10"]):
            return input + "? Glad to hear that you are doing well."
        elif input.lower() in set(["1", "2", "3", "4", "5"]):
            return input + "? I'm sorry to hear that."
        else:
            return input + " is not a valid rating."

    def parseName(self, input):
        nameList = StanzaRecognizer().recognize_persons(input)

        if not nameList:
            return "Sorry, I was unable to identify your full name from your response."

        return "Your full name is [" + " ".join(nameList) + "]."

    def parseNumber(self, input):
        numberList = StanzaRecognizer().recognize_numbers(input)

        if not numberList:
            return "Sorry, I was unable to identify a valid salary in your response."

        return "You've reported your salary as $" + numberList[0] + " / year."

