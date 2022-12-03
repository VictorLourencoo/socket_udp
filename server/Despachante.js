const esqueleto = require('./esqueleto')

function Despachante(dataJson){
    const dataObject = JSON.parse(dataJson)
    const Method = dataObject.Method
    if(Method == 'CriarDisciplina()'){
        const JSON_Response =  esqueleto.Criar_Disciplina(dataObject)
        const Datagram = {
            "messageType": 1,
            "requestID": dataObject.requestID,
            "ObjectReference": dataObject.ObjectReference,
            "Method": dataObject.Method,
            "arguments": JSON_Response
         }
         console.log(Datagram)
         return Datagram
    }
    if(Method == 'ListarDisciplinas()'){
        const ListarDisciplinas =  esqueleto.list_Disciplinas()
    }
} 

module.exports ={
    Despachante
}