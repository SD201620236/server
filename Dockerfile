FROM node:14-alpine

RUN mkdir -p /server-docker
WORKDIR /server-docker

COPY . .
RUN npm install -g

EXPOSE 3000

ENTRYPOINT [ "server-docker" ]
