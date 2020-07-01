from bot.interface import TextOperationInterface
from nltk.tokenize import word_tokenize

# tokenize text with NLTK
class NLTKTokenizer(TextOperationInterface):
    def process(self, text):
        return word_tokenize(text) 

