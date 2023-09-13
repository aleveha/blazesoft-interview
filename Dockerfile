FROM node:20-alpine as deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
RUN mv .next/static .next/standalone/.next/static && \
    mv .next/standalone /home/node

FROM node:20-alpine AS prod
COPY --from=deps /home/node /home/node
WORKDIR /home/node/standalone
EXPOSE 3000
CMD ["node", "server.js"]
