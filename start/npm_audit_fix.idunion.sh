
# this scripts executes 'npm audit fix' on all the docker VMs

  docker-compose -f docker-compose.idunion.yml  start

  echo "************************ Running npm audit fix in  Docker Images: indyscan-api, indyscan-daemon indyscan-webapp  ***********************"
  docker-compose -f docker-compose.idunion.yml  exec indyscan-api npm update
  docker-compose -f docker-compose.idunion.yml  exec indyscan-api npm audit fix

  docker-compose -f docker-compose.idunion.yml  exec indyscan-daemon npm update
  docker-compose -f docker-compose.idunion.yml  exec indyscan-daemon npm audit fix

  docker-compose -f docker-compose.idunion.yml  exec indyscan-daemon npm-ui update
  docker-compose -f docker-compose.idunion.yml  exec indyscan-daemon npm-ui audit fix

  docker-compose -f docker-compose.idunion.yml  exec indyscan-webapp npm update
  docker-compose -f docker-compose.idunion.yml  exec indyscan-webapp npm audit fix

  docker-compose -f docker-compose.idunion.yml  exec indyscan-api npm audit
  docker-compose -f docker-compose.idunion.yml  exec indyscan-daemon npm audit
  docker-compose -f docker-compose.idunion.yml  exec indyscan-daemon-ui npm audit
  docker-compose -f docker-compose.idunion.yml  exec indyscan-webapp npm audit
