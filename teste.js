const md5 = require('md5');

const datagramIntruso = 'ESSA MENSAGEM E MALISIOSA';

const teste = {
  teste: 'dmckdmkdckdmckdmc',
};

const v1 = md5(datagramIntruso);

const v2 = md5(teste);

if (v1 === v2) {
  console.log('funciona');
}
console.log(v1);
console.log(v2);
