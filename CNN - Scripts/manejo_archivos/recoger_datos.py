from io import open

def map():
    archivo = open("C:\\Users\\asus ordenes\\Downloads\\Proyecto de grado\\Tesis1.0\\datos_CNN\\info.txt", "r")

    texto = archivo.readlines()

    archivo.close()
    datos = {}

    for lines in texto:
        fracmentos = lines.strip().split(" ")
        valor = [1]
        if fracmentos[1].startswith("N"): valor = [0]
        datos[fracmentos[0]] = valor

    return datos
    