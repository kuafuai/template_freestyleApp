#!/bin/bash

docker build -t power-company-navigation .

docker login

docker push power-company-navigation

docker image inspect power-company-navigation
