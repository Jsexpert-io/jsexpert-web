# Use an Alpine-based image
FROM node:20-bullseye

WORKDIR /app

# Install dependencies
# RUN apk update && apk upgrade && \
#     apk add bash git openssh-client make gcc g++ python3 openssl
RUN ls -la
# Copy necessary files

COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies including Prisma Client
RUN npm install -g nodemon npm-run-all
RUN npm install -f

# Generate Prisma Client
RUN npx prisma generate

# Copy the rest of the application
COPY . .
RUN npm run build
EXPOSE 3000

CMD ["npm", "run", "start"]
