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


//Ejercicio 20
function resta(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado de la resta de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 5
  // 5, 5 ---> 0
  // Tu código:
  return x-y;
}

var resutl = 0;
result = resta(2,5);
console.log(result);

//Ejercicio 22

function multiplica(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado de la multiplicacion de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 50
  // 5, 5 ---> 25
  // Tu código:
  return x*y;
}

var resutl = 0;
result = multiplica(7,5);
console.log(result);

//Ejercicio 23

function obtenerResto(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado del resto de la division de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 0
  // 16, 5 ---> 1
  // Tu código:

  return x % y;
}
var resutl = 0;
result = obtenerResto(10,9);
console.log(result);

//Ejercicio 24
function agregarSimboloExclamacion(str) {
  // La función recibe un argumento llamado str el cual es un string.
  // Agrega un símbolo de exclamación al final del string str y retórnalo.
  // Por ejemplo: 
  // "hello world" ---> "hello world!"
  // Tu código:
  return console.log(str+"!");
}

var exclamacion = agregarSimboloExclamacion("Vas muy bien");

//Ejercicio 25
function combinarNombres(nombre, apellido) {
  // La función recibe dos argumentos llamados "nombre" y "apellido" los cuales son string.
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Por ejemplo: 
  // "Soy", "Henry" ---> "Soy Henry"
  // Tu código:
  return console.log(nombre+ " "+ apellido);
}

var nombreCompleto = combinarNombres("Lucas","Palacios");

//Ejercicio 26
function obtenerSaludo(nombre) {
  // La función recibe un argumento llamado nombre el cual es un string. 
  // Toma el string "nombre" y concatena otros string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Retorna el nuevo string. 
  // Tu código:

  return "Hola " + nombre + "!";
  

}
//var saludo = obtenerSaludo("Juan");
//console.log(saludo);
console.log(obtenerSaludo("Pedro"));

//Ejercicio 27
function obtenerAreaRectangulo(alto, ancho) {
  // La función recibe dos argumentos llamados "alto" y "ancho" los cuales son numeros.
  // Retornar el área de un rectángulo teniendo su alto y ancho.
  // Por ejemplo: 
  // 2, 2 ---> 4
  // 0, 2 ---> 2
  // Tu código:
  return alto * ancho;

}
console.log(obtenerAreaRectangulo(7,3));

//Ejercicio 28
function retornarPerimetro(lado) {
  // La función recibe un argumento llamado lado el cual es un numero.
  // Retornar el perimetro de un cuadrado.
  // Por ejemplo: 
  // 2 ---> 8
  // 0 ---> 0
  // Tu código:
  return lado * 4;

}
console.log(retornarPerimetro(17));

//Ejercicio 30
function areaDelTriangulo(base, altura) {
  // La función recibe dos argumentos llamados "base" y "altura" los cuales son numeros.
  // Retornar el área de un triangulo teniendo su base y altura.
  // Por ejemplo: 
  // 10, 5 ---> 25
  // 0, 10 ---> 0
  // Tu código:
  return base * altura * 0.5
}
  console.log(areaDelTriangulo(4,17));

//Ejercicio 31
function elevarAlCuadrado(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes Retorna el valor de "num" elevado al cuadrado.
  // Por ejemplo: 
  // 6 ---> 36
  // 0 ---> 0
  // Tu código:
  return Math.pow(num, 2);

}
console.log(elevarAlCuadrado(64));

//Ejercicio 32
function elevarAlCubo(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes Retorna el valor de "num" elevado al cubo.
  // Por ejemplo: 
  // 3 ---> 27
  // 0 ---> 0
  // Tu código:

}

//Ejercicio 33
function elevar(num, exponent) {
  // La función recibe dos argumentos llamados "num" y "exponent" los cuales son numeros.
  // Debes Retorna el valor de "num" elevado al "exponent".
  // Por ejemplo: 
  // 2, 2 ---> 4
  // 0, 5 ---> 0
  // Tu código:
  return Math.pow(4,4);
}
console.log(elevar());


//Ejercicio 34
function redondearNumero(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes redondear "num" al entero más próximo y retornarlo.
  // Por ejemplo: 
  // 1.5 ---> 2
  // 0.1 ---> 0
  // Tu código:
  return Math.round(num);
}
console.log(redondearNumero(-1.7555555));

//Ejercicio 35
function redondearHaciaArriba(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes redondear "num" hacia arriba y retórnalo.
  // Por ejemplo: 
  // 2.5 ---> 3
  // 0.1 ---> 1
  // Tu código:
  return Math.ceil(num);
}
  console.log(redondearHaciaArriba(-1.9));

  //Ejercicio 36
function numeroRandom() {
  // La función numeroRandom debe generar un número al azar entre 0 y 1 y retornarlo.
  // Tu código:
  return Math.round(Math.random());
  
}
console.log(numeroRandom());
 
//BUCLES

//Ejercicio 1

function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
  if (a == b && a<0){
    return true;
  } else{
    return false;
  }
}
console.log(esIgualYNegativo(-3,-3)); 

//Ejercicio 2
function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:
  if (booleano1 == booleano2){
  return true;
  } else{
    return false;
  }
}
console.log(esVerdaderoYFalso(false, true));

//Ejercicio 3
function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if(x<y){
    console.log("El mas grande es y: " + y);
  } else if (x>y){
    console.log("El mas grande es x: " + x);
  } else if (x==y){
    return x || y;
  }
}
console.log(obtenerMayor(10, 15));

//Ejercicio 4
function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
  if(edad >= 18){
    console.log("Allowed");
  }else{
    console.log("Not Allowed");
  }

}
console.log(mayoriaDeEdad(18));
 
//Ejercicio 5
function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  if (valor === true){
    console.log("Soy verdadero.");
  } else{
    console.log("Soy falso.");
  }
}
console.log(esVerdadero(true));

//Ejercicio 6
function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

let digitos = num.toString();
let result = digitos.length;

if (result === 3) {
  console.log(result);
  return true;
} else {
  console.log(result);
  return false;
}

}
console.log(tieneTresDigitos(1234));

//Ejercicio 10
function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
  if (num == 5 || num == 10){
    return true;
  } else{
    return false;
  }
}
console.log(esDiezOCinco(10));

//Ejercicio 11
function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  return(num<50 && num>20);
 
}
console.log(estaEnRango(10));

//Ejercicio 12
function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  switch (true){
    case num % 3 == 0 && num % 5 == 0: console.log("FizzBuzz");
    break;
    case num % 5 == 0: console.log("Buzz");
    break;
    case num % 3 == 0: console.log("Fizz")
    break;
    default: return false;
   
  }
}
console.log(fizzBuzz(7));
//13
function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
 
  return (Number.isInteger(num));
 
}
console.log(esEntero(0.4));
//14
function operadoresLogicos(num1, num2, num3) {
  // La función recibe tres números distintos.
  // Si num1 es mayor a num2 y a num3, y además es positivo, retorna ---> "Numero 1 es mayor y positivo".
  // Si alguno de los tres números es negativo, retorna ---> "Hay negativos".
  // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retorna el nuevo valor.
  // Si todos los argumentos son cero, retorna ---> "Error".
  // Si no se cumple ninguna de las condiciones anteriores, retorna false.
  // Tu código:
  if(num1<0 || num2<0 || num3<0) {
      return ("Hay negativos");    
  } else if (num1>num2 && num1 > num3 && num1 > 0){
    return ("Numero 1 es mayor y positivo");  
  } else if (num3> num1 && num3>num2){
    num3++;
    return (num3);
  }else if (num1 == 0 && num2 == 0 && num3 == 0){
    return ("Error");
  } else{
    return false;
  }
 
}
console.log(operadoresLogicos(2,5,3));

//15
function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  switch(numero){
    case 1: console.log("Lunes");
    break;
    case 2: console.log("Martes");
    break;
    case 3: console.log("Miercoles");
    break;
    case 4: console.log("Jueves");
    break;
    case 5: console.log("Viernes");
    break;
    case 6: console.log("Sabado");
    break;
    case 7: console.log("Domingo");
    break;
    default: console.log("No es un dia de la semana");
    break;
  }
 
}
console.log(obtenerDiaSemana(7));

//18
function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let c = a;
  for (var i = a+1; i <= b; i++){
    c = c * i;
  }
  return c;
}
console.log(productoEntreNúmeros(1,3))

//Ejercicio 19
function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let suma=0;
  for(let i = 1; i=>b; i++){
    suma += i;
  }
  return suma;
}
console.log(sumarHastaN(3));
//Ejercicio 20
function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  let suma = 0;
  
  for(let ){}
}
 
  
  


