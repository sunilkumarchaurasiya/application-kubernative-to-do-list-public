	# ---------- Step 1: Build React App ----------
FROM node:16-slim AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Build React app
RUN npm run build


# ---------- Step 2: Serve with Nginx ----------
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
