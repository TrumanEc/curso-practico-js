//helper
const esPar = numero => numero % 2 === 0;

//calcularMediana

function medianaSalario(lista){
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const mediana = (personaMitad1 + personaMitad2) / 2;
        return mediana    
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//mediana general
const salariosCol = colombia.map(persona => persona.salary);

const salariosColSorted = salariosCol.sort((salaryA, salaryB) => salaryA - salaryB);

const medianaGeneralCol = medianaSalario(salariosColSorted);

//mediana top 10
const spliceStart = ((salariosColSorted.length * 90) / 100);
const spliceCount =  salariosColSorted.length - spliceStart;

const salarioColTop10 = salariosColSorted.splice(spliceStart, spliceCount);
