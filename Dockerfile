FROM node:21.6.2-alpine
WORKDIR /app
COPY ./package*.json .
ENV NODE_ENV production
RUN npm ci
COPY . .

ENTRYPOINT npm run start

EXPOSE 3000