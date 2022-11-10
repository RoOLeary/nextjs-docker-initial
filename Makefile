up:
	docker run -p 3000:3000 nextjs-docker
	@echo ""
	@echo "You can access the project at: https://$(host)"
	@echo "DB Admin: https://$(db_admin_host)"
	@echo ""

build:
	docker build -t nextjs-docker .   
	# @echo "If you get a 503 Service Unavailable error, the database might still be importing in the background. Please allow a few minutes for this process to complete."
	@echo ""

scan:
	docker scan

down:
	docker-compose down --remove-orphans

clean:
	docker-compose rm -vsf
	docker-compose down -v --remove-orphans

restart:
	docker-compose down --remove-orphans
	docker-compose up -d

sync:
	docker exec -it $(container_id) ./craft project-config/apply

rebuildconfig:
	docker exec -it $(container_id) ./craft project-config/rebuild

reindex:
	docker exec -it $(container_id) ./craft resave/entries --update-search-index

sync-db:
	docker-compose down --remove-orphans
	docker volume rm website_dbdata
	docker-compose up -d
	@echo ""
	@echo "You can access the project at: https://$(host)"
	@echo "DB Admin: https://$(db_admin_host)"
	@echo "If you get a 503 Service Unavailable error, the database might still be importing in the background. Please allow a few minutes for this process to complete."
	@echo ""

gc:
	docker exec -it $(container_id) ./craft gc

composer-install:
	docker exec -it $(container_id) composer install

composer-update:
	docker exec -it $(container_id) composer update

npm-install:
	docker exec -it $(container_id) npm install

npm-dev:
	docker exec -it $(container_id) npm run dev

npm-watch:
	docker exec -it $(container_id) npm run watch

npm-prod:
	docker exec -it $(container_id) npm run prod

jumpin:
	docker exec -it $(container_id) bash

logs:
	docker-compose logs -f
