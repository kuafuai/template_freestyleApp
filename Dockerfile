# The purpose of the Dockerfile is to build a Docker image for an Nginx server
# and copy all files to the container. It also exposes port 80 and starts the Nginx
# server.

# Base image
FROM nginx

# Copy files to container
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
