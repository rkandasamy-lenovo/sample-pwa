FROM node:8.12.0-alpine

COPY . .

RUN npm install

EXPOSE 8080

CMD [ "node", "server.js" ]
