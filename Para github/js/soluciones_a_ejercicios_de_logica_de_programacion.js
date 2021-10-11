// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

console.log("1) Programa una función que cuente el número de caracteres de una cadena de texto.")
let cadena = "No veo la hora de poder conseguir trabajo de desarrollador en España para poder irnos a vivir allá!"

console.log("------------------------------------------------------------")
console.log("Respuestas:")
function contarCaracteres() {
    let totalDeCaracteres = cadena.length;
    console.log(`El string a analizar es "${cadena}".`);
    console.log(`La cantidad de caracteres del String es de ${totalDeCaracteres}.`)
}
contarCaracteres();

// Adicional: analisis a un array, a un objeto, y a números.

console.log("------------------------------------------------------------")
console.log("Siguiendo la sugerencia de mi gran amigo Jon, en este ejercicio se hará el conteo de la cantidad de elementos de un array y la cantidad de caracteres de cada uno de ellos.")

let array = ["Naranja", "Verde", "Azul", "Rojo", "Blanco"];
console.log(`Array a contabilizar:`);
console.log(array)
function contarCaracteresDelArray() {
    console.log("Resultado del conteo:")
    let totalDeElementos = array.length;
    console.log(`La cantidad de elementos que contiene el array es de ${array.length}:`)
    for (let i = 0; i < totalDeElementos; i++) {
        console.log(`Elemento ${i + 1}) ${array[i]} (con ${array[i].length} caracteres)`)
    }
    //Dejo sin eliminar la primera manera en la que la había resuelto para luego cambiarla por la arriba expresada:
    // console.log(`El array contiene ${totalDeElementos} elementos, y la cantidad de caracteres en cada uno es de: 
    // 1) ${array[0]} -> ${array[0].length} caracteres
    // 2) ${array[1]} -> ${array[1].length} caracteres 
    // 3) ${array[2]} -> ${array[2].length} caracteres 
    // 4) ${array[3]} -> ${array[3].length} caracteres 
    // 5) ${array[4]} -> ${array[4].length} caracteres`
}
contarCaracteresDelArray()
console.log("------------------------------------------------------------")


// ANALISIS DEL OBJETO
console.log("En este caso, el conteo se hará sobre un objeto el cual contiene también un dato de tipo numérico.")

let objeto = {
    nombre: "Ramiro",
    apellido: "Pezzone",
    edad: 37,
    nacionalidad: "Argentino"
};

console.log("El objeto en cuestión será:");
console.log(objeto);
console.log("Resultado del conteo:")
let keysDelObjeto = Object.keys(objeto);
let cantidadDeKeysDelObjeto = Object.keys(objeto).length;
console.log(`El objeto contiene ${cantidadDeKeysDelObjeto} Keys:`)

// CICLO FOR QUE PRINTEA LOS VALORES Y CANTIDAD DE CARACTERES DE LA KEYS
for (let i = 0; i < cantidadDeKeysDelObjeto; i++) {
    console.log(`${i + 1}) ${keysDelObjeto[i]} (con ${keysDelObjeto[i].length} caracteres)`)
}

console.log(`Y sus respectivos Values son:`);
// FUNCIÓN CON CICLO FOR Y CONVERSIÓN DE NUMBERS A STRINGS QUE PRINTEA LOS VALORES Y CANTIDAD DE CARACTERES DE LOS VALUES
let valuesDelObjeto = Object.values(objeto);

let funcionConversora = function conversor() {
    for (let i=0; i < valuesDelObjeto.length; i++) {
        let valuesDelObjetoPasados = valuesDelObjeto[i].toString()
        let extDeResultado = valuesDelObjetoPasados.length;
        console.log(`${i+1}) ${valuesDelObjeto[i]} (con ${extDeResultado} caracteres)`)
    }
}
funcionConversora();

// FIN EJERCICIO 1

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados
console.log("------------------------------------------------------------")
console.log("------------------------------------------------------------")

console.log("2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados.")
console.log("------------------------------------------------------------")
console.log("Respuestas:")

let stringEj2 = `"Si crees que puedes, estás en lo cierto. Si crees que no puedes, también estás en lo cierto. En ambos casos tienes razón (Henry Ford)"`
let ext = 13;

console.log(`El texto a trabajar será: ${stringEj2}`);
const recorteDeString = (ext) => {
    let resultado = stringEj2.slice(0,ext);
    console.log(resultado)
}
console.log(`La cantidad de caracteres que se tomó como parámetro para recortar el texto es de ${ext}, quedando como resultado final el siguiente: `)
recorteDeString(ext)

// FIN EJERCICIO 2
console.log("------------------------------------------------------------")
console.log("------------------------------------------------------------")

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

console.log("3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter.")
console.log("------------------------------------------------------------")
console.log("Respuestas:")

let textoEj3 = `"Una vida que no ha sido examinada no merece ser vivida"`
console.log(`El texto a tratar en este ejercicio es de nuestro amigo en común, "Sócrates", y esta es: 
${textoEj3}`)

let stringToArray = textoEj3.split(/\s+/)
console.log(stringToArray)

// FIN EJERCICIO 3
console.log("------------------------------------------------------------")
console.log("------------------------------------------------------------")

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

console.log("4) Programa una función que repita un texto X veces")
console.log("------------------------------------------------------------")
console.log("Respuestas:")
let textoEj4 = ["Los grandes resultados requieren grandes ambiciones (Heráclito)"]
console.log(`El texto a tratar en este ejercicio será:
"${textoEj4}", el cual se repetirá tres veces`)

function repeticionDeString () {
    for(let i=0; i<3;i++) {
        console.log(`${i+1}) ${textoEj4}`)
    }
}

repeticionDeString()

// FIN EJERCICIO 4
