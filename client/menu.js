
//import Proxy from './proxy.js'

const Proxy = require('./proxy.js')
let teclado = require('prompt-sync')();
/*const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})*/
function Menu(){
    console.log("Escolhe uma opção do menu")
    console.log("1°) Criar Disciplina")
    console.log("2°) Listar Discipĺinas")
    console.log("3°) Buscar Disicplina")
    console.log("4°) Deletar Disiciplina")
    console.log("5°) Encerrar Conexão")
    let op = teclado();

    if(op == 1){
        console.log('Vamos cadastrar uma disciplina')
        console.log('Digite o nome da disciplina')
        let nome = teclado()
        console.log('Digite o curso que pertence a disciplina')
        let curso = teclado()
        console.log('Digite a capacidade da disciplina')
        let capacidade = teclado()

        const Object_Disciplina ={
            nome: nome,
            curso: curso,
            capacidade: capacidade
        }
        console.log(Object_Disciplina)
        const resposta = Proxy.Criar_disciplina(Object_Disciplina)

        //console.log(resposta)
    }
    if(op == 2 ){
        const resposta = Proxy.listar_disciplina()
        console.log(resposta)
    }
    if(op == 3){
        console.log('menu')
    }
    if(op == 4 ){
        
    }


}
Menu()
module.exports={
Menu
}
