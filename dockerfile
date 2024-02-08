FROM node:alpine

WORKDIR /app

EXPOSE 3000

COPY . .

RUN npm i

CMD ["npm", "run", "dev"]