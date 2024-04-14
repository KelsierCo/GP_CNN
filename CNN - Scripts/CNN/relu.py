import numpy as np

class Relu:
    def forward(self, imagen):
        self.imagen = imagen
        return np.maximum(imagen, 0)
    
    def backward(self, error):
        return error * (self.imagen > 0)