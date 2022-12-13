const esqueleto = require('./esqueleto')
const md5 = require('md5')
async function Despachante(dataJson){
    const DataGramCompleto = JSON.parse(dataJson)
    const dataVerify = DataGramCompleto.DatagramHash
    const HashClient = dataVerify.Hash
    const dataObject  = DataGramCompleto.Datagram

    const HashServer = md5(dataObject)
    console.log("Hash CLient", HashClient )
    console.log("hash Server", HashServer)
    if(HashServer != HashClient) return

    const Method = dataObject.Method

    if(Method == 'CriarDisciplina()'){
        const JSON_Response =  esqueleto.Criar_Disciplina(dataObject)
        const Datagram = {
            "messageType": 1,
            "responseID": dataObject.requestID,
            "ObjectReference": dataObject.ObjectReference,
            "Method": dataObject.Method,
            "arguments": JSON_Response
         }
         console.log(Datagram)
         return Datagram
    }
    if(Method == 'ListarDisciplinas()'){
        
        
        const ListarDisciplinas =  await esqueleto.list_Disciplinas()
        const Datagram = {
            "messageType": 1,
            "responseID": dataObject.requestID,
            "ObjectReference": dataObject.ObjectReference,
            "Method": dataObject.Method,
            "arguments": ListarDisciplinas
         }
        
        return Datagram
    }
    if(Method == 'DeletarDisciplina()'){
        
        const DeletarDisciplina =  await esqueleto.Deletar_Disciplina(dataObject)
        const Datagram = {
            "messageType": 1,
            "responseID": dataObject.requestID,
            "ObjectReference": dataObject.ObjectReference,
            "Method": dataObject.Method,
            "arguments": DeletarDisciplina
         }
        
       return Datagram
    }
    if(Method == 'BuscarDisciplina()'){
        
        const Discipĺinas =  await esqueleto.Buscar_Disciplina(dataObject)
        const Datagram = {
            "messageType": 1,
            "responseID": dataObject.requestID,
            "ObjectReference": dataObject.ObjectReference,
            "Method": dataObject.Method,
            "arguments": Discipĺinas
         }
        
       return Datagram
    }
} 

module.exports ={
    Despachante
}