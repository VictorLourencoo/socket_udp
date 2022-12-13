
function History(datagram){
let ArrayRequestsSucess = []
let ArrayRequestsFailure = []
if(datagram.error){
    ArrayRequestsFailure.push(datagram)
}else{
    ArrayRequests.push(datagram)
}


}