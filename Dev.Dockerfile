FROM node:18.16.0-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the port your app will run on
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "start"]
