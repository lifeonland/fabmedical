FROM node:18-alpine AS base
WORKDIR /usr/src/app
RUN apk add --no-cache curl
EXPOSE 3001

FROM node:18-alpine AS build
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

FROM base AS final
WORKDIR /usr/src/app
COPY --from=build /usr/src/app .
CMD [ "npm", "start" ]
