#!/bin/bash
# The purpose of the file is to build a Docker image, login to Docker Hub,
# push the image, and print the pushed image details.

# Build Docker image
docker build -t myimage .

# Login to Docker Hub
docker login -u username -p password

# Push the image
docker push myimage

# Print pushed image details
docker image inspect myimage
