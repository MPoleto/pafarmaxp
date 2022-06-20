function arraySize (array, number) {
    try{
        if(!array && !number) throw ReferenceError("Defina os argumentos");

        if(typeof array !== 'object') throw TypeError('Array precisa ser do tipo objeto');

        if(isNaN(number)) throw TypeError('Segundo argumento precisa ser um número');

        if(array.length !== number) throw RangeError('Tamanho do array não é igual ao número passado');

        if (array.length === number) return array;
    }
    catch (e){
        if(e instanceof ReferenceError) console.log('Este é um ReferenceError: ' + e.message);
        
        else if(e instanceof TypeError) console.log('Este é um TypeError: ' + e.message);

        else if(e instanceof RangeError) console.log('Este é um RangeError: ' + e.message);
        
        else console.log('Erro não esperado: ' + e);
    }
}

const anything = [1,2,2];

console.log(arraySize(anything, ));