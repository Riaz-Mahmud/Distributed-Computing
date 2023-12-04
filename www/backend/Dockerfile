FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
RUN npm install cors
RUN npm install express-session --save
RUN npm install cookie-parser --save
COPY ./src ./src
COPY ./config.js ./
RUN ln -s /usr/src/app/logs /logs
CMD [ "npm", "start"]