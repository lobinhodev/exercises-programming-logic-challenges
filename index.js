// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

/*
01 - Encontre o maior número de um array
Escreva um algoritmo que recebe um array de números inteiros, procure o maior valor e o retorne.
*/

const maxElementByArray = (array: number[]) => {
  let aux: number[] = [];
  let cont: number = 0;

  for (let i = 0; i < array.length; i++) {
    //list format
    aux = array.sort((a, b) => (a > b ? 1 : -1));
    cont++;

    if (cont === aux.length) {
      // console.log('Maior valor é: ' + aux[i]);
    }
  }
  return;
};

maxElementByArray([1, 3, 5, 4, 5, 5, 99, 10]);

/* 02 - Encontre o menor número de uma array. */

const minElementByArray = (array: number[]) => {
  let aux: number[] = [];
  let cont: number = 0;

  for (let i = 0; i < array.length; i++) {
    //list format
    aux = array.sort((a, b) => (a > b ? -1 : 1));
    cont++;

    if (cont === aux.length) {
      // console.log('Menor valor é: ' + aux[i]);
    }
  }
  return;
};

minElementByArray([3, 1, 3, 5, 4, 5, 5, 99, 10]);

/*
03 - Encontre uma pessoa convidada em uma lista de nomes
Escreva um algoritmo que recebe um array de nomes quaisquer e o nome da pessoa convida a ser encontrada. 
Se encontrar o nome na lista retorne:
-----------------------
"O nome está na lista."
-----------------------
Caso o contrário:
---------------------------
"O nome não está na lista."
---------------------------
*/

type Pessoa = {
  name: string;
};

function findGuest(pessoas: Pessoa[] = [], guest: string) {
  // Desenvolva seu código nessa função
  // for (let i of pessoa) {
  //   // console.log(i.name);
  //   if (guest === i.name) {
  //     console.log(`A pessoa ${guest} foi convidada a festa`);
  //   } else {
  //     console.log('O nome não está na lista');
  //   }
  // }
  pessoas.find((pessoa) => {
    if (pessoa.name === guest) {
      // console.log(`A pessoa ${guest} foi convidada a festa`);
    }
  });
  return; // Retorne o resultado aqui
}

findGuest(
  [
    { name: 'Daniel' },
    { name: 'Evelin' },
    { name: 'Joel' },
    { name: 'Renata' },
    { name: 'Davi' },
  ],
  'Davi'
);

/*
04 - Verifique se todos os dados de uma lista são do mesmo tipo
Escreva uma algoritmo que recebe um array de dados quaisquer e verifique se todos são do mesmo tipo.
Se todos forem retorne:
------
true
------
Caso contrário:
-------
false
-------
Obs: Os retornos tem que ser dados do tipo boolean.
*/

type Types = {
  name: string;
  age: string | number;
  status: boolean | string;
};

function dataType(types: Types[]) {
  // Desenvolva seu código aqui.
  types.filter((type) => {
    if (
      typeof type.name === 'string' &&
      typeof type.age === 'string' &&
      typeof type.status === 'string'
    ) {
      // console.log(type);
      return true;
    } else {
      return false;
    }
  });
  return; // Retorne o resultado aqui
}

dataType([
  { name: 'Daniel', age: 20, status: true },
  { name: 'Evellin', age: 24, status: false },
  { name: 'Davi', age: '18', status: 'Ativo' },
]);

/*
05 - Encontre o filho mais velho
Dada a idade de Pedro e um array com as idades de três de seus filhos, escreva um algoritmo
que irá receber esses dados para computar e retornar a idade do filho mais velho de Pedro.
Considere as premissas abaixo:
* Pedro é pai de 4 filhos que têm idades diferentes;
* Esse ano ele notou que a soma da idade de seus filhos é igual à idade dele.
A saída deve ter o seguinte formato:
--------------------------------
"O filho mais velho tem x anos."
--------------------------------
*/

type AgeKids = {
  age: number;
};

function findOldestSon(pedroAge: number, kidsAge: AgeKids[]) {
  // Desenvolva seu código aqui.
  const listSort = kidsAge.sort((a, b) => (a.age > b.age ? 1 : -1));
  for (let i = 0; i < listSort.length; i++) {
    if (i + 1 === listSort.length) {
      console.log(`O filho mais velho tem: ${listSort[i].age}`);
    }
  }

  return; // Retorne o resultado aqui
}

findOldestSon(40, [{ age: 10 }, { age: 31 }, { age: 4 }, { age: 5 }]);
