const express = require('express')

let app = express()

app.get('/', (req, res)=>res.send("Olá mundo!"))
app.get('/contatos', (req, res)=>res.send({nome: 'Kelvin', idade: 24, genero: 'Masculino', anoNascimento: 1997}))

// criando um servidor

app.listen(3000, () => console.log("O servidor está rodando na porta 3000"))


//--------------------------------------------------------//

