/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
const ArrayRequestsSucess = [];
const ArrayRequestsFailure = [];
const { ErrorDuplication } = require('./exceptions');

function HistorySucess(datagram) {
  ArrayRequestsSucess.push(datagram);
  return ArrayRequestsSucess;
}

function HistoryFailure(datagram) {
  ArrayRequestsFailure.push(datagram);
  return ArrayRequestsFailure;
}

function HistoryVerify(datagram) {
  if (ArrayRequestsSucess.length === 0) {
    return 200;
  }
  const idRequest = datagram.requestID;
  for (let index = 0; index < ArrayRequestsSucess.length; index++) {
    const element = ArrayRequestsSucess[index].requestID;

    if (element === idRequest) {
      const error = ErrorDuplication(datagram);
      return error;
    }
  }

  return 200;
}

module.exports = {
  HistorySucess,
  HistoryFailure,
  HistoryVerify,
};
