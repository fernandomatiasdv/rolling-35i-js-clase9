const   nombre1 = "Mario",
        nombre2 = "Luigi",
        nombre3 = "Kupa"

console.log("nombre1 ", nombre1)
console.log("nombre2 ", nombre2)
console.log("nombre3 ", nombre3)

console.log("El primer nombre es " , nombre1)
    //    Keys:   0         1       2      3        4         5
const nombres = ["Mario", "Luigi", "Kupa", "otro", "Lucia", "Samuel", "Sabrina"]
console.log("El primer nombre es " , nombres[0])
console.log("El segundo nombre es " , nombres[1])
console.log("El segundo nombre es " , nombres[6])

//nombre1 = "Sandra"  // No se puede, da error!!
nombres[6] = "Sandra"
console.log(nombres[6])

// PUSH: Agrega un valor al final del array
nombres.push("Francisco")
nombres.push("Pochi")
nombres[12] = "Daniela"
nombres.push("Ramiro")
console.log(nombres)


// Método POP: Quita el último valor del array
nombres.pop()
console.log(nombres)

// Método UNSHIFT: Agregar un valor al comienzo del array:
nombres.unshift("Dolores")
console.log(nombres)

// Método SHIFT: Quita el primer valor del array
nombres.shift()
console.log(nombres)


let array = []

console.log(array)

// Método LENGHT: Nos devuelve la cantidad de valores que tiene el array
console.log(array.length)
console.log(nombres.length)

console.log(nombres[0])
console.log(nombres[1])
console.log(nombres[2])


let i
for(i=0; i < nombres.length; i++){
    if(nombres[i] !== undefined) {
        console.log(nombres[i])
    }
}

console.log("---------------------------------------")

let j
for(j=0; j < nombres.length; j++){
    if(nombres[j] !== undefined) {
        if(j !== 2){
            console.log(nombres[j])
        }
    }
}

console.log("---------------------------------------")


const nuestroArray = ["Perro", undefined, null, false, true, 4, "7"]
console.log(nuestroArray)

console.log(typeof nuestroArray[5])
console.log(typeof nuestroArray[6])
