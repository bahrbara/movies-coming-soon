# Movies Coming Soon
API to show the movies coming soon. Full stack developer test made for ArcTouch.


## How this was structured

### Setting up your environment

```bash
# clone to your local machine
git clone https://github.com/bahrbara/movies-coming-soon.git

# step into local repo
cd movies-coming-soon
```
#### Configuration

Next we need to create `.env` file, which contains all the necessary
environment variables that application needs. You can create it by following
command (in folder where you cloned this project):

```bash
cp env.dist .env
```

Then open that file and make necessary changes to it. Note that this `.env` file is ignored on VCS.

#### Folder Structure

After cloning, your project should look like this:

```
movies-coming-soon/
  backend/
  frontend/
  docker-compose-prod.yml
  docker-compose.yml
  env.dist
  Makefile.sh
  README.md
```

At **backend** folder we have the "Movies Coming Soon" NodeJs Application.
At **frontend** folder we have the "Movies Coming Soon" frontend in Angular 7.

#### Commands

* at first time

```bash
$ make build
```
* Only start environment for first time

```bash
$ make up

```
* For day by day
```bash
# Start the backend and frontend
make start

#check if its ok
make state
```

##### Makefile

This project comes with `Makefile` configuration so that you can easily run
some generic commands via `make` command. Below is a list of main commands
supported, note that you can get this same list
with just running `make` command:

```bash
buid              Build docker images and setup all environment at first time
rebuild           Destroy all containers and recreate it
root              Connect to backend container shell as root user
shell             Connect to backend container shell
start             Start docker container
state             Show docker container status
stop              Stop running docker container
up                Up Docker container
logs              Show logs of all containers
ip                Show IP docker network exposed
```
