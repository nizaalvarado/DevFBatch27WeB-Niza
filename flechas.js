//Las funciones de flecha nos dan una sintaxis más limpias y más fáciles de leer. 

let saludar = () => {
    return "Hola mundo";
};
//Las funciones anónimas normalmente se almacenan en constantes o en variables. 
//En las funciones de flecha no existe el objeto "This"; Éstas no pueden ser prototipos, es decir, no pueden 
// tener atributos, no las puedes elegir para trabajar en POO. 

console.log(saludar());

//Short Arrow Functions. 
/*Reglas de sintaxis:

1. Si mi función solo retorna un valor, puedo quitar el 'return' explicito, los paréntesis y hacer uso del return 
implicito. */

const suma = (a, b) => a + b;


console.log(suma(4, 6));

/* 2. Si mi función solo retorna un valor y pide un solo parámetro, puedo aplicar la regla anterior y además quitar 
los paréntesis del parámetro. */

const saludarDos = persona => "Hola " + persona;

console.log(saludarDos("Jorge"));

const simplicarFlecha = (a, b) => a + b; 

console.log(simplicarFlecha (3, 16));


