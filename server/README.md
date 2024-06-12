> [!NOTE]
> This structure may need revision

# Setup Backend

There are actually 2 versions of backend:

1. The server will boot but not initialize database, rather it will expose fake data as a json format, so the frontend devs could test their client-side without setting up database.

2. It will boot the database so the backend devs could test out the fully functioning app. How do I manage this?

## DATABASE

We're using `mariadb`. You may either locally install it or use `docker` for that.

### Docker way

#### Installing image

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
