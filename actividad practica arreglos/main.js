let lenguajes =["Python","JavaScript","Csharp","C++","Java","PHP","Ruby"]
//agrego al final del arreglo
lenguajes.push('Go')

//elimino primer elemento
lenguajes.shift()

//agregor un elemento al principio
lenguajes.unshift('Kotlin')

//
indice = lenguajes.indexOf('Java')
const eliminacion = lenguajes.splice(indice,2)

//
indice2 = lenguajes.indexOf('Csharp')
const agregar = lenguajes.splice(indice2,0,'Rust','Swift')
console.log(lenguajes)

function parrafo(){
    let longitud = lenguajes.length
    console.log(longitud)
    document.getElementById("p_long").textContent =`
        La longitud es: ${longitud}
    `
    let ultimo = lenguajes[longitud-1]
    document.getElementById("p_ult").textContent =`
        El ultimo elemento es ${ultimo}
    `
    let primero = lenguajes[0]
    document.getElementById("p_prim").textContent =`
        El primer elemento es ${primero}
    `
}
parrafo()

lenguajes.forEach((element,index) => {
    console.log(index+'-'+element)    
});
