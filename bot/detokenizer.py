from bot.interface import TokenOperationInterface
from nltk.tokenize.treebank import TreebankWordDetokenizer

# detokenize text with NTLK
class NLTKDetokenizer(TokenOperationInterface):
    def process(self, tokens):
        return TreebankWordDetokenizer().detokenize(tokens)
