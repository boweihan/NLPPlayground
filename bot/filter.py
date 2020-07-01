import nltk
from bot.interface import TokenOperationInterface
from nltk.corpus import stopwords, wordnet
from nltk.stem import PorterStemmer, SnowballStemmer, WordNetLemmatizer

# STOP WORD REMOVER: filter out stop words from tokens as defined by NLTK
class NLTKStopWordRemover(TokenOperationInterface):
    def process(self, tokens):
        stop_words = set(stopwords.words('english')) 
        result = []

        for w in tokens: 
            if w not in stop_words: 
                result.append(w) 

        return result

# PORTER STEMMER - reduce words to their roots - i.e. "raining" = "rain"
# the porter method is a pre-cursor to snowball, and is generally treated as a more crude approach
class NLTKPorterStemmer(TokenOperationInterface):
    def process(self, tokens):
        stemmer = PorterStemmer()
        return [stemmer.stem(token) for token in tokens]

# SNOWBALL STEMMER - reduce words to their roots - i.e. "raining" = "rain"
# a more preferred / recent method of stemming vs. porter
class NLTKSnowballStemmer(TokenOperationInterface):
    def process(self, tokens):
        stemmer = SnowballStemmer("english")
        return [stemmer.stem(token) for token in tokens]

# WORD NET LEMMATIZER - word normalization with morphological considerations
# Wordnet is an large, freely and publicly available lexical database for the English language aiming
# to establish structured semantic relationships between words. It offers lemmatization capabilities
# as well and is one of the earliest and most commonly used lemmatizers.
# NOTE: there are many other types of lemmatizers - https://www.machinelearningplus.com/nlp/lemmatization-examples-python
class NLTKWordNetLemmatizer(TokenOperationInterface):
    def process(self, tokens):
        lemmatizer = WordNetLemmatizer()

        # find pos tag of words
        nltk.pos_tag(tokens)

        return [lemmatizer.lemmatize(token, get_wordnet_pos(token)) for token in tokens]

def get_wordnet_pos(word):
    """Map POS tag to first character lemmatize() accepts"""
    tag = nltk.pos_tag([word])[0][1][0].upper()
    tag_dict = {
        "J": wordnet.ADJ,
        "N": wordnet.NOUN,
        "V": wordnet.VERB,
        "R": wordnet.ADV
    }
    return tag_dict.get(tag, wordnet.NOUN)