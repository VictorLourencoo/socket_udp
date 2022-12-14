const Servente = require('./Servente');

function CriarDisciplina(dataObject) {
  const argumentsJson = dataObject.arguments;

  const argsObject = JSON.parse(argumentsJson);

  const RespostaServente = Servente.CriarDisciplina(argsObject);
  const JSONResponse = JSON.stringify(RespostaServente);
  return JSONResponse;
}

async function listarDisciplinas() {
  const RespostaServente = await Servente.listarDisciplinas();
  return RespostaServente;
}

async function DeletarDisciplina(dataObject) {
  const argumentsJson = dataObject.arguments;

  const ID = JSON.parse(argumentsJson);

  const RespostaServente = await Servente.DeletarDisciplinas(ID);
  return RespostaServente;
}

async function BuscarDisciplina(dataObject) {
  const argumentsJson = dataObject.arguments;
  const NomeCurso = JSON.parse(argumentsJson);

  const RespostaServente = await Servente.BuscarDisciplina(NomeCurso);
  return RespostaServente;
}

module.exports = {
  CriarDisciplina,
  listarDisciplinas,
  BuscarDisciplina,
  DeletarDisciplina,

};
