import livros from '../models/livros.js';

export default class LivrosController{
    static list = (req, res) => {
        livros.find()
            .populate("editora")
            .exec((err, livros) => {
                res.status(200).json(livros);
            })
    }

    static listById = (req, res) => {
        const id = req.params.id;

        livros.findById(id)
            .populate("editora", 'nome')
            .exec((err, livro) =>{
        
            if(!err){
                res.status(200).send(livro);
            }else{
                res.status(404).send({message: `Livro de id ${id} não localizado!`});
            }
        })
    }

    static listBookByEditor = (req, res) => {
        const editora = req.query.editora;

        livros.find({'editora': editora}, {}, (err, livros) => {
            if(!err){
                res.status(200).send(livros)
            }
        })
    }

    static include = (req, res) => {
        let novoLivro = new livros(req.body);

        novoLivro.save((err) => {
            if(!err){
                res.status(200).send({message: "Livro atualizado com sucesso!"});
                
            }else{
                res.status(500).send({message: `${err.message} - falha ao cadastrar Livro`});
            }
        });
    }

    static update = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha eo atualizar livro com o id ${id}`});
            }
            else{
                res.status(200).send("Livro atualizado com sucesso!");
            }
        })
    }

    static delete = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: `Livro ${id} excluido com sucesso!`});
            }
            else{
                res.status(500).send({message: `Erro ao deletar livro de id ${id}`})
            }
        })
    }
}