'use strict';  //Impede o uso de variaveis não declaradas

let nome = 'Amanda';

let sobrenome = 'Xavier';

console.log(sobrenome);

const instrutor = 'EDUARDO LUIZ FERREIRA SILVA';
// split separa uma string em um array de strings com o separador escolhido
const pieces = instrutor.split(' '); 

console.log(pieces);

//pop remove e retorna o ultimo elemento
console.log(pieces[0],pieces.pop()); 

let array = [1,2,3,4,5,6];
console.log(array);
let numero = array.pop();
console.log(numero);
console.log(array);

//puah empurra ao final do array
array.push(7); 
console.log(array);

//shift remove e retorna o primeiro
console.log(array.shift());
console.log(array);

//unshift adiciona na primeira posição
array.unshift(0);
console.log(array);

let cores = ['verde','azul','roxo','vermelho','rosa']

for(let i = 0; i < cores.length; i++){
    console.log(cores[i]);
}
console.log('For simplificado');

for(let cor of cores){
    console.log(cor);
}