from bot.interface import TextOperationInterface
from nltk.tokenize import word_tokenize
import stanza

# by default, stanza pipelines are created with preprocessors
# see https://stanfordnlp.github.io/stanza/pipeline.html#build-pipeline-from-a-config-dictionary
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

