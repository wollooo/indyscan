# Indyscan Blockchain Explorer for IDUnion Testnet 

Forked from https://github.com/Patrik-Stas/indyscan  


Configurations for IDUnion are found in the idunion*.json files and genesis files in the start directory.  



## Run:
$ cd start/  
$ make idunion_up  
  
Alternatively:  
$ cd start
$ docker-compose -f docker-compose.idunion.yml up -d  

## Clean existing data and start new:  
$ cd start  
$ make idunion_new

## Scan and fix NodeJS vulnerabities on each VM:  
$ cd start  
$ make idunion_npm_audit_fix  


 
