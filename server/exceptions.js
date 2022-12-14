function DatagramError(datagram) {
  const ServerFound = {
    Code: 320,
    requestID: datagram.requestID,
    ObjectReference: datagram.Reference_Object,
    Method: datagram.Method,
    arguments: datagram.arguments,
    error: 'Perda de dados do pacote',
  };
  return ServerFound;
}

function ErrorDuplication(datagram) {
  const Duplication = {
    Code: 329,
    requestID: datagram.requestID,
    ObjectReference: datagram.Reference_Object,
    Method: datagram.Method,
    arguments: datagram.arguments,
    error: 'Essa chamada ja existe',
  };
  return Duplication;
}

module.exports = {
  DatagramError,
  ErrorDuplication,
};
