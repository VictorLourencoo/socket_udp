
const Servente = require('./Servente')
function Criar_Disciplina(data_Object){
   // console.log(data_Object)
    const arguments_json = data_Object.arguments
   // console.log(data_Object)
    const args_Object = JSON.parse(arguments_json)
    //console.log(args_Object)
    const RespostaServente = Servente.Criar_Disciplina(args_Object)
    console.log(RespostaServente)
   const JSON_Response =  JSON.stringify(RespostaServente)
     return JSON_Response

}

function list_Disciplinas(){
    const RespostaServente = Servente.list_Disciplinas() 
}

function Deletar_Disciplina(args){

}

function Buscar_Disciplina(args){

}

module.exports={
    Criar_Disciplina,
    list_Disciplinas,
    Buscar_Disciplina,
    Deletar_Disciplina

}