import express from "express";

const app = express();
app.use(express.json())

const livros = [
    {id: 1, 'titulo': 'Senhor dos Aneis', preco: 350.90},
    {id: 2, 'titulo': 'Harry Potter', preco: 200.90}
]

app.get('/', (req, res)=>{
    res.status(200).send('Curso de Node')
})

app.get('/livros', (req, res)=>{
    res.status(200).json(livros)
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

function findBook(bookId){
    return livros.findIndex(livro => livro.id == bookId)
}

export default app