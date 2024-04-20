import sys
import numpy as np

sys.path.append("C:\\Users\\asus ordenes\\Downloads\\Proyecto de grado\\Tesis1.0\\FC")
sys.path.append("C:\\Users\\asus ordenes\\Downloads\\Proyecto de grado\\Tesis1.0\\CNN")
sys.path.append("C:\\Users\\asus ordenes\\Downloads\\Proyecto de grado\\Tesis1.0\\manejo_archivos")

from CNN import estructura
from FC import redneuronal
from manejo_archivos import manejo_imagenes, recoger_datos, datos_filtros
from menu import menu

def escribir():
    datos_filtros.escribir_filtros(cnn.c1.filtros, 1)
    datos_filtros.escribir_filtros(cnn.c2.filtros, 2)
    datos_filtros.escribir_filtros(cnn.c3.filtros, 3)

def leer():
    cnn.c1.filtros = datos_filtros.leer_filtros(cnn.c1.filtros, 1)
    cnn.c2.filtros = datos_filtros.leer_filtros(cnn.c2.filtros, 2)
    cnn.c3.filtros = datos_filtros.leer_filtros(cnn.c3.filtros, 3)

def entrenar(inicio):
    imagenes = np.random.rand(322, 28, 28)
    for i in range(1000):
        cont = -1
        for clave in mapa:
            cont+=1
            print("ronda " + str(cont))
            if cont > inicio -1:
                imagen = manejo_imagenes.extraer_imagen(clave)
                imagen = imagen.reshape((1, 1024, 1024))
                """imagen = imagenes[cont][:][:]
                imagen = np.reshape(imagen, (1,28,28))"""
                datos = cnn.forward(imagen)
                objetivo = mapa[clave]
                rn.forward(datos, objetivo)
                delta = rn.backward(objetivo)
                delta = np.array(delta)
                cnn.backward(delta, imagen)
                escribir()

def clasificar():
    acierto = 0
    fallo = 0
    for clave in mapa:
        imagen = manejo_imagenes.extraer_imagen(clave)
        imagen = imagen.reshape((1, 1024, 1024))
        datos = cnn.forward(imagen)
        dato = rn.forwardClasifica(datos)
        print(dato/100); 
        dato = round(dato[0][0])

        if dato == mapa[clave]: acierto+=1
        else: fallo+=1

        manejo_imagenes.clasificar(clave, dato)
        print("aciertos: "+str(acierto))
        print("fallos: "+str(fallo))
    print("aciertos: "+str(acierto))
    print("fallos: "+str(fallo))

    
if __name__ == '__main__':
    cnn = estructura.estructura()
    l = 0.5
    rn = redneuronal.redneuronal(64*126*126, 64, 64, 1, l)

    mapa = recoger_datos.map()
    opcion = 1
    while opcion < 3:
        opcion = menu.menu()
        if opcion == 1: 
            inicio = 0
            opcion2 = menu.menu2()
            if opcion2 == 3: break
            if opcion2 == 2:
                leer()
                inicio = int(input("inicio de recorrer imagen: "))
            entrenar(inicio)
        if opcion == 2:
            clasificar()


