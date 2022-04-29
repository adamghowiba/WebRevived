FROM public.ecr.aws/docker/library/node:16-alpine as builder

WORKDIR /app

COPY ./package*.json ./

# Copy packages being used
COPY /packages/wds ./packages/wds

# Something seems fishy here...
# TODO Minimize container size
COPY /apps/frontend/package*.json ./apps/frontend/
COPY /apps/frontend ./apps/frontend/

# Install shared dpenedices & build.
RUN npm install
# RUN npm run build -w frontend

EXPOSE 3000
WORKDIR /app/apps/frontend/build

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