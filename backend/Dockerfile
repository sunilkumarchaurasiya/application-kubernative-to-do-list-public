# Use lightweight Node image
FROM node:16-slim

# Set working directory
WORKDIR /app

# Copy dependency files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy remaining code
COPY . .

# Expose backend port
EXPOSE 8080

# Start the app
CMD ["node", "index.js"]
