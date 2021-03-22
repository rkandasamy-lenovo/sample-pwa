FROM node:8.17.0-alpine

COPY . .

RUN npm install

EXPOSE 8080

CMD [ "node", "server.js" ]
