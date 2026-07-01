FROM node:22-slim

RUN groupmod -g 1000 node && usermod -u 1000 node

WORKDIR /app
RUN chown node:node /app

COPY --chown=node:node package*.json ./
USER node
RUN rm -f package-lock.json && npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD ["sh", "-c", "npx nuxt prepare && npm run dev"]
