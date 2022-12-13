const md5 = require('md5')
  
var password = 'teste'
  
md5(password)
var pass2 = 'teste'
md5(pass2)

if(password === pass2){
    console.log("funciona")
}