FROM public.ecr.aws/bitnami/node:16 as builder

WORKDIR /app

COPY ./package*.json ./
# COPY ./turbo.json ./

# Copy packages being used
COPY /packages/wds ./packages/wds

# Something seems fishy here...
COPY /frontend/package*.json ./frontend/
COPY /frontend ./frontend/

RUN npm set timeout=100000
# Install turbo to run turbo build command

# Install shared dpenedices & build.
RUN npm install
RUN npm run build -w=frontend

EXPOSE 3000
WORKDIR /app/frontend/build

CMD ["node", "index.js"]


# FROM node:16-alpine AS builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . ./
# RUN npm run build
# RUN npm prune --production

# FROM mhart/alpine-node:slim-16
# ENV NODE_ENV=production
# WORKDIR /app
# COPY --from=builder /app/build build/
# COPY --from=builder /app/node_modules node_modules/
# COPY package*.json ./
# EXPOSE 3000
# CMD [ "node", "build" ]