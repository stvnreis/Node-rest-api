import app from './src/app.js'

const door = process.env.PORT || 3000;

app.listen(door, ()=>{
    console.log(`Servidor escutando em http://localhost:${door}`);
})