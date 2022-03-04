const termux = termux => {
return `Comandos básicos para usar en termux o cualquier terminal que simule linux

cd = directorios abiertos(pastas)
exemplo = cd /sdcard/

ls = enumerar los archivos y directorios presentes

mv = mover archivo o directorio a otra ubicación
exemplo = mv teste.sh(arquivo) $HOME
Obs: o comando $HOME es la carpeta de inicio de termux (donde comienzas)

cp = copiar archivos y directorios a otra ubicación
exemplo = cp -r teste(diretório) $HOME 
Obs: o -r después de que el cp es un argumento, se usó para mover el directorio con más de su contenido a otra ubicación

que son argumentos = los argumentos son opciones que usas en la terminal para poder ejecutar el comando de otra forma

rm = eliminar archivos y directorios
exemplo = rm -r -f teste(diretório)
Obs = Lo mismo que el comando cp, pero el -f se usa en caso de que el archivo o directorio sea difícil de eliminar, el -f obliga a eliminarlo`
}

exports.termux = termux
