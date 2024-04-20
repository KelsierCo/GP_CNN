from PIL import Image
import numpy as np
import shutil

def extraer_imagen(imagen):
    path = "C:\\Users\\asus ordenes\\Downloads\\Proyecto de grado\\Tesis1.0\\datos_CNN\\" + str(imagen) + ".pgm"
    m = Image.open(path)
    imagen_red = np.array(m, dtype=np.float64)
    m.close()
    return imagen_red

def clasificar(imagen, clasificacion):
    carpeta = "Normal"
    path = "C:\\Users\\asus ordenes\\Downloads\\Proyecto de grado\\Tesis1.0\\datos_CNN\\" + str(imagen) + ".pgm"
    if clasificacion == 1:
        carpeta = "Anormal"
    new_path = "C:\\Users\\asus ordenes\\Downloads\\Proyecto de grado\\Tesis1.0\\clasificacion\\" + carpeta + "\\" + str(imagen) + ".pgm"
    shutil.move(path, new_path)
