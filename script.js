
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