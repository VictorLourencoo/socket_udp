/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
const Proxy = require('./proxy.js');
// eslint-disable-next-line import/order
const teclado = require('prompt-sync')();

async function Menu() {
  let statusCode = 500;
  console.log('Escolhe uma opção do menu');
  console.log('1°) Criar Disciplina');
  console.log('2°) Listar Discipĺinas');
  console.log('3°) Deletar Disicplina');
  console.log('4°) Buscar Disiciplina');
  console.log('5°) Encerrar Conexão');
  const op = teclado();

  if (op === '1') {
    const ID = Math.floor(18382392 * Math.random(2)).toString(36);
    console.log('Vamos cadastrar uma disciplina');
    console.log('Digite o nome da disciplina');
    const nome = teclado();
    console.log('Digite o curso que pertence a disciplina');
    const curso = teclado();
    console.log('Digite a capacidade da disciplina');
    const capacidade = teclado();

    while (statusCode === 500) {
      const ObjectDisciplina = {
        id: ID,
        nome,
        curso,
        capacidade,
      };
      // console.log(Object_Disciplina)
      // eslint-disable-next-line no-await-in-loop
      const resposta = await Proxy.CriarDisciplina(ObjectDisciplina);
      if (resposta.Code === 500) {
        console.log(resposta.error);
      } else {
        statusCode = 200;
        console.log(resposta);
      }
    }

    Menu();
  }
  if (op === '2') {
    while (statusCode === 500) {
      const resposta = await Proxy.listarDisciplina();
      if (resposta.Code === 500) {
        console.log(resposta.error);
      } else {
        statusCode = 200;
        console.log(resposta);
      }
    }
    Menu();
  }
  if (op === '3') {
    while (statusCode === 500) {
      const disciplinas = await Proxy.listarDisciplina();
      if (disciplinas.Code === 500) {
        console.log(disciplinas.error);
      } else {
        statusCode = 200;
        console.log(disciplinas.arguments);
        console.log('Digite o ID da Disciplina');
        const IdDisciplina = teclado();
        const resposta = await Proxy.DeletarDisciplina(IdDisciplina);
        if (resposta.Code === 500) {
          console.log(resposta.error);
        } else {
          statusCode = 200;
          console.log(resposta);
        }
      }
    }
    Menu();
  }
  if (op === '4') {
    while (statusCode === 500) {
      console.log('Digite o curso');
      const nomeCurso = teclado();

      const resposta = await Proxy.BuscarDisciplina(nomeCurso);
      if (resposta.Code === 500) {
        console.log(resposta.error);
      } else {
        statusCode = 200;
        console.log(resposta);
      }
    }
    Menu();
  }
}
Menu();
module.exports = {
  Menu,
};
