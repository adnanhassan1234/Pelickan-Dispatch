FROM node:14.18.1 as build
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm ci
RUN npm run build
FROM nginx:1.21.4-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/n.c /etc/nginx/conf.d/default.conf
EXPOSE 3000
# CMD [ "npm", "start" ]
CMD [ "nginx","-g", "daemon off;"]