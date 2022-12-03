
var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('node:dgram');
var client = dgram.createSocket('udp4');

 function serverClient(datagramEncapsuled){
  
  client.connect(PORT, HOST, (err) => {
  const entrada =  RequestData(datagramEncapsuled)
  //console.log("resposta do server: ", entrada)
  });


}


 function RequestData(datagramEncapsuled){
 client.send(datagramEncapsuled, (err) => {});
  
}

function ResponseData(Object_respota){

}



module.exports ={
  serverClient
}