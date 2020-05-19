FROM node:12

WORKDIR /usr/src/backend

COPY package*.json ./

RUN npm install -g nodemon

COPY . .

CMD [ "npm", "run", "start" ]
