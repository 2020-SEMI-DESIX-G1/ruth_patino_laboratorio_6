const express = require('express')
const app = express()
const bodyparser = require('body-parser');
const port = 3000

const ESTUDIANTES = [
    {
        nombre: "Ruth Patiño",
        edad: 23,
    },
    {
        nombre: "Yulianis Benis",
        edad: 18,
    }

];

app.use(bodyparser.json());

//CONTROLADORES
app.get('/api/estudiantes/', (req, res) =>{
    res.json({
        cantidad: ESTUDIANTES.length,
        estudiantes: ESTUDIANTES
    });
});

app.get('/api/estudiantes/:id',(req, res) => {
    res.json(ESTUDIANTES[req.params.id]);
});

app.post('/api/estudiantes/',(req, res) => {
   ESTUDIANTES.push(req.body);
   res.json(req.body);
});

app.put('/api/estudiantes/:id',(req, res) => {
    ESTUDIANTES.push(req.body);
    res.json(Estudiantes[req.params.id]);
});
  
app.delete('/api/estudiantes/:id',(req, res) => {
    res.json(Estudiantes.splice(req.params.id));
    res.send(Estudiantes)
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));