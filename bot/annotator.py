from bot.interface import TextOperationInterface
import stanza

# by default, stanza pipelines are created with preprocessors
# see https://stanfordnlp.github.io/stanza/pipeline.html#build-pipeline-from-a-config-dictionary
nlp = stanza.Pipeline("en")

"""
Annotate text with Stanza (Stanford NLP)
(useful as the first step for any further processing)
"""


class StanzaAnnotator(TextOperationInterface):
    def process(self, text):
        return nlp(text)
