const http = require('http')
const door = 3000

const route = {
    '/': 'Curso de Node',
    '/livros': 'Pagina de livros',
    '/autores': 'Listagem de autores',
    '/editoras' : 'Listagem de editoras',
    '/sobre': 'Criado por Steven Reis'
}

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(route[req.url]);
})

server.listen(door, ()=>{
    console.log(`Server listening on http://localhost:${door}`);
}) 