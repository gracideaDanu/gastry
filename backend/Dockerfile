FROM node:12

WORKDIR /usr/src/backend

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]