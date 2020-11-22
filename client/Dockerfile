FROM node
WORKDIR /app/client
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3434
CMD ["npm", "run", "dev"]
