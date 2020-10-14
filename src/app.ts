import { menu } from '../vistas/inicio'
import { leerTeclado } from '../vistas/lecturaTeclado'
const main = async () => {
    let n: number
    do {
        n = await menu()
        switch(n){
            case 1:
                console.log('Perímetro y área de un triángulo')
                let base, altura, lado1, lado2: number
                base =  parseInt( await leerTeclado('Introduzca base del triángulo'))
                altura =  parseInt( await leerTeclado('Introduzca altura del triángulo'))
                lado1 =  parseInt( await leerTeclado('Introduzca otro lado del triángulo'))
                lado2 =  parseInt( await leerTeclado('Introduzca el último lado del triángulo'))
                let perimetroT=perimetroTriangulo(base,lado1,lado2)
                let areaT=areaTriangulo(base,altura)
                console.log("Perímetro del triángulo -> "+perimetroT)
                console.log("Área del triángulo -> "+areaT)
                break
            case 2:
                console.log('Perímetro y área de un cuadrado')
                let lado:number
                lado = parseInt(await leerTeclado('Introduzca el lado del cuadrado'))
                let perimetroC=perimetroCuadrado(lado)
                let areaC=areaCuadrado(lado)
                console.log("Perímetro del cuadrado -> "+perimetroC)
                console.log("Área del cuadrado -> "+areaC)
                break
            case 3:
                console.log('Perímetro y área de un circulo')
                let radio:number
                radio = parseInt(await leerTeclado('Introduzca el radio del círculo'))
                let perimetroCi=perimetroCirculo(radio)
                let areaCi=areaCirculo(radio)
                console.log("Perímetro del círculo -> "+perimetroCi)
                console.log("Área del círculo -> "+areaCi)
                break
            case 4:
                console.log('Perímetro y área de un rectángulo')
                let baser, alturar:number
                baser = parseInt(await leerTeclado('Introduzca la base del rectángulo'))
                alturar = parseInt(await leerTeclado('Introduzca la altura del rectángulo'))
                let perimetroR=perimetroRectangulo(baser,alturar)
                let areaR=areaRectangulo(baser,alturar)
                console.log("Perímetro del rectángulo -> "+perimetroR)
                console.log("Área del rectángulo -> "+areaR)
                break
            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
const perimetroTriangulo = (l1:number, l2:number, l3:number) => {
    let res=0;
    res=l1+l2+l3
    return res
}

const areaTriangulo = (base:number, altura:number) => {
    let res=0
    res=(base*altura)/2
    return res
}

const perimetroCuadrado = (lado:number) => {
    let res=0
    res=lado*4
    return res
}

const areaCuadrado = (lado:number) => {
    let res=0
    res=lado*lado
    return res
}

const perimetroCirculo = (radio:number) => {
    let res=0
    res=2*radio*Math.PI
    return res
}

const areaCirculo = (radio:number) => {
    let res=0
    res=(radio*radio)*Math.PI
    return res
}

const perimetroRectangulo = (b:number, a:number) => {
    let res=0
    res=(b*2+a*2)
    return res
}

const areaRectangulo = (b:number, a:number) => {
    let res=0
    res=a*b
    return res
}
main()