from io import open

def escribir_filtros(filtros, numero):
    archivo = open("C:\\Users\\asus ordenes\\Downloads\\Proyecto de grado\\Tesis1.0\\datos_filtros\\filtros"+str(numero)+".txt", "w")
    escribir = "matriz\n"
    for i in range(filtros.shape[0]):
        escribir += "filtro\n"
        for j in range(filtros.shape[1]):
            for k in range(filtros.shape[2]):
                for l in range(filtros.shape[3]):
                    escribir+= str(filtros[i][j][k][l]) + ' ';
                escribir +="\n"
            escribir +="\n"
    archivo.write(escribir)
    archivo.close

def leer_filtros(matriz, numero):
    archivo = open("C:\\Users\\asus ordenes\\Downloads\\Proyecto de grado\\Tesis1.0\\datos_filtros\\filtros"+str(numero)+".txt", "r")
    filtro = -1
    profundidad = 0
    contadorX = 1
    for line in archivo.readlines():
        frat = line.strip().split(" ")
        contadorY = 0
        for tui in frat:
            if tui == 'matriz' or contadorY >= 3:
                contadorX -= 1
            elif tui == '':
                profundidad += 1
                contadorX = -1
            elif tui == 'filtro':
                filtro +=1
                profundidad = 0
                contadorX = -1
            else:
                matriz[filtro][profundidad][contadorX][contadorY] = float(tui)
                contadorY += 1
        contadorX +=1
    archivo.close
    return matriz
