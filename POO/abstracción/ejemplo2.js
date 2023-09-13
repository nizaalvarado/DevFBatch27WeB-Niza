//Las clases en JavaScript no exiten, pero se pueden utilizar. 
//Refabricar código: Pasamos una función constructora a una clase de esta manera:

class persona {
    constructor(nombre, edad, profesion, hobbie){
        //Las clases cuentan con un método llamado "constructor(){}", en donde se construyen las propiedades. 
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
        this.hobbie = hobbie;
    }
}

let persona1 = new persona ("Jorge", "27 años" ,"Asesor", "Dibujar");

console.log(persona1);