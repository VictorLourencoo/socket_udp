

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


module.exports ={
    Criar_Disciplina,
    list_Disciplinas
}
