# docker-build.sh
#!/bin/bash
# Build Docker image
docker build -t nginx-server .

# Login to Docker Hub
docker login -u username -p password

# Push the image
docker push username/nginx-server

# Print pushed image details
docker image inspect username/nginx-server
