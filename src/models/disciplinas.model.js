const mongoose = require("mongoose");

const DisciplinaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "Por favor, informe o nome da disciplina"],
    trim: true,
    maxlength: [
      80,
      "O nome do usuario dentista deve ter no maximo 80 caracteres",
    ],
  },
  curso: {
    type: String,
    required: [true, "Por favor, informe o curso "],
    trim: true,
    maxlength: [80, "O nome do curso deve ter no maximo 80 caracteres"],
  },
  capacidade: {
    type: Number,
    required: [
      true,
      "Por favor, informe a capacidade de alunos da disciplina ",
    ],
    trim: true,
    maxlength: [55],
  },

  criadoEm: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Disciplina", DisciplinaSchema);
