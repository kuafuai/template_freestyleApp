#!/bin/bash

# Get the current commit SHA
COMMIT_SHA=$(git rev-parse HEAD)

# Build Docker image
docker build -t nginx-server .

# Login to Docker Hub
docker login -u username -p password

# Push the image
docker push username/nginx-server

# Print pushed image details
docker image inspect username/nginx-server

# Login to Docker Hub
echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin

# Push the Docker image
docker push ${DOCKER_REPO}:${COMMIT_SHA}
docker push ${DOCKER_REPO}:latest

# Print pushed image details
docker image inspect ${DOCKER_REPO}:${COMMIT_SHA}

echo "kuafuai_docker_image_pushed:${DOCKER_REPO}:${COMMIT_SHA}"