from bot.interface import TextOperationInterface
import stanza

# by default, stanza pipelines are created with 5 preprocessors
# see https://www.analyticsvidhya.com/blog/2019/02/Stanza-nlp-library-python/
nlp = stanza.Pipeline("en")

"""
Annotate text with Stanza (Stanford NLP)
(useful as the first step for any further processing)
"""


class StanzaAnnotator(TextOperationInterface):
    def process(self, text):
        return nlp(text)
