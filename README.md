# API RESTful - Rafael Frassetto Pereira

## Descrição

Este é um projeto de API RESTful que permite adicionar e visualizar refeições de um cardápio utilizando a API pública TheMealDB. A aplicação é construída com Node.js, Axios e Express, e pode ser executada em um container Docker.

Link para a API pública utilizada : https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

# Vídeo Demonstrativo :



https://github.com/user-attachments/assets/686f7230-4704-4afc-856c-cd75a3b810cf



## Tecnologias Utilizadas

- Node.js
- Express
- Axios
- Docker

## Como Executar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/rafafrassetto/API_RESTFUL_rafafrassetto.git
   cd API_RESTFUL_rafafrassetto

2. **Navegue até a pasta do projeto.**

3. **Construa e inicie o projeto em um container Docker:**
   ```bash
   docker-compose up --build

4. **Acesse a aplicação em :**  http://localhost:8080

## Como Executar Caso Deseje Utilizar Docker Desktop 

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/rafafrassetto/API_RESTFUL_rafafrassetto.git
   cd API_RESTFUL_rafafrassetto

2. **Navegue até a pasta do projeto.**

3. **Abra o aplicativo Docker Desktop**

4. **Construa e inicie o projeto em um container Docker:**
   ```bash
   docker-compose up --build
   
5. **Acesse a aplicação em :**  http://localhost:8080

# Rotas :

- http://localhost:8080 (Rota contendo o index para o direcionamento para a visualização e adição de refeições ao cardápio)
- http://localhost:8080/meals (Rota para visualizar a API pública com as Refeições Originais e Refeições que poderão ser Adicionadas
- http://localhost:8080/sobre (Rota com as informações referentes ao desenvolvedor)


## GET (/meals)

- Retorna uma lista de refeições, combinando as refeições da API externa com as refeições adicionadas.

Resposta Exemplo:

![image](https://github.com/user-attachments/assets/6612ecbc-162d-44d2-afb9-10be6dd4b8f4)

## POST (/meals)

Adiciona uma nova refeição.

Corpo da Requisição Exemplo:

![image](https://github.com/user-attachments/assets/f31a5c3d-3dcb-41ca-af05-d502130cf886)

# GET (/sobre)

Retorna informações sobre o desenvolvedor e o projeto.

![image](https://github.com/user-attachments/assets/17065409-9b7e-4f94-8755-eaa4ff8838d5)

# Estrutura de Pastas

```bash
C:\
└── API_RESTFUL_rafafrassetto\
    ├── public\
    │   └── index.html -> (Página para a visualização e adição de novas refeições.)
    └── src\
        ├── controllers\
        │   └── mealController.js -> (Arquivo para controlar as requisições recebidas e usar o serviço para lidar com os dados.)
        └── services\
            └── mealService.js -> (Serviço responsável por fazer chamadas à API externa, neste caso, a TheMealDB.)
        ├── app.js -> (Arquivo para inicializar o servidor e definir as rotas para requisições GET e POST.)
    ├── .gitignore
    ├── docker-compose.yml  
    ├── Dockerfile
    ├── package-lock.json
    ├── package.json
    ├── README.md
