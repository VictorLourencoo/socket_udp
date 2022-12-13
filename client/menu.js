
//import Proxy from './proxy.js'

const Proxy = require('./proxy.js')
let teclado = require('prompt-sync')();


async function Menu(){
    console.log("Escolhe uma opção do menu")
    console.log("1°) Criar Disciplina")
    console.log("2°) Listar Discipĺinas")
    console.log("3°) Deletar Disicplina")
    console.log("4°) Buscar Disiciplina")
    console.log("5°) Encerrar Conexão")
    let op = teclado();

    if(op == 1){
        const ID = Math.floor(18382392 * Math.random(2)).toString(36)
        console.log('Vamos cadastrar uma disciplina')
        console.log('Digite o nome da disciplina')
        let nome = teclado()
        console.log('Digite o curso que pertence a disciplina')
        let curso = teclado()
        console.log('Digite a capacidade da disciplina')
        let capacidade = teclado()

        
        const Object_Disciplina ={
            id: ID,
            nome: nome,
            curso: curso,
            capacidade: capacidade
        }
        //console.log(Object_Disciplina)
        const resposta = await Proxy.Criar_disciplina(Object_Disciplina)
        if(resposta.Code == 500){
            console.log(resposta.error)
        }else{
            console.log(resposta.arguments)
           
        }
        
        Menu()
    }
    if(op == 2 ){
        const resposta = await Proxy.listar_disciplina()
        console.log(resposta.arguments)
        Menu()
    }
    if(op == 3){
        const disciplinas = await Proxy.listar_disciplina()
        console.log(disciplinas.arguments)
        console.log("Digite o ID da Disciplina")
        let ID_disciplina = teclado()
        const resposta = await Proxy.Deletar_disciplina(ID_disciplina)
        if(resposta.code === 500){
            console.log(resposta.error)
        }else{
            console.log(resposta)
        }
        Menu()
    }
    if(op == 4 ){
        console.log("Digite o curso")
        let nome_curso = teclado()

        const resposta = await Proxy.Buscar_disciplina(nome_curso)
        console.log(resposta)
        Menu()
    }
    if(op == 5 ){
        return
      
    }

  



}
Menu()
module.exports={
Menu
}
