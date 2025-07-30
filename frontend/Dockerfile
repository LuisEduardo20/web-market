FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 4200
CMD ["npx", "vite", "preview", "--host"]
