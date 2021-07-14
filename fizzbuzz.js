// FizzBuzz
// Divisivel por 3 => 'Fizz',
// Divisivel por 5 => 'Buzz',
// Divisivel por 3 e 5 => 'FizzBuzz',
// Se não for um numero => 'Não é um número',
// Se não for divisivel nem por 3 nem por 5 => Entrada


function fizzBuzz(entrada){
  if  (typeof entrada !== "number") {
    console.log("Não é um número");
    return "Não é um número";
  } else if((entrada % 3 === 0) && (entrada % 5 === 0)){
    console.log("FizzBuzz");
    return "FizzBuzz";
  } else if(entrada % 5 === 0) {
    console.log("Buzz");
    return "Buzz"
  } else if (entrada % 3 === 0) {
    console.log("Fizz");
    return "Fizz"
  } else {
    console.log(entrada);
    return entrada;
  }
}

fizzBuzz(1);

