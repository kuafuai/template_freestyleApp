#!/bin/bash

# Get the current commit SHA
COMMIT_SHA=$(git rev-parse HEAD)

# Build the Docker image
docker build -t ${DOCKER_REPO}:${COMMIT_SHA} -t ${DOCKER_REPO}:latest -f Dockerfile .

# Login to Docker Hub
echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin

# Push the Docker image
docker push ${DOCKER_REPO}:${COMMIT_SHA}
docker push ${DOCKER_REPO}:latest

echo "kuafuai_docker_image_pushed:${DOCKER_REPO}:${COMMIT_SHA}"
