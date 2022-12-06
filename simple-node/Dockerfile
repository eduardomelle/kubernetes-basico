# Começa com uma imagem de Node.js 10 (LTS)
FROM node:10

# Especifica o diretório da imagem no qual os comandos serão executados
WORKDIR /usr/src/app

# Copia os arquivos do pacote e instala as dependências
COPY package*.json ./
RUN npm install

# Copia todos os arquivos da aplicação para a imagem
COPY . .

# O comando default a ser executado ao iniciar o contêiner
CMD [ "npm", "start" ]