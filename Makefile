.PHONY: help
help: ## Show this help
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/:.*##/:##/' | column -t -s '##'

.PHONY: all
all: api frontend ## Start everything for project

.PHONY: api
api: db-up ## Run the API
	# https://github.com/gobuffalo/buffalo-docker/issues/4

.PHONY: frontend
frontend: ## Run the FE
	@quasar dev app/

.PHONY: db-up
db-up: ## Starts the DB
	@docker-compose up -d database

.PHONY: db-cli
db-cli: ## Connect to the DB
	@docker-compose exec database mysql -uroot -ptesting

.PHONY: adminer
adminer: ## Starts adminer container

.PHONY: clean
clean: ## Clean local environment
	@docker-compose down -v --remove-orphans
