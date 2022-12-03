function DesempacotaMenssagem(msg){
    const encodedJsonObject = msg
    const decodedJsonObject01 = Buffer.from(encodedJsonObject, 'base64').toString('ascii'); 
    const decodedJsonObject = Buffer.from(decodedJsonObject01, 'base64').toString('ascii');
   // console.log('--decodedJsonObject-->',JSON.parse(decodedJsonObject))
    return JSON.parse(decodedJsonObject)
     }

module.exports ={
    DesempacotaMenssagem
}