FROM public.ecr.aws/docker/library/node:16-alpine as builder

WORKDIR /app

COPY ./package*.json ./

# Copy packages used
# None for now

COPY /apps/backend/package*.json ./apps/backend/
COPY /apps/backend ./apps/backend/

# RUN npm set timeout=100000
RUN npm install -w backend
RUN npm run generate -w backend
RUN npm run build -w backend

FROM public.ecr.aws/docker/library/node:16-alpine

WORKDIR /app/apps/backend
ENV NODE_ENV=production

# Copy build packages.
COPY --from=builder /app/apps/backend/build ./build/
COPY --from=builder /app/apps/backend/package*.json ./
COPY --from=builder /app/apps/backend/tsconfig.json ./
COPY --from=builder /app/apps/backend/src ./src/

WORKDIR /app

# For tsconfig paths
COPY --from=builder /app/node_modules ./node_modules/
COPY --from=builder /app/package*.json ./

RUN npm prune --production

EXPOSE 5000

CMD ["npm", "start", "-w", "backend"]