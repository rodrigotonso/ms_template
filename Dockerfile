FROM node:12.16.1-slim

RUN npm install -g nodemon

WORKDIR /app

COPY ./package.json /app/package.json

RUN npm install

COPY ./ /app

EXPOSE 3000

CMD [ "npm","run", "serve"  ]