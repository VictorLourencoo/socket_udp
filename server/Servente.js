const DisciplinaModel = require('../models/disciplinas.model');

let ArrayDisciplinas = []

 function Criar_Disciplina(args){
    try {
        ArrayDisciplinas.push(args)
        const mensagemResposta = "Disciplina Cadastrada com sucesso"
        return mensagemResposta
    } catch (error) {
        return error
    }
  

}

async function list_Disciplinas(args){
   const res =  await find()
    return res;
}

async function Deletar_Disciplina(args){
 const res =  await deleteOne({ _id: req.params.id })
 return res
}

async function Buscar_Disciplina(args){
    const id = req.params.id;
    const res =  await findById(id)
    return res;
}

module.exports ={
    Criar_Disciplina,
    list_Disciplinas
}
