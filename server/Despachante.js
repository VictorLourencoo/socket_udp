/* eslint-disable consistent-return */
/* eslint-disable no-console */
const md5 = require('md5');
const esqueleto = require('./esqueleto');
const { DatagramError } = require('./exceptions');
const { HistoryFailure, HistorySucess, HistoryVerify } = require('./OrderHistory');

// const intruso = "ESSA MENSAGEM E MALISIOSA'";
async function Despachante(dataJson) {
  const DataGramCompleto = JSON.parse(dataJson);

  const dataVerify = DataGramCompleto.DatagramHash;
  const HashClient = dataVerify.Hash;
  const dataObject = DataGramCompleto.Datagram;

  console.log(dataObject);

  const HashServer = md5(dataObject);
  console.log('Hash CLient', HashClient);
  console.log('hash Server', HashServer);

  const RequestVerify = HistoryVerify(dataObject);
  if (RequestVerify !== 200) {
    return RequestVerify;
  }
  HistorySucess(dataObject);
  if (HashServer !== HashClient) {
    const dataError = DatagramError(dataObject);
    HistoryFailure(dataObject);
    return dataError;
  }

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
