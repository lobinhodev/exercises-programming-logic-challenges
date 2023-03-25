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
      console.log('Maior valor é: ' + aux[i]);
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
      console.log('Menor valor é: ' + aux[i]);
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

function findGuest(pessoa: Pessoa[], guest: number) {
  // Desenvolva seu código nessa função
  return; // Retorne o resultado aqui
}
