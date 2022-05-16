FROM public.ecr.aws/docker/library/node:16-alpine as builder

WORKDIR /app

COPY ./package*.json ./

# Copy packages being used
COPY /packages/wds ./packages/wds

# Something seems fishy here...
# TODO Minimize container size
COPY /apps/website/package*.json ./apps/website/
COPY /apps/website ./apps/website/

# Install shared dpenedices & build.
RUN npm install
# RUN npm run build -w frontend

EXPOSE 3000
WORKDIR /app/apps/website/build

CMD ["node", "index.js"]


# FROM public.ecr.aws/bitnami/node:16 as builder

# WORKDIR /app

# COPY ./package*.json ./

# # Copy packages being used
# COPY /packages/wds ./packages/wds

# # Something seems fishy here...
# COPY /apps/website/package*.json ./apps/website/
# COPY /apps/website ./apps/website/

# RUN npm set timeout=100000

# # Install shared dpenedices & build.
# RUN npm install
# RUN npm run build -w website
# COPY ./apps/website ./apps/website/build

# FROM public.ecr.aws/bitnami/node:16
# ENV NODE_ENV=production
# WORKDIR /app

# COPY --from=builder /app/website/build build/
# EXPOSE 4000