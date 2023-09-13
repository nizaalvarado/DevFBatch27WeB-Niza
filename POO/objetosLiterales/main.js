//Los objetos literales son una estructura de datos que también son conocidos como arreglos asociativos
//o mapas. 

//Los objetos literales no son lo mismo que los objetos en POO. 

//Los objetos literales son un objeto de tipo "Object";

const miCuenta = {
    id: 22049380,
    nombre: Niza, 
    materias: ["Español", "Matemáticas", "Filosofía", "Ciencia"],
    mostrarGurpo (){
        return `El alumno ${this.nombre} se encuentra cursando la materia ${this.materia[3]}`;
    }
};

//Las propiedades se definen como pares de clave y valor. 

//La palabra "this" es un objeto que se crea para cada función, con excepción de las arrow function 
//y también existe para cada objeto (ya sea literal o POO) y representa una autoreferencia para poder acceder
//a mis propias propiedades.  

console.log(miCuenta);

//Los objetos literales son diferentes a JSON. 

//Pueden almacenar cualquier tipo de datos, desde primitivos, hasta referencias. 

//Referencias: objetos y arreglos. 
//Primitivos: todos los demás. 

//Podemos acceder a los valores de nuestras propiedades y métodos usando la notación del punto (Dot Notation);

console.log(miCuenta.materias[1]);
console.log(miCuenta.mostrarGurpo());

//También podemos acceder a los valores de nuestros objetos con la notación de corchetes cuadrados. 


