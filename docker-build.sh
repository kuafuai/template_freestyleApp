#!/bin/bash
# docker-build.sh
# This file is responsible for building a Docker image, logging in to Docker Hub, pushing the image, and printing the pushed image details.

# Build Docker image
docker build -t nginx-server .

# Login to Docker Hub
docker login -u username -p password

# Push the image to Docker Hub
docker push username/nginx-server

# Print pushed image details
docker image inspect username/nginx-server
