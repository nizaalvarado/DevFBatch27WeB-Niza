function saludar(){
    let mensaje = 'Hola mundo!';
    return mensaje;
};

console.log(saludar());

//Las funciones piden parametros:
function suma (a, b){

}; //Aquí se están pidiendo valores. 

//Y reciben argumentos:
suma(7, 9); //Aquí se están recibiendo valores. 

//FUNCIONES IIFE: Funciones Anónimas Autoejecutables (Immediatly Invoked Function Executed);
(function (){
    return console.log("Hola, soy una función anónima");
})();

//FUNCIONES DE FLECHA:
(() =>{
    return console.log("Soy una función anónima, pero de flecha");
})();
//El ";" es necesario para indicar cuando termina tu función anónima. 

((a, b) =>{
    return console.log(a + b);
})(67, 9);

