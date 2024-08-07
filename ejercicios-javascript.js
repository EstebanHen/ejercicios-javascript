//1                                     RETO 14 VERIFICACIÓN DE CONTRASEÑA  

const contraseña = 'ESCRIBA LA CONSTRASEÑA AQUÍ' // <--

function verificarContraseña(contraseña) {
    const requisitos = [];
    
    if (contraseña.length < 8) {
        requisitos.push("La contraseña debe tener mínimo 8 caracteres.");
    }
    if (!/[A-Z]/.test(contraseña)) {
        requisitos.push("La contraseña debe tener mínimo una mayúscula.");
    }
    if (!/[a-z]/.test(contraseña)) {
        requisitos.push("La contraseña debe tener mínimo una minúscula.");
    }
    if (!/[0-9]/.test(contraseña)) {
        requisitos.push("La constraseña debe tener mínimo un número.");
    }

    if (requisitos.length === 0) {
        return "Contraseña válida";
    } else {
        return "Requisitos no cumplidos:\n" + requisitos.join("\n"); // \n sirve para agregar una línea entre cada elemento del array 'requisitos', y .join sirve para concatenar todos los elementos del mismo array

        
    }
}
const resultado = verificarContraseña(contraseña);
/* console.log(resultado); */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//2                                  RETO 1 CALCULADORA DE BMI

let peso = 60  //INGRESE SU PESO EN KILOGRAMOS
let altura = 1.82  //INGRESE SU ALTURA EN METROS
let alturaFórmula = altura * 2
let BMI = peso / alturaFórmula
const función = interpretarBMI(BMI); //Si quito esta línea se daña el código, no entiendo el motivo.

function interpretarBMI(BMI) {
    const diagnóstico = [];

    if (BMI < 18.6) {
        diagnóstico.push("Usted tiene un peso bajo")
    }
    if (BMI > 18.4 && BMI < 25) {
        diagnóstico.push("Usted tiene un peso normal")
    }
    if (BMI > 24.9 && BMI < 30) {
        diagnóstico.push("Usted tiene sobrepeso")
    }
    if (BMI > 29.9) {
        diagnóstico.push("Usted tiene obesidad")
    }
    
    /* console.log("Su BMI es:\n" + BMI +  '\n' + diagnóstico) */
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3                                  RETO 19 ENCRIPTADOR SIMPLE

function encriptarMensaje(mensaje) {
    let mensajeEncriptado = '';

    for (let i = 0; i < mensaje.length; i++) {
        let caracter = mensaje[i];
        let codigoAscii = caracter.charCodeAt(0); //esta función me permite acceder al código ASCII del caracter seleccionado "(0)"

        if (caracter >= 'a' && caracter <= 'z') {
            mensajeEncriptado += String.fromCharCode(((codigoAscii - 'a'.charCodeAt(0) + 1) % 26) + 'a'.charCodeAt(0)); // El String me permite hacer de la cadena de texto un objeto para poder crear instancias dentro
        
        } else if (caracter >= 'A' && caracter <= 'Z') {
            mensajeEncriptado += String.fromCharCode(((codigoAscii - 'A'.charCodeAt(0) + 1) % 26) + 'A'.charCodeAt(0)); // Utilicé "% 26" para poder convertir el ASCII de 'z' en 'a', porque cuando el charCodeAt(0) es mayor a 25 (el caso de 'z' tras sumar 1), se hace la división y se devuelve el restante (0 en este caso, que corresponde a 'a') e inicia de nuevo el ciclo
        
        } else if (caracter !== ' ') { // Sirve para que los espacios no se añadan al mensaje encriptado y así poder eliminarlos
            mensajeEncriptado += caracter;
        }
    }

    return mensajeEncriptado;
}


const mensaje = " " //  ESCRIBA AQUÍ EL MENSAJE QUE QUIERE ENCRIPTAR    
const mensajeEncriptado = encriptarMensaje(mensaje);

/* console.log("Mensaje encriptado: " + mensajeEncriptado); */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4                      RETO 2 CONVERSOR DE TEMPERATURAS

let temperaturaCelsius = 50 // INGRESA AQUÍ LA TEMPERATURA QUE QUIERES CONVERTIR A FAHRENHEIT
let temperaturaFahrenheit = 50 //INGRESA AQUÍ LA TEMPERATURA QUE QUIERES CONVERTIR A CELSIUS

let resultadoEnFahrenheit = temperaturaCelsius * 9/5 + 32;
let resultadoEnCelsius = (temperaturaFahrenheit - 32) * 5/9;

/* console.log(temperaturaCelsius + "°C son " + resultadoEnFahrenheit + "°F"); */
/* console.log(temperaturaFahrenheit + "°F son " + resultadoEnCelsius + "°C"); */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//5                      RETO 5 AGENDA TELEFÓNICA

let agendaTelefonica = {};

agendaTelefonica["Esteban Henao"] = "3045208082";
agendaTelefonica["Katerine Sánchez"] = "3116015019";
agendaTelefonica["Pedro Martínez"] = "3107251042";

let buscarContacto = "" // INGRESA AQUÍ EL NOMBRE DEL CONTACTO QUE QUIERES BUSCAR EN LA AGENDA

/* if (agendaTelefonica.hasOwnProperty(buscarContacto)) { // hasOwnProperty es un método que me permite saber si el objeto buscado tiene una propiedad en específico
    console.log("El teléfono de " + buscarContacto + " es " + agendaTelefonica[buscarContacto])
} else { console.log("El contacto " + buscarContacto + " no se encuentra en la agenda")} */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//6                     RETO 7 VERIFICADOR DE CORREO ELECTRÓNICO

let correo = "a@.#"

function verificarCorreo(correo) {
    const regexVerificarCorreo = /^[^\.\s@]+@+\.[^\.\s@]+$/;
    if (regexVerificarCorreo.test(correo)) {
        return " es válido";
    } else {
        return " no es válido";
    }
}
/* console.log("El e-mail " + correo + verificarCorreo(correo)) */

// Hay otra expresión regular que es más utilizada en la verificación de correos (^ [a-zA-Z0-9._%+-]+@ [a-zA-Z0-9.-]+. [a-zA-Z] {2,}$) porque puede verificar muchos más factores, pero esta es la que me permite cumplir estrictamente con lo que me pidieron en el reto

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//8                     RETO 8 CALCULADOR DE PROPINAS

let totalFactura = 200000 // INGRESA EL TOTAL DE LA CUENTA
let porcentajePropina = 10 // INGRESA EL PORCENTAJE DEL TOTAL DE LA CUENTA QUE QUIERES DAR COMO PROPINA
propinaTotal = totalFactura / 100 * porcentajePropina
/* console.log("Debes dar " + propinaTotal + " de propina") */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//9                    RETO 11 DECODIFICADOR DE MENSAJES SECRETOS

const mensajeCodificado = "El gato rojo tiene hambre";
const diccionario = {
    "gato": "agente",
    "rojo": "secreto",
    "hambre": "misión"
};

function decodificarMensaje(mensaje9, diccionario) {
    const palabras9 = mensaje9.split(' ');
    const mensajeDecodificado = palabras9.map(palabra => { //la función de flecha me permite buscar por cada palabra del array 'palabras' su equivalente en el objeto 'diccionario', si la encuentra, la retornará, si no la encuentra, devolverá la misma palabra codificada
        return diccionario[palabra] || palabra;
    }).join(' ');
    return mensajeDecodificado;
}

const mensajeDecodificado = decodificarMensaje(mensajeCodificado, diccionario);
/* console.log(mensajeDecodificado) */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//10                    RETO 12 INVERSOR DE PALABRAS

function invertirPalabra(palabra) { // Esta función recibe el array 'palabra' que es la frase ya spliteada, la splitea de nuevo letra por letra, la invierte con un .reverse() y luego la vuelve a unir con .join('')
    return palabra.split('').reverse().join('');
}

function invertirFrase(frase) { // Esta función es la que splitea la frase en palabras
    const palabras10 = frase.split(' ');

    const palabrasInvertidas = palabras10.map(invertirPalabra); // aquí se le aplica la función de invertirPalabra a cada palabra de la frase ya spliteada, y luego se une con otro .join(' ')

    const fraseInvertida = palabrasInvertidas.join(' ');

    return fraseInvertida;
}

const frase = "Hola Mundo";
/* console.log(invertirFrase(frase)); */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//11                    RETO 36 CUENTA ATRÁS

function cuentaRegresiva(inicio, intervalo) {
    function conteo() { // Repite la función indefinidamente hasta que el valor de inicio sea menor a 0
      console.log(inicio); // Imprime en consola el valor de inicio antes de ejecutar la función cada vez
      inicio--; // Le resta 1 a inicio
      if (inicio >= 0) {
        setTimeout(conteo, intervalo * 1000); // setTimeout me permite elegir el retraso con el que se ejecutará cada vez la función, que en este caso es elegido por el usuario, se multiplica por mil porque el intervalo recibe milisegundos
      }
    }
  
    conteo();
  }
  
  /* cuentaRegresiva(5, 1); */   // REEMPLACE EL PRIMERA VALOR POR EL TIEMPO EN SEGUNDOS EN EL QUE DESEA QUE INICIE LA CUENTA REGRESIVA