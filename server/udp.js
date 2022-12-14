/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const dgram = require('node:dgram');
const { empacotaMenssagem } = require('../client/Operation');
// const {Buffer} = require('node:buffer');
const server = dgram.createSocket('udp4');
const { Despachante } = require('./Despachante');

const PORT = 33333;
const HOST = '127.0.0.1';

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', async (msg, info) => {
  console.log('novo server conectado');
  console.log('menssage: ', msg);

  const data = DesempacotaRequisicao(msg);
  console.log('udp: ', data);
  const dataRequest = await Despachante(data);

  const response = EmpacotaResposta(dataRequest);

  server.send(response, info.port, 'localhost', (error) => {
    if (error) {
      server.close();
    } else {
      console.log('Data sent !!!');
    }
  });
});

server.on('listening', () => {
  const address = server.address();
  const { port } = address;
  const { family } = address;
  const ipaddr = address.address;
  console.log(`Server is listening at port ${port}`);
  console.log(`Server ip :${ipaddr}`);
  console.log(`Server is IP4/IP6 : ${family}`);
});

server.bind(PORT);

function EmpacotaResposta(dataObject) {
  const encodedJsonObject = Buffer.from(JSON.stringify(dataObject)).toString('base64');
  return encodedJsonObject;
}

function DesempacotaRequisicao(msg) {
  const encodedJsonObject = msg;
  const decodedJsonObject01 = Buffer.from(encodedJsonObject, 'base64').toString('ascii');
  const decodedJsonObject = Buffer.from(decodedJsonObject01, 'base64').toString('ascii');
  // console.log('--decodedJsonObject-->',JSON.parse(decodedJsonObject))
  return decodedJsonObject;
}
