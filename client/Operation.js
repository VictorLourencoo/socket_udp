//import Client from './client.js'
const Client = require('./serverClient')
//const {Buffer} = require('node:buffer');

  function DoOperation(Reference_Object, Method, JSON){
    //envio
    const ID = Math.floor(Date.now() * Math.random()).toString(36)
      const Datagram = {
         "messageType": 0,
         "requestID": ID,
         "ObjectReference": Reference_Object,
         "Method": Method,
         "arguments": JSON
      }

console.log("datagram: ", Datagram)
const datagramEncapsuled =  empacotaMenssagem(Datagram)
 
 //console.log("data doOperation: ", datagramEncapsuled)
 const request = Client.serverClient(datagramEncapsuled)
 console.log(request)
//const resposta =  DesempacotaMenssagem(request)
//return resposta
}  






function empacotaMenssagem(data_Object){
   const encodedJsonObject = Buffer.from(JSON.stringify(data_Object)).toString('base64'); 
   return encodedJsonObject
}

function DesempacotaMenssagem(msg){
   const encodedJsonObject = msg
   const decodedJsonObject01 = Buffer.from(encodedJsonObject, 'base64').toString('ascii'); 
   const decodedJsonObject = Buffer.from(decodedJsonObject01, 'base64').toString('ascii');
  // console.log('--decodedJsonObject-->',JSON.parse(decodedJsonObject))
  return JSON.parse(decodedJsonObject)
    }

module.exports ={
   DoOperation,
   DesempacotaMenssagem,
   empacotaMenssagem,
}

