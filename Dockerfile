# Use an official lightweight Node.js as a parent image
FROM node:alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory ocntents into the container at /usr/src/app
COPY . .

# Install a simple HTTP server to serve static content
RUN npm install -g http-server

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run http-server when the container launches
CMD ["http-server", "-p 8080"]