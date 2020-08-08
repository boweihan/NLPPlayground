from bot.interface import TextOperationInterface
from nltk.tokenize import word_tokenize
import stanza

# by default, stanza pipelines are created with 5 preprocessors
# see https://www.analyticsvidhya.com/blog/2019/02/Stanza-nlp-library-python/
nlp = stanza.Pipeline("en")

"""
tokenize text with NLTK
"""


class NLTKTokenizer(TextOperationInterface):
    def process(self, text):
        return word_tokenize(text)


"""
tokenize text with Stanza
"""


class StanzaTokenizer(TextOperationInterface):
    def process(self, text):
        doc = nlp(text)
        return doc.sentences[0].print_tokens()

