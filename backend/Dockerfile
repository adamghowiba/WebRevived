FROM public.ecr.aws/docker/library/node:16-alpine
EXPOSE 5000

WORKDIR /usr/src/app

COPY package*.json ./

COPY prisma ./prisma/

RUN apk add --update --no-cache curl py-pip

RUN npm set timeout=100000
RUN npm install
RUN npx prisma generate

COPY . .

RUN npm run build
# COPY .env ./build/


CMD ["npm", "start"]