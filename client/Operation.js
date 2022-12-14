// import Client from './client.js'
const md5 = require('md5');
const Client = require('./serverClient');
const Utils = require('./utils/utils');
const { DatagramError } = require('./exceptions/exceptions');

async function DoOperation(ReferenceObject, Method, JSON) {
  const ID = Math.floor(Date.now() * Math.random()).toString(36);
  const Datagram = {
    messageType: 0,
    requestID: ID,
    ObjectReference: ReferenceObject,
    Method,
    arguments: JSON,
  };
  const HashMessage = md5(Datagram);
  const DatagramHash = {
    requestID: ID,
    Hash: HashMessage,
  };
  const Message = {
    DatagramHash,
    Datagram,
  };

  const datagramEncapsuled = Utils.empacotaMenssagem(Message);

  const request = await Client.EnviarMensagem(datagramEncapsuled);
  // console.log("AQUI É O REQUEST: ", request)

  if (request === 500) {
    const ServerFound = DatagramError(Datagram);
    return ServerFound;
  }
  const JsonResposta = Utils.DesempacotaMenssagem(request);

  return JsonResposta;
}

module.exports = {
  DoOperation,

};
