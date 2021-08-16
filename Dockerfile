# Start with nodejs image
FROM node

# Copy src directory to the container
COPY . /app

# Change the directory in the container
WORKDIR /app

# Run startup commands
RUN apt-get update
RUN npm install -g npm
RUN npm install

# Run final task of the container
CMD npm start