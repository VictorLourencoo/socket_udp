
const Servente = require('./Servente')
 function Criar_Disciplina(data_Object){

    const arguments_json = data_Object.arguments
   
    const args_Object = JSON.parse(arguments_json)

    const RespostaServente = Servente.Criar_Disciplina(args_Object)
    console.log(RespostaServente)
   const JSON_Response =  JSON.stringify(RespostaServente)
     return JSON_Response

}

async function list_Disciplinas(){
    const RespostaServente = await Servente.listar_Disciplinas() 
    return RespostaServente
}

async function Deletar_Disciplina(data_Object){
    const arguments_json = data_Object.arguments
    const ID = JSON.parse(arguments_json)

    const RespostaServente = await Servente.Deletar_Disciplinas(ID) 
    return RespostaServente
}

async function Buscar_Disciplina(data_Object){
    const arguments_json = data_Object.arguments
    const Nome_curso = JSON.parse(arguments_json)

    const RespostaServente = await Servente.Buscar_Disciplina(Nome_curso) 
    return RespostaServente
}

module.exports={
    Criar_Disciplina,
    list_Disciplinas,
    Buscar_Disciplina,
    Deletar_Disciplina

}