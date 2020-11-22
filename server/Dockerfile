FROM node
WORKDIR /app/server
COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 3535
CMD ["npm", "run", "server"]
