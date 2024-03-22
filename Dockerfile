# Use the official Nginx base image
FROM nginx:latest

# Set a working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy all files from the Dockerfile's directory to the container
COPY . .

# Set the working directory in the container
WORKDIR /app

# Copy the script and requirements.txt to the working directory
COPY main.py .
COPY requirements.txt .

# Install the required libraries
RUN pip install --no-cache-dir -r requirements.txt

# Expose the default Nginx port
EXPOSE 80

# Run the script when the container starts
CMD ["python", "main.py"]
