# Use the official Node.js image.
FROM node:22

# Set the working directory.
WORKDIR /app

# Copy package.json and package-lock.json.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application.
COPY . .

# Expose port 4000.
EXPOSE 4000

# Start the Next.js app.
CMD ["npm", "run", "dev"]