import nltk

class NLTKRecognizer():
    def recognize_persons(self, tokens):
        tagged = nltk.pos_tag(tokens)
        chunks = nltk.chunk.ne_chunk(tagged)
        return get_continuous_chunks(chunks)

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