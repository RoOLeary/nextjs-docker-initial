up:
	docker run -p 3000:3000 nextjs-docker

down:
	docker stop nextjs-docker

build:
	docker build -t nextjs-docker .   
	@echo "If you get a 503 Service Unavailable error, the database might still be importing in the background. Please allow a few minutes for this process to complete."
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
