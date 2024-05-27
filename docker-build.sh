#!/bin/bash

# Get the current commit SHA
COMMIT_SHA=$(git rev-parse HEAD)

# Build the Docker image
docker build -t ${DOCKER_REPO}:${COMMIT_SHA} -t ${DOCKER_REPO}:latest -f Dockerfile .

# Login to Docker Hub
docker login -u <username> -p <password>

# Push the Docker image
docker push ${DOCKER_REPO}:${COMMIT_SHA}
docker push ${DOCKER_REPO}:latest

# Print the pushed image details
docker image inspect ${DOCKER_REPO}:${COMMIT_SHA}
