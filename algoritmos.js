//primero declaramos las variablres a utilizar en el 
//algotirmo

function operacionesBasicas() {
    var a=0;
    var b=0;
    var suma=0;
    var resta=0;
    var multi=0;
    var divi=0;
    //solicitamos los valores y los asignamos en los valores a y b 
    //atraves de la funcion prompt
    A = parseFloat(prompt("por favor ingrese el primer valor"))
    B = parseFloat(prompt("por favor ingrese el segundo valor"))
    //realizamos las operaciones del algoritmo 
    suma = A +  B;
    resta = A - B;
    multi = A * B;
    divi = A / B;
    //imprimimos los resultados en pantalla
    alert("el resultado de la suma es: " + suma);
    alert("el resultado de la resta es: " + resta);
    alert("el resultado de la multiplicacion es: " +multi);
    alert("el resultado de la division es: " + divi);   
}

function  promedio() {
    //el promdeio se calcula al sumar la cantidaad de notas
    //y dividir el resultado de esta suma en la cantidad
    var nota1 = 0;
    var nota2 = 0;
    var nota3 = 0;
    var nota4 = 0;
    var nota5 = 0;
    var promedio = 0;

    nota1 = parseFloat(prompt("por favor ingrese la primera nota"));
    nota2 = parseFloat(prompt("por favor ingrese la segunda nota"));
    nota3 = parseFloat(prompt("por favor ingrese la tercera nota"));
    nota4 = parseFloat(prompt("por favor ingrese la cuarta nota"));
    nota5 = parseFloat(prompt("por favor ingrese la quinta nota"));

    promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

    if (promedio <= 2.9) {
       alert("reprobo, su promedio es de: " + promedio) 
    }else{
        alert("aprobo, su promedio es de: " + promedio) 

    }
}

function  mayordedosnumeros() {
var a=0;
var b=0;

a = parseFloat(prompt("por favor ingrese el primer numero"));
b = parseFloat(prompt("por favor ingrese el segundo numero"));

if ( a > b) {
    alert("el numero mayor es: "  +a);
}else {  
alert("el numero mayor es: " + b);

}

}

function menordetresnumeros() {
    var a = 0;
    var b = 0;
    var c= 0;

    a = parseFloat(prompt("por favor ingrese el primer numero"));
    b = parseFloat(prompt("por favor ingrese el segundo numero"));
    c = parseFloat(prompt("por favor ingrese el tercer numero"));

    if (a <= b and a <= c) {
        alert("el numero menor es: " +a);

    }else if (b < a and b <= c) {
            alert("el numero menor es: " +b);

        }else{
            alert("el numero menor es: " +c );
        }
    }


function paroimpar() {

var a = 0;

a = parseFloat(prompt("por favor ingrese el numero"));

if (a %  2 == 0) {
    alert("el numero par es: " + a );
}else {
    alert("el numero impar es: " + a);
}
    
}


function cuadrado() {

    var a = 0;

    a = parseFloat(prompt("por favor ingresar el numero"));

    alert("el resultado del cuadrado es: " + cuadrado)
}

function area()  {
  
var b = 0;
var h = 0;
var area = 0;

b = parseFloat(prompt("ingresar la base del triangulo"));
h = parseFloat(prompt("ingresar la altura del triangulo"));
area = ( b * h ) / 2;

alert("el area del triangulo es: " + area + "cm^2")


}

function determinarlosmetrosacentimetros() {
    var a = 0;
    var b = 0;
    var centimetros = 0;

    a = parseFloat(prompt("por favor ingrese el valor en metros"));

    centimetros = a * 100;

    alert("el resultado de: " + a + "es:" + centimetros)

}

function añoenquenacio() {

    var año actual = 0;
    var edad = 0;
    var nacimiento

    año actual = parseFloat(prompt("por favor ingrese el año actual"));
    edad = parseFloat(prompt("por favor ingrese su edad"));

    nacimiento = (año actual - edad);

    alert("el año de nacimiento es: " + nacimiento)
}

function  inversion() {

    var c = 0;
    var ganancia = 0;

    c =parseFloat(prompt("ingrese el capital a invertir"));

    ganancia = c * 0.02

    alert("la ganancia es: " + ganancia)

    
}

function pagodelcliente() {

    var k = 0;
    var p= 0;
    var descuento = 0;

    k = parseFloat(prompt("ingrese kilos de manzana compradas"));

   descuento = p * k

    alert("el total a pagar por kilos es: " + descuento)
}