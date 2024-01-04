# Use the official Nginx base image
FROM nginx:latest

# Set a working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy index.html to the working directory
COPY index.html /usr/share/nginx/html

# Copy css/semantic.min.css to the working directory
COPY css/semantic.min.css /usr/share/nginx/html/css/semantic.min.css

# Copy js/semantic.min.js to the working directory
COPY js/semantic.min.js /usr/share/nginx/html/js/semantic.min.js

# Expose the default Nginx port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]