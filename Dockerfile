# Use the official Node.js image as the base image
FROM node:16

# Set npm proxy settings if behind a proxy
RUN npm config set proxy http://your-proxy:port
RUN npm config set https-proxy http://your-proxy:port

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
