
function DatagramError(datagram){
    const ServerFound = {
        "Code": 500,
        "requestID":datagram.requestID ,
        "ObjectReference": datagram.Reference_Object,
        "Method": datagram.Method,
        "arguments": datagram.arguments,
        "error": "Servidor Desconectado"
    }
    return ServerFound
}

module.exports ={
    DatagramError
}