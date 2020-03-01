ARGS = $(filter-out $@,$(MAKECMDGOALS))
MAKEFLAGS += --silent

ifndef APPLICATION_ENV
	include .env
endif

.DEFAULT_GOAL := help
.PHONY: help
help:
	@grep -E '^[a-zA-Z-]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "[32m%-17s[0m %s\n", $$1, $$2}'

###> Docker machine states ###
build: ## Build Docker containers images
	docker-compose build

up: ## Up Docker container
	docker-compose up -d

start: ## Start docker container
	docker-compose start

stop: ## Stop running docker container
	docker-compose stop

state: ## Show docker container status
	docker-compose ps

rebuild: ## Destroy all containers and recreate it
	docker-compose stop
	docker-compose pull
	docker-compose rm --force api
	docker-compose build --no-cache --pull
	docker-compose up -d --force-recreate

bash: shell

shell: ## Connect to application container shell
	docker-compose exec api /bin/bash

root: ## Connect to application container shell as root user
	docker-compose exec --user root api /bin/bash

ip: ## Show public ip address of container
	docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' api

logs: ## Starts a log server that displays logs in real time
	docker-compose logs --tail 100 --follow ${ARGS}
###< Docker machine states ###

#############################
# Argument fix workaround
#############################
%:
@:
