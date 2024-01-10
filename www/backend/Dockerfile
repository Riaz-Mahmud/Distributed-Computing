FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ./src ./src
COPY ./config.js ./
RUN ln -s /usr/src/app/logs /logs
CMD ["npm", "run", "dev"]