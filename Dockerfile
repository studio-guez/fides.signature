FROM node:22-slim

WORKDIR /app

COPY package*.json ./
RUN rm -f package-lock.json && npm install

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npx nuxt prepare && npm run dev"]
