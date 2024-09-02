FROM node:18.17-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat file
WORKDIR /app
COPY package*.json ./
EXPOSE 3000

ENV TZ="Asia/Singapore"
RUN date