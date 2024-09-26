//Ejercicio 12
function tienenMismaLongitud(str1, str2) {
    // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
    // Retorna true si los dos strings tienen la misma longitud.
    // De lo contrario, retorna false.
    // Por ejemplo: 
    // "SoyHenry", "HenrySoy" ---> true 
    // "hi", "there" ---> false 
    // Tu código:


/*if (str1.length > str2.length) {
  console.log("La cadena 1 es más larga");
} else if (str1.length < str2.length) {
  console.log("La cadena 2 es más larga");
} else {
  console.log("Ambas cadenas tienen la misma longitud");
}*/
return str1.length === str2.length;
    
  }
var result=tienenMismaLongitud("cuatro","cincos");

console.log(result);

//Ejercicio 13
function menosQueNoventa(num) {
    // La función recibe un argumento llamado num.
    // Retorna true si el argumento "num" es menor que noventa.
    // De lo contrario, retorna false.
    // Por ejemplo: 
    // 50 ---> true
    // 91 ---> false
    // Tu código:
    
    return num<90;
  }
  
  var result= menosQueNoventa(90);
  console.log(result);

  //Ejercicio 14
  function mayorQueCincuenta(num) {
    // La función recibe un argumento llamado num.
    // Retorna true si el argumento "num" es mayor que cincuenta.
    // De lo contrario, retorna false.
    // Por ejemplo: 
    // 51 ---> true
    // 15 ---> false
    // Tu código:
    return num>50;
  }
  
  var result= mayorQueCincuenta(50);
  console.log(result);

  //Ejercicio 15
  function esPar(num) {
    // La función recibe un argumento llamado num.
    // Retorna true si el argumento "num" es par.
    // De lo contrario, retorna false.
    // Por ejemplo: 
    // 14 ---> true
    // 15 ---> false
    // Tu código:

    var pato = num % 2 == 0;
    return pato;
  
  }
  
  var result= esPar(17);
  console.log(result);

  //Ejercicio 16
  function esImpar(num) {
    // La función recibe un argumento llamado num.
    // Retorna true si el argumento "num" es impar.
    // De lo contrario, retorna false.
    // Por ejemplo: 
    // 15 ---> true
    // 14 ---> false
    // Tu código:
    var pato = num % 2 != 0;
    return pato;
  
  }
  
  var result = esImpar(5);
  console.log(result);


//Ejercicio 17
function esPositivo(num) {
    // La función recibe un argumento llamado num el cual es un numero entero.
    // Retorna como resultado un string que indica si el número es positivo o negativo.
    // Por ejemplo: 
    // Si el número es positivo ---> "Es positivo".
    // Si el número es negativo ---> "Es negativo".
    // Si el número es 0, devuelve false.
    // Tu código:
    if (num > 0){
        return console.log("El numero es positivo");
    } else if (num < 0) {
        return console.log("El numero es negativo");
    } else{
        return false;
    }
  }
  
  var result = esPositivo(-1);
  console.log(result)

//Ejercicio 18

function esVocal(letra) {
    // La función recibe un argumento llamado letra el cual es un string.
    // Retorna como resultado un string que indica si el argumento letra es una vocal.
    // de lo contrario retorna el string "Dato incorrecto"
    // Por ejemplo: 
    // "a" ---> "Es vocal"
    // "u" ---> "Es vocal"
    // "n" ---> "Dato incorrecto"
    // "texto largo" ---> "Dato incorrecto"
    // Tu código:
    switch (letra){
    case "a": console.log("Es vocal");
    break;
    case "e": console.log("Es vocal");
    break;
    case "i": console.log("Es vocal");
    break;
    case "o": console.log("Es vocal");
    break;
    case "u": console.log("Es vocal");
    break;
    default: console.log("Dato incorrecto");
    }
    
  }
  
  var result;
  result= esVocal("a");
  console.log(result);


//Ejercicio 19
function suma(x,y) {
    // La función recibe dos argumentos llamados "x" e "y" que son números.
    // Retorna el resultado de la suma de estos argumentos.
    // Por ejemplo: 
    // 5, 5 ---> 10
    // -5, 5 ---> 0
    // Tu código:
    return x + y;
  }
  var result = 0
  result = suma(-5,4);
  console.log(result);


//
  
 
  
  


