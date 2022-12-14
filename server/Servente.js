/* eslint-disable no-plusplus */
const ArrayDisciplinas = [];

function CriarDisciplina(args) {
  try {
    ArrayDisciplinas.push(args);
    const mensagemResposta = 'Disciplina Cadastrada com sucesso';
    return mensagemResposta;
  } catch (error) {
    return error;
  }
}

async function listarDisciplinas() {
  return ArrayDisciplinas;
}
async function DeletarDisciplinas(ID) {
  for (let index = 0; index < ArrayDisciplinas.length; index++) {
    const element = ArrayDisciplinas[index].id;

    if (ID === element) {
      ArrayDisciplinas.splice(index, 1);
    }
  }
  return ArrayDisciplinas;
}

async function BuscarDisciplina(Nomecurso) {
  const arrayDisciplinasCurso = [];
  for (let index = 0; index < ArrayDisciplinas.length; index++) {
    const element = ArrayDisciplinas[index].curso;
    if (Nomecurso === element) {
      arrayDisciplinasCurso.push(ArrayDisciplinas[index]);
    }
  }
  return arrayDisciplinasCurso;
}

module.exports = {
  CriarDisciplina,
  listarDisciplinas,
  DeletarDisciplinas,
  BuscarDisciplina,
};
