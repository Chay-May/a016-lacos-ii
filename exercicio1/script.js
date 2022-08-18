const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

//Um analista quer conseguir ver quantos gols cada um de seus 5 atacantes marcou nas últimas 5 temporadas, e quer que você construa um código que mostre isso.


    for(let i = 0; i < array.length; i++) {
        console.log(`Jogador ${[i+1]}: ${array[i]}`)
    }


//CODIGO MARCUS
// for (let i in array){
//     for(let m=0;m<array[i].length;m++){
//         console.log(Jogador ${Number(i)+1}: ${array[i]})
//     }
// }

    //for (let i = 0; i < array.length; i++){
    //     console.log(`Jogador 1, temporada 1: ${array[0][0]}, temporada 2: ${array[0][1]}, temporada 3: ${array[0][2]}, temporada 4: ${array[0][3]}, temporada 5: ${array[0][4]}, \nGols do jogador 2: ${array[1]},  \nGols do jogador 3: ${array[2]}, \nGols do jogador 4: ${array[3]}`)}
    //   }

    //   for (let z = 0; z < array[i].length; z++){
      /*  console.log(`Gols do jogador 1: ${array[0]}, \nGols do jogador 2: ${array[1]},  \nGols do jogador 3: ${array[2]}, \nGols do jogador 4: ${array[3]}`)}*/
//     }
//   }
//   } else {
//     console.log("É necessário alterar o número de ítens do Array")
//   }



// for (let i in array){
//     console.log(`Gols do jogador 1: ${array[0]}, \nGols do jogador 2: ${array[1]},  \nGols do jogador 3: ${array[2]}, \nGols do jogador 4: ${array[3]}`)
 
// //    for (let z of filmes){
// //       console.log(`Tem no elenco: ${z.elenco}`)
// //  