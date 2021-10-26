## ES
es-up:
	docker-compose -f docker-compose.es.yml up && \
	make logs-es

es-logs:
	docker-compose -f docker-compose.es.yml logs -f

es-down:
	docker-compose -f docker-compose.es.yml down --remove-orphans

es-destroy:
	docker-compose -f docker-compose.es.yml down --remove-orphans --volumes

## Full Indyscan + ES
logs:
	docker-compose -f docker-compose.yml -f docker-compose.es.yml logs -f

up:
	docker-compose -f docker-compose.yml -f docker-compose.es.yml up && \
	make logs

down:
	docker-compose -f docker-compose.yml -f docker-compose.es.yml down --remove-orphans

destroy:
	docker-compose -f docker-compose.yml -f docker-compose.es.yml down --remove-orphans --volumes

new:
	make destroy && \
	docker-compose -f docker-compose.yml -f docker-compose.es.yml up -d && \
	make logs

## IDunion

idunion:
	make idunion_new

idunion_new:
	make idunion_destroy && \
	docker-compose -f docker-compose.idunion.yml up -d && \
	make idunion_npm_audit_fix && \
	make idunion_logs

idunion_npm_audit_fix:
	sh npm_audit_fix.idunion.sh

idunion_up:
	docker-compose -f docker-compose.idunion.yml up && \
        make idunion_logs

idunion_down:
	docker-compose -f docker-compose.idunion.yml  down --remove-orphans

idunion_logs:
	docker-compose -f docker-compose.idunion.yml logs 

idunion_destroy:
	docker-compose -f docker-compose.idunion.yml down --remove-orphans --volumes


