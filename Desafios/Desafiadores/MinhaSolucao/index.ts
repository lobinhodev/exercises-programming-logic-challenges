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
        return auxMappingNote
    }
}

// mappingNotes(['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si'])

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

const getNotes = (notes: Note) => {
    let result:Note = notes;
    let auxMappingNote:{}[] = [];

    for (let i = 0; i < result.length; i++) {
        switch(result[i]){
            case 'Do' : {
                auxMappingNote.push(  {
                    degree: 'I',
                    third: 'Maior',
                    scale: 'Jônia'
                  })
                  break
            }
            case 'Re' : {
                auxMappingNote.push(  {
                    degree: 'II',
                    third: 'Menor',
                    scale: 'Dórica'
                  })
                  break
            }
            case 'Mi' : {
                auxMappingNote.push(  {
                    degree: 'III',
                    third: 'Menor',
                    scale: 'Frígia'
                  })
                  break
            }
            case 'Fa' : {
                auxMappingNote.push(  {
                    degree: 'IV',
                    third: 'Maior',
                    scale: 'Lídia'
                  })
                  break
            }
            case 'Sol' : {
                auxMappingNote.push(  {
                    degree: 'V',
                    third: 'Maior',
                    scale: 'Mixolídia'
                  })
                  break
            }
            case 'La' : {
                auxMappingNote.push(  {
                    degree: 'VI',
                    third: 'Menor',
                    scale: 'Eólia'
                  })
                  break
            }
            case 'Si' : {
                auxMappingNote.push(  {
                    degree: 'VII',
                    third: 'Menor',
                    scale: 'Lócrio'
                  })
                  break
            }
        }
    }
    console.log(auxMappingNote)
}
// getNotes(['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si'])

/*

05 - Varinhas mágicas

Você foi a pessoa designada para escrever um novo sistema para Olivaras, o fabricante de varinhas mágicas.

Como se sabe, a varinha escolhe o(a) bruxo(a), então você deverá criar um algoritmo que recebe o nome da pessoa aspirante e o nome da varinha a ser testada.

Considere a seguinte tabela:

|       Bruxo(a)           |               Varinha               |

|    Harry Potter          |    Azevinho e Pena de Fênix         |
|    Rony Weasley          |    Salgueiro e Pelo de Unicórnio    |
|    Hermione Granger      |    Videira e Fibra de Dragão        |
|    Alvo Dumbledore       |    Salgueiro e Pelo de Testrálio    |
|    Belatriz Lestrange    |    Nogueira e Fibra de Dragão       |

Se a varinha escolher a pessoa aspirante de acordo com a tabela, retorne:
-----------------------------
"Curioso... muito curioso..."
-----------------------------

Caso o contrário:
--------------------------------
"Não, não! Decididamente, não.!"
--------------------------------

Desafio: faça usando apenas um único IF acompanhado por um único Else.

*/

type Bruxo = {
    nome:string
    varinha:string
}

const listaBruxos : Bruxo[] = [
{
    nome: 'Harry potter', varinha: 'Azevinho e Pena de Fênix'
},
{
    nome: 'Rony Weasley', varinha: 'Salgueiro e Pelo de Unicórnio'
},
{
    nome: 'Hermione Granger', varinha: 'Videira e Fibra de Dragão'
},
{
    nome: 'Alvo Dumbledore', varinha: 'Salgueiro e Pelo de Testrálio'
},
{
    nome: 'Belatriz Lestrange', varinha: 'Nogueira e Fibra de Dragão'
},
]

const magicWand = (bruxo: Bruxo) => {
    for(let i = 0; i < listaBruxos.length; i++){
        if(listaBruxos[i] === bruxo){
            console.log("Curioso... muito curioso...")
            break
        } else{
            console.log("Não, não! Decididamente, não.!")
            break
        }
    }
}

magicWand({
    nome: 'Harry potter', varinha: 'Azevinho e Pena de Fênix'
},)