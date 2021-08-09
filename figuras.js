//codigo cuadrado
console.group("square");


function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
} 


console.groupEnd();

//codigo triangulo
console.group("Triangle")

function perimetroTriangulo(ladoT1, ladoT2, base){
    return +ladoT1 + +ladoT2 + +base;
} 

function areaTriangulo(lado1, lado2, base){
    let area;
    const s = (lado1 + lado2 + base) / 2;
    if (lado1 != lado2 ) {
         area = Math.sqrt(s*(s-lado1)*(s-lado2)*(s-base));
    }else{
        const altura = Math.sqrt((Math.pow(base/2)) + (Math.pow(lado1)) );
         area = (base * altura) / 2;     
    }

    return area;
}



console.groupEnd();

//código círculo
console.group("Circle");

function getDiametro(radio){
     return radio * 2;
} 

const pi = Math.PI;

function perimetroCirculo(radio){
     return getDiametro(radio) * pi;
} 
function areaCirculo(radio){
     return (radio * radio) * pi;
} 
console.groupEnd();


//html

function calcularCuadrado(){
    const input = document.getElementById("squareSide");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    const area = areaCuadrado(value);

    alert(`Area: ${area} \nPerimetro: ${perimetro}`);

}

function calcularCirculo(){
    const input = document.getElementById("circleradius");
    const radius = input.value;

    const area = areaCirculo(radius);
    const perimetro = perimetroCirculo(radius);
    const diametro = getDiametro(radius);

    alert(`Area del circulo: ${area} \n Perimetro: ${perimetro} \n Diametro ${diametro}`);
}

function calcularTriangulo(){
    const input1 = document.getElementById("triangleSide1");
    const input2 = document.getElementById("triangleSide2");
    const input3 = document.getElementById("triangleBase");

    const side1 = input1.value;
    const side2 = input2.value; 
    const base = input3.value; 

    const perimetro = perimetroTriangulo(side1, side2, base);
    const area = areaTriangulo(side1, side2, base);

    alert(`area: ${area} \nPerimetro: ${perimetro}`);
    
}