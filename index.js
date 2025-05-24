const express = require('express')
const AnimesRoutes = require("../Api-Animes/src/routes/animes");
const { Animes } = require('./src/models');

require = (".")
const app = express();
const port = 6000;

app.use(express.json());
app.use('/animes', AnimesRoutes);


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});