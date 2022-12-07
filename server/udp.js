const dgram = require('node:dgram');
const { empacotaMenssagem } = require('../client/Operation');
//const {Buffer} = require('node:buffer');
const server = dgram.createSocket('udp4');
const {Despachante} = require('./Despachante')
var PORT = 33333;
var HOST = '127.0.0.1';

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});


server.on('message', async function(msg, info){
 console.log('novo server conectado')
  console.log("menssage: ", msg)

  const data = DesempacotaRequisicao(msg)
 
  const dataRequest =  await Despachante(data)

  const response = EmpacotaResposta(dataRequest)
 
  server.send(response,info.port,'localhost',function(error){
    if(error){
      client.close();
    }else{
      console.log('Data sent !!!');
    }
  
  });
}) 

server.on('listening',function(){
  var address = server.address();
  var port = address.port;
  var family = address.family;
  var ipaddr = address.address;
  console.log('Server is listening at port ' + port);
  console.log('Server ip :' + ipaddr);
  console.log('Server is IP4/IP6 : ' + family);
});

server.bind(PORT);


function EmpacotaResposta(data_Object){
  const encodedJsonObject = Buffer.from(JSON.stringify(data_Object)).toString('base64'); 
  return encodedJsonObject
}

function DesempacotaRequisicao(msg){
  const encodedJsonObject = msg
  const decodedJsonObject01 = Buffer.from(encodedJsonObject, 'base64').toString('ascii'); 
  const decodedJsonObject = Buffer.from(decodedJsonObject01, 'base64').toString('ascii');
 // console.log('--decodedJsonObject-->',JSON.parse(decodedJsonObject))
  return decodedJsonObject
}