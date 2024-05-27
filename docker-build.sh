#!/bin/bash
# Build the Docker image
docker build -t nginx-server .

# Login to Docker Hub using environment variables
docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD

# Check if the login was successful
if [ $? -eq 0 ]; then
  # Push the image to Docker Hub
  docker push $DOCKER_USERNAME/nginx-server

  # Check if the push was successful
  if [ $? -eq 0 ]; then
    # Print the pushed image details
    docker image inspect $DOCKER_USERNAME/nginx-server
  else
    echo "Failed to push the image to Docker Hub."
  fi
else
  echo "Failed to login to Docker Hub."
fi