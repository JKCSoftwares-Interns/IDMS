# Running Backend

## This is quick setup

We're running `mariadb`. You may either locally install it or use `docker` for that.

### Docker way

installing image
```
docker pull mariadb
```

starting the database
```
docker run --detach --name idms --env MARIADB_ROOT_PASSWORD=root mariadb:latest
```

> [!NOTE]
> for more information, [visit here](https://hub.docker.com/_/mariadb)
