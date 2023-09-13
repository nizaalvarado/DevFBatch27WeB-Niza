/* JavaScript es un lenguaje multiparadigma, principalmente orientado a objetos y basado en clases. 
Una clase es una fabrica de objetos, aka functions. 
Un paradigma es un modelo para resolver problemas computacionales */

function animal (nombre, color){
    this.nombre = nombre;
    this.color = color;
    this.sonidoAnimal = function sonidoAnimal(){
        return `Hola, estoy emitiendo el sonido de ${this.nombre}`;
    }
};

// Un objeto es una instancia de un prototipo. 
//Un objeto tiene atributos y métodos. 
//Los atributos son sus características.
//El método es una acción. Es como una función pero dentro de una clase. 

const Jaguar = new animal("Jaguar", "Amarillo");

const Jirafa = new animal("Jirafa", "Café");

const Conejo = new animal("Conejo", "Blanco");


//Para acceder a las propiedades de un objeto hacemos uso de la notación del punto. 
console.log(Jaguar.nombre);
console.log(Jirafa.color);

//También puedo acceder a las propiedades de un objeto con la notación [];
console.log(Conejo["nombre"]);

console.log(Jaguar.sonidoAnimal());








