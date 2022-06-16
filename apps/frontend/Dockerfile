FROM public.ecr.aws/docker/library/node:16-alpine as builder

WORKDIR /app

COPY ./package*.json ./

# Copy packages being used
COPY /packages/wds ./packages/wds
COPY /packages/types ./packages/types

# Something seems fishy here...
# TODO Minimize container size
COPY /apps/frontend/package*.json ./apps/frontend/
COPY /apps/frontend ./apps/frontend/

# Install shared dpenedices & build.
RUN npm install
RUN npm run build -w frontend

EXPOSE 3000
WORKDIR /app/apps/frontend/build

CMD ["node", "index.js"]