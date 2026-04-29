# ---------- Step 1: Build React App ----------
FROM node:14 AS build   # ❌ older version (has known CVEs)

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# ❌ intentionally outdated / less secure dependencies check
RUN npm install lodash@4.17.15

RUN npm run build


# ---------- Step 2: Serve with Nginx ----------
FROM nginx:1.18   # ❌ older nginx version (known vulnerabilities)

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
