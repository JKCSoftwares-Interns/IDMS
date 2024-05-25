# Running Backend

## This is quick setup

We're running `mariadb`. You may either locally install it or use `docker` for that.

### Docker way

# Installing image

```
docker pull mariadb
```

#### Running the image

```
docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=test --name idms -d mariadb
```

#### Opening `MariaDB`

```
docker exec -it idms mariadb -u root -ptest
```

> [!NOTE]
> for more information, [visit here](https://github.com/kinxyo/Docker-cheats)

--- 

### Local instance of `MariaDB`

(...)
