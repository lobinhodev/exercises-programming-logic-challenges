/*

01 - Verifica se pessoa tem idade para dar entrada na CNH

Escreva um algoritmo que recebe o nome e ano de nascimento de uma pessoa e verifique se ela pode dar entrada na CNH.

Se a pessoa tiver menos de 18 anos retorne:
------------------------------------------------------
"x tem y anos de idade e não pode iniciar o processo."
------------------------------------------------------

Caso contrário:
--------------------------------------------------
"x tem y anos de idade e pode iniciar o processo."
--------------------------------------------------

*/

type Pessoa = {
    name:string
    birthDate: Date
}

const verifyCnh = (pessoa: Pessoa) => {
        let dateFormat = pessoa.birthDate.getFullYear()
        let dateActual:Date = new Date(); 
        let birthDate: number = dateActual.getFullYear() - dateFormat

        if(birthDate < 18){
            console.log(`${pessoa.name} tem ${birthDate} anos e não pode iniciar o projeto`)
        } else if(birthDate >= 18) {
            console.log(`${pessoa.name} tem ${birthDate} anos e pode iniciar o projeto`)
        }
}

// verifyCnh({name:'daniel', birthDate:new Date(2001,0o2,10)})

/*

02 - Calcula a raiz quadrada de um número

Escreva um algoritmo que recebe um número inteiro e calcule a sua raiz quadrada e considere os seguintes retornos:

Se a raiz for exata, ou seja, um quadrado perfeito, por exemplo a raiz quadrada de 25 é 5, retorne:
-----------------------------
"A raiz quadrada de 25 é: 5."
-----------------------------

Se a raiz não for exata, por exemplo a raiz de 30, retorne:
------------------------------------------
"Não existe raiz exata para o número 30.".
------------------------------------------

Se o valor recebido for igual a zero ou não for do tipo number, retorne:
-------------------
"Número inválido.".
-------------------

*/

const squareRoot = (number: number) => {
    let result:number = Math.sqrt(number);
    let resulFormat = result.toString().split('.')

    if(resulFormat[1]){
        console.log(`Não existe raíz exata para o número ${number}`)
    } else if(resulFormat[0] && parseInt(resulFormat[0]) !== 0){
        console.log(`A raíz quadrada de ${number} é ${result}`)
    } else if (number === 0 || typeof number !== 'number') {
        console.log('Número inválido')
    }

}

// squareRoot(100)

/*

03 - Array de notas musicais

Uma música normalmente possui uma sequência de notas.

Data a escala natural de Dó, cada uma das 7 notas possui um grau representado por um algarismo romano conforme abaixo:

| Dó | Ré | Mi  | Fá | Sol | Lá | Si  |
| I  | II | III | IV |  V  | VI | VII |

Escreva um algoritmo que recebe um array de notas e retorne um outro array com os respectivos graus da escala de Dó.

Por exemplo:
----------------------------
Entrada:
['Ré', 'Sol', 'Dó']

Saída:
['II', 'V', 'I']
----------------------------

 */

type Note = [
    Do?: string,
    Re?: string,
    Mi?: string,
    Fa?: string,
    Sol?: string,
    La?: string,
    Si?: string
]

const mappingNotes = (notes: Note) => {
    let auxMappingNote:string[] = [];

    for(let i = 0; i < notes.length; i++) {
        switch(notes[i]){
            case 'Do':{
                auxMappingNote.push('I')
                break
            }
            case 'Re':{
                auxMappingNote.push('II')
                break
            }
            case 'Mi':{
                auxMappingNote.push('III')
                break
            }
            case 'Fa':{
                auxMappingNote.push('IV')
                break
            }
            case 'Sol':{
                auxMappingNote.push('V')
                break
            }
            case 'La':{
                auxMappingNote.push('VI')
                break
            }
            case 'Si':{
                auxMappingNote.push('VII')
                break
            }
        }
        console.log(auxMappingNote)
    }
}

mappingNotes(['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si'])

/*

04 - Array de notas musicais - 2

Relembrando que uma música normalmente possui uma sequência de notas.

Dada a escala Natural de Dó, cada uma das 7 notas possui:
* um grau representando po algarismo romano.
* uma "terça" maior ou menor.
* uma escala própria.

Considerando a tabela abaixo:

| Nota   | Dó    | Ré     | Mi     | Fá    | Sol       | Lá     | Si     |

| Grau   | I     | II     | III    | IV    | V         | VI     | VII    |
| Terça  | Maior | Menor  | Menor  | Maior | Maior     | Menor  | Menor  |
| Escala | Jônia | Dórica | Frígia | Lídia | Mixolídia | Eólia  | Lócrio |

Escreva um algoritmo que recebe um array de notas e retorne um outro array de objetos com os respectivos graus, terças e escalas.

Por exemplo:
-----------------------------
Entrada:
['Ré', 'Sol', 'Dó']

Saída:
[
  {
    degree: 'II',
    third: 'Menor',
    scale: 'Dórica',
  },
  {
    degree: 'V',
    third: 'Maior',
    scale: 'Mixolídia'
  },
  {
    degree: 'I',
    third: 'Maior',
    scale: 'Jônia'
  }
] 
-----------------------------*/