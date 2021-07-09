FROM node:8.16-alpine

COPY . .

RUN npm install

EXPOSE 8080

CMD [ "node", "server.js" ]
