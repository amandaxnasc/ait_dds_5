'use strict';

const instrutores =[
    'AMANDA XAVIER NASCIMENTO',
    'ANNA JULYA DOS SANTOS DA SILVA',
    'AYMAR ANTONIO SILVA',
    'DANIEL KALEB DE OLIVEIRA ALVES MOREIRA',
    'DEIVID GUIMARÃES GONÇALVES FILHO',
    'EMANOEL VITOR VENTURA ATANAZIO',
    'GABRIEL DE ASSIS SPERANDIO',
    'HELOISA RANGEL GUIMARÃES',
    'ISAAC LUCCA DE PAULA BARBARA',
    'JOÃO PEDRO COSTA SILVA',
    'MARCO ANTÔNIO SANTOS MEDEIROS',
    'MATHEUS SARTI BRUNELLI',
    'PIETRO GABRIEL HERINGER MENEZES',
    'SAMARA DA SILVA RIBEIRO',
    'SARAH MONTEIRO DUQUE',
    'VITOR VARGAS PARAJARA',
]

for (let i = 0; i < instrutores.length; i++) {
    const pieces = instrutores[i].split(' ');
    const ultimoNome = pieces.pop(); // Remove e retorna o último nome
    const primeiroNome = pieces[0]; // Primeiro nome é o primeiro elemento
    console.log(primeiroNome, ultimoNome);
}
