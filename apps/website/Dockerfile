FROM public.ecr.aws/bitnami/node:16 as builder

WORKDIR /app

COPY ./package*.json ./

# Copy packages being used
COPY /packages/wds ./packages/wds

# Something seems fishy here...
COPY /apps/website/package*.json ./apps/website/
COPY /apps/website ./apps/website/

RUN npm set timeout=100000

# Install shared dpenedices & build.
RUN npm install
RUN npm run build -w website
COPY ./apps/website ./apps/website/build

FROM public.ecr.aws/bitnami/node:16
ENV NODE_ENV=production
WORKDIR /app

COPY --from=builder /app/website/build build/
EXPOSE 4000
