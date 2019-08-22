FROM node:10.16.3

LABEL author="Opeoluwa Iyi-Kuyoro"

ENV PORT=8000

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

EXPOSE 8000

CMD ["node", "./dist/server/index.js"]
