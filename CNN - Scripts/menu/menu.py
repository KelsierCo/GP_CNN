import numpy as np

matriz = np.random.rand(64, 64, 3, 3)
def menu():
    print("         red neuronal")
    print("1.entrenar           ")
    print("2.probar         ")
    print("3.salir              ")
    opcion = int(input("seleccione una opcion:  "))
    return opcion


def menu2():
    print("         red neuronal")
    print("1.crear          ")
    print("2.cargar        ")
    print("3.salir              ")
    opcion = int(input("seleccione una opcion:  "))
    
    return opcion
