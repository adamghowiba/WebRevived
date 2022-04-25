FROM public.ecr.aws/docker/library/node:16-alpine as builder

WORKDIR /app

COPY ./package*.json ./

# Copy packages used
# None for now

COPY /backend/package*.json ./backend/
COPY /backend ./backend/

# RUN npm set timeout=100000
RUN npm install -w backend
RUN npm run generate -w backend
RUN npm run build -w backend

FROM public.ecr.aws/docker/library/node:16-alpine
# FROM builder

# Commented out due to tsoncifg not resolinvg paths
WORKDIR /app
ENV NODE_ENV=production

# Copy build packages.
COPY --from=builder /app/backend/build ./backend/build/
COPY --from=builder /app/backend/package*.json ./backend/
COPY --from=builder /app/backend/tsconfig.json ./backend/
# Possible replament
# COPY --from=builder ["/app/backend/tsconfig.json", "/app/backend/package*.json", "./backend/"]

COPY --from=builder /app/backend/src ./backend/src/

# For tsconfig paths
COPY --from=builder /app/node_modules ./node_modules/
COPY --from=builder /app/package*.json ./

RUN npm prune --production

EXPOSE 5000
WORKDIR /app/backend

CMD ["npm", "start"]