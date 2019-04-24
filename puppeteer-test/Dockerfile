FROM alekzonder/puppeteer:latest

WORKDIR /app

COPY index.js /app/index.js
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install \
    && mkdir /app/screenshots

CMD [ "npm", "start" ]