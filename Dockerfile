# Use the official Nginx base image
FROM python:3.9

# Set a working directory inside the container
WORKDIR /app

# Copy all files from the Dockerfile's directory to the container
COPY . .

# Install the required dependencies
RUN pip install -r requirements.txt

# Expose the default Nginx port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

# Set the working directory
WORKDIR /app

# Install the required dependencies
RUN pip install -r requirements.txt

# Expose the port
EXPOSE 5000

# Start the application
CMD ["python", "app.py"]