FROM node:12.13-alpine

WORKDIR /app

COPY ./node-nest/package*.json ./

RUN npm install 

COPY . .

COPY ./node-nest/dist ./dist

CMD ["npm", "run", "start"]