FROM node:20-alpine

WORKDIR /
COPY . .
RUN npm install && npm run build
EXPOSE 4200
CMD ["npx", "vite", "preview", "--host"]
