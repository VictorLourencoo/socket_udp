function empacotaMenssagem(dataObject) {
  const encodedJsonObject = Buffer.from(JSON.stringify(dataObject)).toString('base64');
  return encodedJsonObject;
}

function DesempacotaMenssagem(msg) {
  const encodedJsonObject = msg;
  const decodedJsonObject01 = Buffer.from(encodedJsonObject, 'base64').toString('ascii');
  const decodedJsonObject = Buffer.from(decodedJsonObject01, 'base64').toString('ascii');
  // response = JSON.parse(decodedJsonObject)
  // console.log("aqui esta o response: ", response)
  return JSON.parse(decodedJsonObject);
}

module.exports = {
  DesempacotaMenssagem,
  empacotaMenssagem,
};
