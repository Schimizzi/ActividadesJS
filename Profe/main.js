/* Ejercicio 1 Escriba un programa en donde el usuario ingrese 2 números e indique cuál es el
mayor*/

/*
const num1 = prompt("ingrese el primer numero: ");
const num2 = prompt("ingrese el segundo numero: ");

if (num1 > num2){
    console.log("el "+num1 +" es mayor que el "+num2)
}else if(num1 < num2){
    console.log("el "+num2 +" es mayor que el "+num1)
}else {
    console.log("los numeros ingresados son iguales")
}
 */

/* Ejercicio 2 El costo del helado es de $5. Escriba un programa en donde se le pida al usuario
ingresar la cantidad de helados que quiere y mostrar cuánto le saldría.*/

/* const valor_helado = 5;
const cant_helado = prompt("Ingrese la cantidad de helados: ");
const total = valor_helado * cant_helado;

console.log("El total de la compra es: $" + total); */

/* Ejercicio 3 Escriba un programa en donde se le solicite la edad al usuario y calcule su año de
nacimiento, tomando en cuenta que el año actual es 2023.*/

/* const mes = prompt("Ingrese el numero de mes de su cumpleaños");
const edad = prompt("Ingrese su edad");
const anio_actual = 2023;
const resultado = anio_actual - edad;

if(mes <= 9){
    console.log("tu año de naciomiento es: "+resultado)
}else{
    console.log("tu año de naciomiento es: " + (resultado-1))
};
 */

/* Ejercicio 4 Escriba un programa en donde el usuario ingrese 3 notas, calcule el promedio y si es
mayor o igual a 4 le indique que está aprobado con un alert.*/
/* 
const nota1 = parseInt(prompt("ingrese la primer nota"));
const nota2 = parseInt(prompt("ingrese la segunda nota"));
const nota3 = parseInt(prompt("ingrese la tercer nota"));
const prome = (nota1 + nota2 + nota3)/3;

if (prome >= 4) {
    alert("ud se encuentra aprobado!")
}else {
    alert("ud no ha aprobado!")
}
 */

/* Ejercicio 5 Escriba un programa donde se le solicite el año de nacimiento. Si es mayor a 18 se
le tiene que pedir que ingrese su nombre y apellido para mostrarle un texto con el
formato: “Hola nombre apellido, tu edad actual es: edad”. Ejemplo: “Hola Rodrigo
Río, tu edad actual es 25”.
NOTA: Solo solicitar el nombre y apellido si es mayor a 18.*/

/* const nacimiento = parseInt(prompt("ingrese su año de nacimiento"));
const edad = (2023 - nacimiento);

if(edad >= 18) {
    const nombre = prompt("escriba su nombre");
    const apellido = prompt("ingrese su apellido");
    console.log("Hola "+nombre + " " + apellido + " tu edad actual es: "+ edad)
} */

/* Ejercicio 6 Escriba un programa que permita calcular el costo total del producto con su IVA.
Para esto, solicite al usuario el precio del producto, calcule su IVA (21%) y muéstrele
en pantalla con un alert el precio final*/
/* 
const precio_prod = parseInt(prompt("ingrese el precio del producto"));
const iva = precio_prod * 1.21;

alert("el precio con iva es " + iva);
 */

/* Ejercicio 7 Escriba un programa en donde se le pida al usuario ingresar el lugar a donde quiera
viajar. Teniendo en cuenta estos valores:
- Colombia: $40
- México: $50
- Brasil: $30
- Uruguay: $20
- Chile: $20
- Ecuador: $30
- Perú: $40
- Estados Unidos: $50
Mostrarle al usuario cuál sería el costo de viajar al lugar que escribió.
NOTA: Tener en cuenta las mayúsculas y minúsculas al momento de ingresar el
nombre del lugar */

/* const lugar_user = prompt("ingrese el destino elegido");
const lugar = lugar_user.toLowerCase()

if (lugar == "colombia" || lugar == "peru"){
    console.log(lugar_user +" tiene un valor de $40");
}else if(lugar == "mexico" || lugar == "estados unidos"){
    console.log(lugar_user +" tiene un valor de $50");
}else if(lugar == "brasil" || lugar == "ecuador"){
    console.log(lugar_user +" tiene un valor de $30");
}else if(lugar == "uruguay" || lugar == "chile"){
    console.log(lugar_user +" tiene un valor de $20");
}else{
    console.log("por el momento no tenemos valores para viajar a "+ lugar_user)
} */

/* Ejercicio 8 Escriba un programa en dónde se le solicite al usuario su nombre y edad, y según
los siguientes casos muéstrele un mensaje de que tiene el acceso permitido:
a) Si el nombre es “Pedro” o “pedro” y su edad es mayor de 18
b) Si el nombre es “Juan”, “JUAN” o “juan” y su edad es mayor a 21
c) Si el nombre es “paula” y su edad es mayor a 25*/

/*
const nombre = prompt("ingrese un nombre");
const edad = parseInt(prompt("ingrese su edad"));

if ((nombre == "Pedro" || nombre == "pedro") && edad > 18) {
    console.log("acceso permitido");
}else if((nombre == "Juan" || nombre == "JUAN" || nombre == "juan") && edad > 21){
    console.log("acceso permitido");
}else if(nombre == "paula" && edad > 25){
    console.log("acceso permitido");
}else{
    console.log("acceso denegado!");
} */

// OPCION 2
/*
const nombre = prompt("ingrese un nombre");
const edad = parseInt(prompt("ingrese su edad"));

if (((nombre == "Pedro" || nombre == "pedro") && edad > 18) || ((nombre == "Juan" || nombre == "JUAN" || nombre == "juan") && edad > 21) || (nombre == "paula" && edad > 25)) {
    console.log("acceso permitido");
}else{
    console.log("acceso denegado!");
}  */

/*Ejercicio 9 Escriba un programa en el cual se le pida el peso y altura al usuario, calcule su IMC
y muestre si tiene bajo peso, peso normal, sobrepeso o es obeso. 
Bajo peso	< 18.5	        
Normal	    18.5 a 24.9	   
Sobrepeso	24.9 a 30	   
Obesidad	> 30	         */

/* const altura = parseFloat(prompt("ingrese su altura en cm."));
const peso = parseFloat(prompt("ingrese su peso en kg."));
const altura2 = altura*altura;
const IMC = peso/altura2*10000;

if(IMC < 18.5){
    console.log("Su IMC es: "+IMC +". Se encuentra en Bajo peso");
}else if(IMC >= 18.5 && IMC < 24.9){
    console.log("Su IMC es: "+IMC +". Se encuentra en Peso normal");
}else if(IMC >=24.9 && IMC < 30){
    console.log("Su IMC es: "+IMC +". Se encuentra en Sobrepeso");
}else if(IMC > 30 && IMC < 80){
    console.log("Su IMC es: "+IMC +". Se encuentra en Obesidad");
}else{
    console.log("Ingrese un valor valido");
}
 */

/* Ejercicio 10  Escriba un programa en el cual se ingresen dos números y devuelva la diferencia
entre el mayor y el menor. Por ejemplo: Si se ingresan 10 y 8, tiene que mostrar 2.*/

/* const num_1 = parseInt(prompt("ingrese un numero entero"));
const num_2 = parseInt(prompt("ingrese otro numero"));

if (num_1 > num_2){
    console.log("la diferencia entre "+ num_1 + " y "+ num_2+ " es: " +(num_1 - num_2));
}else if (num_1 < num_2){
    console.log("la diferencia entre "+ num_2 + " y "+ num_1+ " es: " +(num_2 - num_1));
}else{
    console.log("los numeros son iguales")
}*/

// probando github pull












