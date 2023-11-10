import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: {
      type: String,
      required: [true, "O título do livro é obrigatório"],
    },
    editora: { type: String, required: [true, "A editora é obrigatória"] },
    preco: {
      type: Number,
      required: [true, "O preço é obrigatório"],
      enum: {
        values: [25, 50, 75],
        message: "A valor {VALUE} não é um valor permitido.",
      },
    },
    paginas: {
      type: Number,
      // min: [10, "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"],
      // max: [5000, "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"]
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 5000;
        },
        message: "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"
      }
    },
    autor: autorSchema,
  },
  { versionKey: false }
);

const livros = mongoose.model("livros", livroSchema);

export default livros;
