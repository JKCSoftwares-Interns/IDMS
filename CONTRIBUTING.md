# Contributing Guidelines and Getting started with it

(_for memebers only_)

## Guidelines

- Always make pull request for assigned issues or task.
- Inform on **Slack** whenever you make changes.

---

## Setup, Run & Contribute

- `master` branch is for pushing **release version**. This branch is to be considered stable.
- `dev` branch is for pushing **pre-release final changes**. This branch is to be considered unstable.

### Setup

#### Clone the project

Download the project files.

```bash
git clone https://github.com/JKCSoftwares-Interns/IDMS.git
```

Navigate into the workfolder.

```bash
cd IDMS
```

#### Branching

Since, we won't be working in `master` branch, so will now gear towards `dev` branch as it contains the lastest finalized developmental changes.

Create a new branch called `dev`.

```bash
git branch dev
```

Switch to `dev` branch.

```bash
git checkout dev
```

Sync the local `dev` branch to the repository `dev` branch.

```bash
git pull origin dev
```

#### Setup DB

We're using `MySQL`. You may either locally install it or use `docker` for that. No hosted DB as of now.

##### Installing image

```
docker pull MySQL
```

##### Running the image

```
docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=test --name idms -d mysql
```

##### Opening `MySQL`

```
docker exec -it idms mysql -u root -ptest
```

> [!NOTE]
> for more information, [visit here](https://github.com/kinxyo/Docker-cheats)

#### Setup Client & Server

Make sure you have the database setup.<br>
Preferably, split the terminal at this point; for **client** and **server**.

To interfere with client-side: `cd client`.
To interfere with server-side: `cd server`.

Create `.env` file with the following content:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=test
DB_PORT=3306
DB_NAME=idms
```

> [!IMPORTANT]
> Contact someone from the team to inform you the real values (assuming an instance is hosted) as this will set it up on your localhost.

Run the following commands in each of them:

```bash
npm i
```

```bash
npm run dev
```

### Contribution

commit your changes as usual.

```bash
git add .
git commit -m "<describe your changes>"
```

be sure to push it in your respective feature branch.

```bash
git push origin <feature_branch>
```
