// Arquivo para controlar as requisições recebidas e usar o serviço para lidar com os dados.
const mealService = require('../services/mealService');

// Array para armazenar as refeições
let meals = [];

exports.getMeals = async (req, res) => {
  try {
    const externalMeals = await mealService.fetchMeals();
    
    const allMeals = [...externalMeals, ...meals];

    res.json(allMeals);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar as refeições' });
  }
};

// Controlador que lida com a requisição POST para '/meals'
exports.createMeal = (req, res) => {
  const newMeal = req.body;

  meals.push(newMeal);
  
  res.status(201).json({ message: 'Refeição recebida com sucesso', meal: newMeal });
};
