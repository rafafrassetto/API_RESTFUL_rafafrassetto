# API RESTful com TheMealDB

## Descrição do Projeto
Esta é uma API RESTful que fornece informações sobre refeições canadenses a partir da API TheMealDB. A API permite consultar refeições e criar novas refeições (apenas para fins de demonstração).

## Rotas Disponíveis
- **GET** `/meals` - Retorna uma lista de refeições.
- **POST** `/meals` - Adiciona uma nova refeição. (Não armazena, apenas retorna os dados recebidos).
- **GET** `/sobre` - Retorna informações sobre o estudante e o projeto.
- **GET** `/` - Retorna uma mensagem de boas-vindas.

## Instruções para Execução
1. Clone o repositório: `git clone <URL_DO_REPOSITORIO>`
2. Navegue até o diretório do projeto: `cd API_RESTFUL_rafafrassetto`
3. Instale as dependências: `npm install`
4. Inicie o servidor: `node src/app.js`
5. Acesse a API em [http://localhost:8080](http://localhost:8080)

## Exemplos de Requisições

### GET /meals
```bash
curl http://localhost:8080/meals
