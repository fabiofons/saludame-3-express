const express = require("express");
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) =>{
  res.send(`<h1>Hola ${req.body.nombre}!</h1>`)
})

app.listen(3000, ()=> console.log('listening on port 3000!'))