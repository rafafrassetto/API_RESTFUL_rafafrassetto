const axios = require('axios');

// Serviço que faz a chamada à API externa TheMealDB
exports.fetchMeals = async () => {
  try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
    
    // Retorna apenas a lista de refeições
    return response.data.meals;
  } catch (error) {
    throw new Error('Erro ao buscar dados da API externa');
  }
};
