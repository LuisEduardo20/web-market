FROM node:20-alpine

WORKDIR /
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["node", "dist/main.js"]
