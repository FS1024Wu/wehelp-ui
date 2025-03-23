# Stage 1: Build the Angular app
FROM node:18.20.5 AS build
WORKDIR /app
COPY src ./
COPY angular.json package.json package-lock.json tsconfig.app.json tsconfig.json tsconfig.spec.json ./
RUN npm install
RUN npm run build --prod  # Builds the app for production
