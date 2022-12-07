const esqueleto = require('./esqueleto')

async function Despachante(dataJson){
    const dataObject = JSON.parse(dataJson)
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