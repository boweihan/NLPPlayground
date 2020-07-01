from bot.interface import TokenOperationInterface
from nltk.corpus import stopwords 
from nltk.stem import PorterStemmer
from nltk.stem import SnowballStemmer

# filter out stop words from tokens as defined by NLTK
class NLTKStopWordRemover(TokenOperationInterface):
    def process(self, tokens):
        stop_words = set(stopwords.words('english')) 
        result = []

        for w in tokens: 
            if w not in stop_words: 
                result.append(w) 

        return result

# porter stemmer - reduce words to their roots - i.e. "raining" = "rain"
class NLTKPorterStemmer(TokenOperationInterface):
    def process(self, tokens):
        stemmer = PorterStemmer()
        return [stemmer.stem(token) for token in tokens]

# snowball stemmer - reduce words to their roots - i.e. "raining" = "rain"
class NLTKSnowballStemmer(TokenOperationInterface):
    def process(self, tokens):
        stemmer = SnowballStemmer("english")
        return [stemmer.stem(token) for token in tokens]
