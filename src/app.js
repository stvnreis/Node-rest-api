import express from "express";
import db from './config/dbConnect.js';
import livros from './models/livro.js';


db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () =>{
    console.log("Conexão com db feita com sucesso!");
})



const app = express();
app.use(express.json())

app.get('/', (req, res)=>{
    res.status(200).send('Curso de Node')
})

app.get('/livros', (req, res)=>{
    livros.find((err, livros) =>{
        res.status(200).json(livros)
    })
    
    
})

app.get('/livros/:id', (req, res)=>{
    let bookIndex = findBook(req.params.id);
    
    res.status(200).json(livros[bookIndex]);
})

app.post('/livros', (req, res)=>{
    livros.push(req.body)
    res.status(201).send('Livro cadastrado com sucesso!')
})

app.put('/livros/:id', (req, res)=>{
    let bookIndex = findBook(req.params.id);
    livros[bookIndex].titulo = req.body.titulo;

    res.status(200).json(livros);
})

app.delete('/livros/:id', (req, res)=>{
    let{id} = req.params;
    let index = findBook(id);
    livros.splice(index, 1);

    res.send(`Livro ${id} removido com sucesso!`);
})

function findBook(bookId){
    return livros.findIndex(livro => livro.id == bookId)
}

export default app