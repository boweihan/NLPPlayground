from bot.annotator import StanzaAnnotator
from bot.wordbank import stop_words
import nltk
import stanza

"""
Recognize specific entities with NLTK
"""


class NLTKRecognizer:
    def recognize_persons(self, tokens):
        tagged = nltk.pos_tag(tokens)
        chunks = nltk.chunk.ne_chunk(tagged)
        return get_continuous_chunks(chunks)

    def recognize_numbers(self, tokens):
        tagged = nltk.pos_tag(tokens)
        chunks = nltk.chunk.ne_chunk(tagged)
        return get_numeric_entities(chunks)


"""
Recognize specific entities with Stanza
"""


class StanzaRecognizer:
    def recognize_persons(self, text):
        doc = StanzaAnnotator().process(text.lower())
        result = [
            w.text.capitalize() if w.upos in ["PROPN", "NNP"] else w.text
            for sent in doc.sentences
            for w in sent.words
        ]
        return list(filter(lambda x: x[0].isupper() and x not in stop_words, result))

    def recognize_numbers(self, text):
        # NOTE: this does not convert words to number yet
        # may be able to leverage - https://nlp.stanford.edu/nlp/javadoc/javanlp/edu/stanford/nlp/ie/NumberNormalizer.html
        doc = StanzaAnnotator().process(text.lower())
        return [
            w.text for sent in doc.sentences for w in sent.words if w.upos in ["NUM"]
        ]


"""
helpers
"""


def get_continuous_chunks(chunked):
    continuous_chunk = []
    current_chunk = []
    for i in chunked:
        if type(i) == nltk.Tree:
            current_chunk.append(" ".join([token for token, pos in i.leaves()]))
        if current_chunk:
            named_entity = " ".join(current_chunk)
            if named_entity not in continuous_chunk:
                continuous_chunk.append(named_entity)
                current_chunk = []
        else:
            continue
    return continuous_chunk


def get_numeric_entities(chunked):
    numbers = []
    for i in chunked:
        if type(i) == tuple:
            code = i[1]
            if code == "CD":
                numbers.append(i[0])
    return numbers
