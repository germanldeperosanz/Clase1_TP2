//const fs = require('fs')
import fs from 'fs'

function leerArchivo(){
    try {
        //ruta absoluta
    //let datos = fs.readFileSync('../texto.txt', 'utf-8')
    
    //ruta relativa. 
    let datos = fs.readFileSync('C:/Personal/Sistemas/Taller de Programacion II/Unidad I/texto2.txt', 'utf-8')
    console.log(datos)
    }
    catch (error) {
        console.log('Error en lectura de archivo', error)
    }
    
}


function actualizarArchivo(){
    try{
        fs.appendFileSync('../texto.txt', '\nhola como estas todo bien ACTUALIZADO?')
    console.log('Actualizacion ok!')
    }
    catch(error){
    console.log('Eror en la actualizacion de archivo: ', error)
    }
}


function renombrarArchivo(){
    fs.renameSync('../texto.txt', '../texto2.txt')
}

function borrarArchivos(){
    fs.unlinkSync('../texto.txt')
}

function crearCarpeta(){
    fs.mkdirSync('Carpeta_Prueba')
}

//ver CONTENIDOS
function listarEntradasCarpetaActual(){
    let lista = fs.readdirSync('./')
    console.log(lista)

    for (let entrada of lista){

        let stat = fs.statSync(entrada)
    
        if (stat.isDirectory()){
        console.log('La entrada '+entrada+' es una carpeta')
        }
    
        if (stat.isFile()){
        console.log('La entrada '+entrada+' es un archivo' +' y '+'la entrada '+entrada+'tiene un tamaño de '+stat.size+ 'bytes')
        }
    }
}

function verInformacion(){
    let stat = fs.statSync('../texto2.txt') 
    console.log(stat)
}

function mostrarCaracteristicasArchivo(){
    let entrada = ('../texto2.txt') 
    //let entrada = ('Carpeta_Prueba')
    //let entrada = ('package.json')
    //let stat = fs.statSync(entrada)
    console.log('la entrada '+entrada+'tiene un tamaño de '+stat.size+ 'bytes')

    if (stat.isDirectory()){
        console.log('La entrada '+entrada+' es una carpeta')
    }

    if (stat.isFile()){
        console.log('La entrada '+entrada+' es un archivo')
    }
}


/*module.exports={
    leerArchivo,
    listarEntradasCarpetaActual
}*/

export default{
    leerArchivo,
    listarEntradasCarpetaActual
}