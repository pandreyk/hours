FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

EXPOSE 3000

VOLUME [ "/app/node_modules" ]

CMD [ "npm", "run", "dev" ]