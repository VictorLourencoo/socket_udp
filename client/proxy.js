
//import DoOperation from "./Operation.js"
const DoOperation = require('./Operation')

  async function Criar_disciplina(Objetc_Disciplina){

    const Json_Disciplina = JSON.stringify(Objetc_Disciplina)
   //console.log("JSON -PROXY: ", Json_Disciplina)

    const Method = "CriarDisciplina()"
    const Reference_Object = 'Disciplina'
    console.log("Executando o ", Method )
    const Disciplina =  await DoOperation.DoOperation(Reference_Object, Method, Json_Disciplina)
  //  console.log("aqui esta disciplina: ", Disciplina)

    return Disciplina

}
async function listar_disciplina(){
  const Method = "ListarDisciplinas()"
  const Reference_Object = 'Disciplina'
  const Json_Disciplina = []
  const Disciplina = await DoOperation.DoOperation(Reference_Object, Method, Json_Disciplina)
  console.log("Executando o ", Method )
   return Disciplina
  
  }

  async function Deletar_disciplina(ID_disciplina){
    const Json_id = JSON.stringify(ID_disciplina)
    const Method = "DeletarDisciplina()"
    const Reference_Object = 'Disciplina'
    const Disciplina = await DoOperation.DoOperation(Reference_Object, Method, Json_id)
    console.log("Executando o ", Method )
     return Disciplina
    
    }
    async function Buscar_disciplina(Nome_curso){
      const Json_id = JSON.stringify(Nome_curso)
      const Method = "BuscarDisciplina()"
      const Reference_Object = 'Disciplina'
      const Disciplina = await DoOperation.DoOperation(Reference_Object, Method, Json_id)
      console.log("Executando o ", Method )
       return Disciplina
      
      }

module.exports={
  Criar_disciplina,
  listar_disciplina,
  Deletar_disciplina,
  Buscar_disciplina
}