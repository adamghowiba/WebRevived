FROM public.ecr.aws/docker/library/node:16-alpine as builder

WORKDIR /app

COPY ./package*.json ./

# Copy packages used
COPY /packages/types ./packages/types/

COPY /apps/backend/package*.json ./apps/backend/
COPY /apps/backend ./apps/backend/

RUN npm install -g npm@7.18.1
RUN npm install -w backend
RUN npm run generate -w backend
RUN npm run build -w backend

FROM public.ecr.aws/docker/library/node:16-alpine

WORKDIR /app/apps/backend
ENV NODE_ENV=production

# Copy build packages.
COPY --from=builder /app/apps/backend/build ./build/
COPY --from=builder /app/apps/backend/src ./src/
# TODO Do I need these?
COPY --from=builder /app/apps/backend/package*.json ./
COPY --from=builder /app/apps/backend/tsconfig.json ./

WORKDIR /app

# For tsconfig paths
COPY --from=builder /app/node_modules ./node_modules/
# TODO Do I even need this?
COPY --from=builder /app/package*.json ./

RUN npm prune --production

EXPOSE 5000

CMD ["npm", "start", "-w", "backend"]