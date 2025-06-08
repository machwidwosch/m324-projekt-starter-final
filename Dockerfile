# Dockerfile
FROM node:18-alpine

# Arbeitsverzeichnis erstellen
WORKDIR /app

# Nur package.json + lock kopieren (für Caching)
COPY package*.json ./

# Dependencies installieren
RUN npm install

# Restliche Files kopieren
COPY . .

# Build ausführen
RUN npm run build

# Startbefehl
CMD ["node", "build/server/index.js"]
