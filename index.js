const express = require('express')
const app = express()

app.use(express.static('public'));
app.get('/tabela', function (req, res) {
  res.send("Olá")
})

app.listen(3000, function(){
    console.log("Ok. Estamos rodando na porta 3000")
})