#fizzbuzz

let resultado = fizzBuzz(); //Adicionar o valor a ser verificado dentro dos ()
console.log(resultado);

function fizzBuzz(entrada){
  if  (typeof entrada !== "number") {
    return "Não é um número";
  } else if((entrada % 3 === 0) && (entrada % 5 === 0)){
    return "FizzBuzz";
  } else if(entrada % 5 === 0) {
    return "Buzz"
  } else if (entrada % 3 === 0) {
    return "Fizz"
  } else {
    return entrada;
  };
};

//Conferir no console

