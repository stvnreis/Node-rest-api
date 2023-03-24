import mongoose from 'mongoose';

const schemaBook = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        editora: {type: String, required: true},
        preco: {type: String}
    }
);

const livros = mongoose.model('livros', schemaBook);

export default livros;