
//import DoOperation from "./Operation.js"
const DoOperation = require('./Operation')

 function Criar_disciplina(Objetc_Disciplina){

    const Json_Disciplina = JSON.stringify(Objetc_Disciplina)
   //console.log("JSON -PROXY: ", Json_Disciplina)

    const Method = "CriarDisciplina()"
    const Reference_Object = 'Disciplina'
    const Disciplina = DoOperation.DoOperation(Reference_Object, Method, Json_Disciplina)
    return Disciplina

}
function listar_disciplina(){
  const Method = "ListarDisciplinas()"
  const Reference_Object = 'Disciplina'
  const Json_Disciplina = []
  const Disciplina = DoOperation.DoOperation(Reference_Object, Method, Json_Disciplina)
   
  
  }

module.exports={
  Criar_disciplina,
  listar_disciplina
}