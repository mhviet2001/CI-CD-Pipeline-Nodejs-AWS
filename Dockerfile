# Use a lightweight base image of Node.js
FROM node:lts-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json if exists
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the application code
COPY . .

# Set the user to non-root (security best practice)
USER node

# Expose port 8080 for the application
EXPOSE 8080

# Start the application
CMD [ "node", "index.js" ]
