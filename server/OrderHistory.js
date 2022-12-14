/* eslint-disable no-unused-vars */
function History(datagram) {
  const ArrayRequestsSucess = [];
  const ArrayRequestsFailure = [];
  if (datagram.error) {
    ArrayRequestsFailure.push(datagram);
  } else {
    ArrayRequestsSucess.push(datagram);
  }
}
