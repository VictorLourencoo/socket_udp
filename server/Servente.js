

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

async function listar_Disciplinas(){
    return ArrayDisciplinas;
}
async function Deletar_Disciplinas(ID){
for (let index = 0; index < ArrayDisciplinas.length; index++) {
    const element = ArrayDisciplinas[index].id;
   if(ID === element){
    ArrayDisciplinas.splice(index, 1)
   }
    
}
return ArrayDisciplinas
}

async function Buscar_Disciplina(Nome_curso){
    let arrayDisciplinasCurso = []
    for (let index = 0; index < ArrayDisciplinas.length; index++) {
        const element = ArrayDisciplinas[index].curso;
       if(Nome_curso === element){
        arrayDisciplinasCurso.push(ArrayDisciplinas[index])
       }
        
    }
    return arrayDisciplinasCurso
    }


module.exports ={
    Criar_Disciplina,
    listar_Disciplinas,
    Deletar_Disciplinas,
    Buscar_Disciplina
}
