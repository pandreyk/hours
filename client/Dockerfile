FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

EXPOSE 8080

VOLUME [ "/app/node_modules" ]

CMD [ "npm", "run", "dev" ]