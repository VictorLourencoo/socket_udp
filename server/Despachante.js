/* eslint-disable consistent-return */
/* eslint-disable no-console */
const md5 = require('md5');
const esqueleto = require('./esqueleto');

async function Despachante(dataJson) {
  const DataGramCompleto = JSON.parse(dataJson);
  const dataVerify = DataGramCompleto.DatagramHash;
  const HashClient = dataVerify.Hash;
  const dataObject = DataGramCompleto.Datagram;

  const HashServer = md5(dataObject);
  console.log('Hash CLient', HashClient);
  console.log('hash Server', HashServer);
  if (HashServer !== HashClient) return;

  const { Method } = dataObject;

  if (Method === 'CriarDisciplina()') {
    const JSONResponse = esqueleto.CriarDisciplina(dataObject);
    const Datagram = {
      messageType: 1,
      responseID: dataObject.requestID,
      ObjectReference: dataObject.ObjectReference,
      Method: dataObject.Method,
      arguments: JSONResponse,
    };
    console.log(Datagram);
    return Datagram;
  }
  if (Method === 'ListarDisciplinas()') {
    const ListarDisciplinas = await esqueleto.listarDisciplinas();
    const Datagram = {
      messageType: 1,
      responseID: dataObject.requestID,
      ObjectReference: dataObject.ObjectReference,
      Method: dataObject.Method,
      arguments: ListarDisciplinas,
    };

    return Datagram;
  }
  if (Method === 'DeletarDisciplina()') {
    const DeletarDisciplina = await esqueleto.DeletarDisciplina(dataObject);
    const Datagram = {
      messageType: 1,
      responseID: dataObject.requestID,
      ObjectReference: dataObject.ObjectReference,
      Method: dataObject.Method,
      arguments: DeletarDisciplina,
    };

    return Datagram;
  }
  if (Method === 'BuscarDisciplina()') {
    const Discipĺinas = await esqueleto.BuscarDisciplina(dataObject);
    const Datagram = {
      messageType: 1,
      responseID: dataObject.requestID,
      ObjectReference: dataObject.ObjectReference,
      Method: dataObject.Method,
      arguments: Discipĺinas,
    };

    return Datagram;
  }
}

module.exports = {
  Despachante,
};
