/* eslint-disable no-console */
// import DoOperation from "./Operation.js"
const DoOperation = require('./Operation');

async function CriarDisciplina(ObjetcDisciplina) {
  const JsonDisciplina = JSON.stringify(ObjetcDisciplina);
  const Method = 'CriarDisciplina()';
  const ReferenceObject = 'Disciplina';
  console.log('Executando o ', Method);
  const Disciplina = await DoOperation.DoOperation(ReferenceObject, Method, JsonDisciplina);

  return Disciplina;
}
async function listarDisciplina() {
  const Method = 'ListarDisciplinas()';
  const ReferenceObject = 'Disciplina';
  const JsonDisciplina = [];
  const Disciplina = await DoOperation.DoOperation(ReferenceObject, Method, JsonDisciplina);
  console.log('Executando o ', Method);
  return Disciplina;
}

async function DeletarDisciplina(IDDisciplina) {
  const JsonId = JSON.stringify(IDDisciplina);
  const Method = 'DeletarDisciplina()';
  const ReferenceObject = 'Disciplina';
  const Disciplina = await DoOperation.DoOperation(ReferenceObject, Method, JsonId);
  console.log('Executando o ', Method);
  return Disciplina;
}
async function BuscarDisciplina(NomeCurso) {
  const JsonId = JSON.stringify(NomeCurso);
  const Method = 'BuscarDisciplina()';
  const ReferenceObject = 'Disciplina';
  const Disciplina = await DoOperation.DoOperation(ReferenceObject, Method, JsonId);
  console.log('Executando o ', Method);
  return Disciplina;
}

module.exports = {
  CriarDisciplina,
  listarDisciplina,
  DeletarDisciplina,
  BuscarDisciplina,
};
