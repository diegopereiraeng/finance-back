FROM node:18

RUN apt-get update && apt-get install ca-certificates

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "server.js"]