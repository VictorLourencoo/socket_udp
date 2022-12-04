const dgram = require('node:dgram');
// creating a client socket
var client = dgram.createSocket('udp4');
let buffer;

 const EnviarMensagem = async (datagramEncapsuled) =>{
  return new Promise((resolve, reject) => {
   client.send(datagramEncapsuled,33333,'localhost',function(error){
    if(error){
      client.close();
    }else{
      console.log('Data sent !!!');
   
    }
  });

   client.on('message', (msg, info) => {
   // console.log("sever:", msg);
    buffer = msg;
    //Preciso que o valor de msg seja visto pela função principal serverClient
    console.log('Data received from server : ' + msg.toString());
    console.log('Received %d bytes from %s:%d\n', msg.length, info.address, info.port);
 
  });
console.log("Criando uma disciplina...")
 setTimeout(()=>{
 // console.log("res:", buffer)
 resolve(buffer)
 }, 5000)

 
})


}




   
 
   
   
   
   module.exports ={
     EnviarMensagem
   }