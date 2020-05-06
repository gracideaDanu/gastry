FROM node:12

WORKDIR /usr/src/frontend

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]