# Use official node.js runtime as base image
FROM node:14

RUN apt-get update && apt-get install -y netcat

# Setdir
WORKDIR /app

# Copy pkg
COPY package*.json ./

# Install dependency
RUN npm install

# Copy the rest of appcode
COPY . .

COPY migrate.sh /app/

# Expose port Node.js listens on
EXPOSE 3001

# Define cmd to start nodejs
CMD ["node", "app.js"]