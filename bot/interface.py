from abc import ABC, abstractmethod

class TokenOperationInterface(ABC):
    @abstractmethod
    def process(self, tokens):
        pass

class TextOperationInterface(ABC):
    @abstractmethod
    def process(self, text):
        pass