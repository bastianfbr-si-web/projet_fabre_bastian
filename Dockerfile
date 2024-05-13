FROM node:20 as builder-frontend

# Set working directory
WORKDIR /app

# Copy project folder
COPY frontend /app

# Build Angular project
RUN npm i && npm run build

FROM node:20 as builder-backend

# Set working directory
WORKDIR /app

# Copy project folder
COPY backend /app

# Build backend project
RUN npm i && npm run build

FROM node:20

RUN apt-get update && apt-get install -y supervisor nginx
RUN mkdir -p /var/log/supervisor
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Copy projects
COPY --from=builder-frontend /app/dist/tp_2/browser/ /var/www/html
COPY --from=builder-backend /app/build/ /app/backend/dist

# Set working directory
WORKDIR /app/backend


# Copy nginx configuration
COPY docker/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["/usr/bin/supervisord"]