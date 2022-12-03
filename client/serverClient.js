const dgram = require('node:dgram');
// creating a client socket
var client = dgram.createSocket('udp4');

function serverClient(datagramEncapsuled){
//sending msg
client.send(datagramEncapsuled,33333,'localhost',function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }
});

client.on('message',(msg,info)=>{

    //Preciso que o valor de msg seja visto pela função principal serverClient
    console.log('Data received from server : ' + msg.toString());
    console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
    return msg
  });
 

}

function RequestData(datagramEncapsuled){
    client.send(datagramEncapsuled, (err) => {});
     
   }
   
   function ResponseData(datagram){
    console.log(datagram)
   return datagram
   }
   
   
   
   module.exports ={
     serverClient
   }