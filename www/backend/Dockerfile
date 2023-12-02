FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
RUN npm install cors
COPY ./src ./src
COPY ./config.js ./
CMD [ "npm", "start"]