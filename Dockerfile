FROM node:21.4.0 as build

WORKDIR /app
COPY package.json package-lock.json ./

RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.21.1-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]