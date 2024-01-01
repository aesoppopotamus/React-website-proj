# Use official node.js runtime as base image
FROM node:14

# Setdir
WORKDIR /app

# Copy pkg
COPY package*.json ./

# Install dependency
RUN npm Install

# Copy the rest of appcode
COPY . .

# Expose port Node.js listens on
EXPOSE 3001

# Define cmd to start nodejs
CMD ["node", "app.js"]