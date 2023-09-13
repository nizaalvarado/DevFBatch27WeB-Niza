//Crear un arreglo desde cero (: 

class miArreglo{
    constructor(){
        this.lenght = 0;
        this.data = {};
    };
    get(index){
        return this.data[index];
    }

    push(element){
        this.data[this.lenght] = element;
        this.lenght++;
        return this.data;
    }
};

const arr1 = new miArreglo()

console.log(arr1);

arr1.push("Dolores");
