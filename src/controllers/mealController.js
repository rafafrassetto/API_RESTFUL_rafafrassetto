// Arquivo para controlar as requisições recebidas e usar o serviço para lidar com os dados.
const mealService = require('../services/mealService');

// Array para armazenar as refeições
let meals = [];

// Controlador que lida com a requisição GET para '/meals'
exports.getMeals = async (req, res) => {
  try {
    // Buscando refeições da API externa
    const externalMeals = await mealService.fetchMeals();
    
    // Combina as refeições externas com as armazenadas
    const allMeals = [...externalMeals, ...meals];

    // Retorna todas as refeições
    res.json(allMeals);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar as refeições' });
  }
};

// Controlador que lida com a requisição POST para '/meals'
exports.createMeal = (req, res) => {
  // Obtém a nova refeição do corpo da requisição
  const newMeal = req.body;

  // Armazena a nova refeição no array
  meals.push(newMeal);
  
  // Retorna a refeição recebida
  res.status(201).json({ message: 'Refeição recebida com sucesso', meal: newMeal });
};
