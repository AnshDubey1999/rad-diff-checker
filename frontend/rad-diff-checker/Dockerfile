FROM node:20

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json first, for efficient caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application's code into the container
COPY . .

# Build the app
# RUN npm run build

# Expose port 3000 for the Next.js app to listen on
EXPOSE 3000

# Command to run the app
# CMD ["npm", "start", "--host", "0.0.0.0"]
CMD ["npx", "next", "dev", "-H", "0.0.0.0", "-p", "3000"]

# dev -H 0.0.0.0 -p 3000
