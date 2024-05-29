# FROM node:14.18.1 as build
# WORKDIR /app
# COPY package*.json ./
# COPY . .
# RUN npm i
# CMD ["npmr" , "run dev"]
# # RUN npm run build
# # FROM nginx:1.21.4-alpine
# # COPY --from=build /app/build /usr/share/nginx/html
# # COPY --from=build /app/n.c /etc/nginx/conf.d/default.conf
# # EXPOSE 5173
# # # CMD [ "npm", "start" ]
# # CMD [ "nginx","-g", "daemon off;"]
FROM node:16.12.0-alpine
WORKDIR /data/app
COPY ./ .
RUN npm i
EXPOSE 5173
CMD ["npm" , "run", "dev"]
