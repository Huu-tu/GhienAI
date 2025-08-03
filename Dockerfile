# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files first (để cache hiệu quả)
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# Copy toàn bộ source code
COPY . .

# Build Vite app (Vite sẽ tạo ra thư mục dist/)
RUN yarn build

# Production stage
FROM nginx:alpine

# Copy Vite dist folder sang nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
