# Usar imagem base do Node.js
FROM node:14

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependência
COPY package.json ./
RUN npm install

# Copiar todos os arquivos
COPY . .

# Expor a porta 8080
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["node", "src/app.js"]
