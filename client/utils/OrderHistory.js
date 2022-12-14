/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
const ArrayRequest = [];

const { ErrorDuplication } = require('../exceptions/exceptions');

function HistorySucess(datagram) {
  ArrayRequest.push(datagram);
  return ArrayRequest;
}

function HistoryVerify(datagram) {
  if (ArrayRequest.length === 0) {
    return 200;
  }

  const idRequest = datagram.requestID;

  for (let index = 0; index < ArrayRequest.length; index++) {
    const element = ArrayRequest[index].requestID;

    if (element === idRequest) {
      const error = ErrorDuplication(datagram);
      return error;
    }
  }

  return 200;
}

module.exports = {
  HistorySucess,
  HistoryVerify,
};
