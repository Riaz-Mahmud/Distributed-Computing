FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
RUN npm install forever -g
COPY ./src ./src
COPY ./config.js ./
RUN ln -s /usr/src/app/logs /logs
# CMD [ "npm", "start"]
CMD ["npm", "run", "dev"]