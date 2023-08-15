#!/bin/bash

# Get the current commit SHA
COMMIT_SHA=$(git rev-parse HEAD)

# Build the Docker image
docker build -t kuafuai/template-freestyleapp:${COMMIT_SHA} -t your-docker-username/nginx-image:latest -f Dockerfile .

# Login to Docker Hub
echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin

# Push the Docker image
docker push kuafuai/template-freestyleapp:${COMMIT_SHA}
docker push kuafuai/template-freestyleapp:latest
