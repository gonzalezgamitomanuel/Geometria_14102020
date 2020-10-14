import { leerTeclado } from '../vistas/lecturaTeclado'

export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('1 -> Triangulo')
    console.log('2 -> Cuadrado')
    console.log('3 -> Circulo')
    console.log('4 -> Rectangulo')
    console.log('0 -> SALIR')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}