FROM node:12

WORKDIR /usr/src/backend

COPY package*.json ./

RUN npm install && \
       rsync

ADD init.sh /init.sh

COPY . .

CMD [ "npm", "run", "start" ]