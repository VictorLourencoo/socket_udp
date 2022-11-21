const DisciplinaModel = require('../models/disciplinas.model');

class Disciplina {
  async create(req, res) {
    const disciplina = new DisciplinaModel(req.body);
    await disciplina
      .save()
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async update(req, res) {
    await DisciplinaModel.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).json(error);
      });
  }
  async all(req, res) {
    await DisciplinaModel.find()
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        return res.status(400).json(error);
      });
  }

  async retrive(req, res) {
    const id = req.params.id;
    await DisciplinaModel.findById(id)
      .then((response) => {
        if (response) {
          return res.status(200).json(response);
        } else {
          return res.status(400).json('Disciplina nao existe');
        }
      })
      .catch((error) => {
        console.log(error);
        return res.status(400).json(error);
      });
  }
  async delete(req, res) {
    await DisciplinaModel.deleteOne({ _id: req.params.id })
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error, 'Erro ao deletar tarefa');
      });
  }
}

module.exports = new Disciplina();
