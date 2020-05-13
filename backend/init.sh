#!/bin/bash

migrate_db() {
  while true
  do
    rsync -avh /data/db/* /data/mapped-db
    sleep 5
  done
}

migrate_db &

#Execute a command
mongod --smallfiles --logpath=/dev/null --verbose &

#Wait
wait $!