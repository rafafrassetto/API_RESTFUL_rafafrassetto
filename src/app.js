// Arquivo para inicializar o servidor e definir as rotas para requisições GET e POST
const express = require('express');
const mealController = require('./controllers/mealController');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/meals', mealController.getMeals);
app.post('/meals', mealController.createMeal);

app.get('/sobre', (req, res) => {
  res.json({
    estudante: "Rafael Frassetto",
    projeto: "API RESTful com API pública TheMealDB"
  });
});

// Rota padrão que serve o arquivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
