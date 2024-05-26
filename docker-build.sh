#!/bin/bash
# The purpose of this file is to build a Docker image, login to Docker Hub, push the image, and print the pushed image details.

# Build the Docker image
docker build -t color-matching-game .

# Login to Docker Hub
docker login

# Push the image to Docker Hub
docker push color-matching-game

# Print the pushed image details
docker image inspect color-matching-game
