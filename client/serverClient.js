/* eslint-disable no-console */
const dgram = require('node:dgram');
// creating a client socket
const client = dgram.createSocket('udp4');
let buffer;

const EnviarMensagem = async (datagramEncapsuled) => new Promise((resolve) => {
  client.send(datagramEncapsuled, 33333, 'localhost', (error) => {
    if (error) {
      client.close();
    } else {
      console.log('Enviado ao servidor !!!');
    }
  });

  // eslint-disable-next-line no-unused-vars
  client.on('message', (msg, info) => {
    // console.log("sever:", msg);
    buffer = msg;
    // Preciso que o valor de msg seja visto pela função principal serverClient
    // console.log(`Dados Recebidos do servidor : ${msg.toString()}`);
  // /  console.log('Received %d bytes from %s:%d\n', msg.length, info.address, info.port);
  });
  setTimeout(() => {
    if (buffer === undefined) {
      buffer = 500;
    }
    resolve(buffer);
  }, 3000);
});

module.exports = {
  EnviarMensagem,
};
