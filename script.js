
//Rever backend aula 1 e 2

//Aula 3

/*function alerta(){
    console.log("Alerta");
}

setTimeout(alerta,3000);                        //Função assincrona


setInterval(()=>{console.log("Alerta");},3000);  //Mesma coisa ()=>{} (Arrow Function) 
// Isso é uma arrow function (função de seta), uma forma mais curta de criar funções.
*/

//Código que busca dados do serevidor

function buscaDadosdoServidor(){

    return new Promise((resolve,reject) => {

        console.log("Buscando dados no servidor.");

        setTimeout(() =>{

            let sucesso = Math.random() > 0.5;

            if(sucesso){
                resolve("Dados recebidos com sucesso.");
            }
            else {
                reject("Falha ao acessar dados do servidor.");
            }
        },2000);
    });
}

//Maneira arcaica de se fazer

/*
buscaDadosdoServidor().then((mensagem)=>{
    console.log(mensagem);
}).catch((erro) => {
    console.error(erro);
});
*/

const minhaFuncaoAssincrona = async () => {

    try{
        const resultado = await buscaDadosdoServidor();
        console.log(resultado);
    }
    catch(erro){
        console.log(erro);
    }
}

minhaFuncaoAssincrona();

console.log("Final da execução");

//JSON

const produtos = [
  { id: 1, nome: "Camiseta", preco: 25.99 },
  { id: 2, nome: "Calça", preco: 39.99 },
  { id: 3, nome: "Tenis", preco: 299.9 },
];

const produtosJson = JSON.stringify(produtos); //transforma a variável produtos, que é uma lista de objetos, em padrão JSON

console.log(produtos);
console.log(produtosJson);

const produtosObj = JSON.parse(produtosJson); // transforma de novo em lista de objetos
console.log(produtosObj);

/* DESAFIO

1. Declare uma função chamada carregarproduto(id) que recebe um parâmetro de ID e retona uma nova promise com settimeout
que simula o atraso de 2 segundos e após esses 2 segundos cria o objeto produto com ID, nome e preço.

2. Chame e invoque essa função carregarproduto(1) usando o .then para processar o produto. Converta para JSON, imprima e
reverta para objeto. Use o Try Catch para lidar com erros
 
3. Depois, reescreva essa função usando o async/await que recebe um ID e também use o try catch para tratar erros.
*/

/*Livros

Lógica de programação e algoritmos com JavaScript, novatec
Estruturas de dados e algoritmos com JavaScript, novatec
JavaScript, guia definitivo

Videos

A próxima linguagem de programação
O futuro da programação
Entendendo Back-end para iniciantes em programação fabio akita

Podcasts

Skill de um dev back end e por onde começar
java script e node.js

Artigos

18 dicas para se destacar na carreira de engenhiro de software
27 projetos para ir de jr a senior em programação web

*/
