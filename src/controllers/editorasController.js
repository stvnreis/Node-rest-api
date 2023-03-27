import editora from "../models/editora.js";

export default class EditorasController{
    static list = (req, res) => {
        editora.find()
            .exec((err, editoras) =>{
                res.status(200).json(editoras);
            })
    }

    static listById = (req, res) => {
        const id = req.params.id;

        editora.findById(id)
            .exec((err, editora) =>{
                if(!err){
                    res.status(200).send(editora.nome);
                }else{
                    res.status(404).send({message: `editora de id ${id} não localizada!`});
                }
            })
    }

    static include = (req, res) => {
        let novaEditora = new editora(req.body);

        novaEditora.save((err) => {
            if(!err){
                res.status(200).send({message: "editora atualizado com sucesso!"});
                
            }else{
                res.status(500).send({message: `${err.message} - falha ao cadastrar editora`});
            }
        });
    }

    static update = (req, res) => {
        const id = req.params.id;

        editora.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha eo atualizar editora com o id ${id}`});
            }
            else{
                res.status(200).send("editora atualizada com sucesso!");
            }
        })
    }

    static delete = (req, res) => {
        const id = req.params.id;

        editora.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: `editora ${id} excluida com sucesso!`});
            }
            else{
                res.status(500).send({message: `Erro ao deletar editora de id ${id}`})
            }
        })
    }
}