import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

# Derivada de la función de activación sigmoide
def sigmoid_derivative(x):
    return sigmoid(x) * (1 - sigmoid(x))

# Función de pérdida binary crossentropy
def binary_crossentropy(y_true, y_pred):
    epsilon = 1e-7
    loss = -(y_true * np.log(y_pred + epsilon) + (1 - y_true) * np.log(1 - y_pred + epsilon))
    return loss
