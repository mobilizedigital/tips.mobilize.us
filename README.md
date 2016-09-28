# Mobilize

Mobilize Digital, LLC website.

## Get started

### Create directory.

```bash
mkdir www.mobilize.us
cd www.mobilize.us
```

### Initialize Git

```bash
git init
git remote add origin git@github.com:mobilizedigital/www.mobilize.us.git
```

### Pull in repository codebase

```bash
git pull origin master
```

### Install libraries

```bash
npm install
bower install
```

### Buid assets and listen

```bash
gulp build
gulp
```

### Create MAMP symlink

```bash
cd /Applications/MAMP/htdocs/
ln -s ~/Development/www.mobilize.us/ www.mobilize.us
```

### Run
```bash
open http://localhost:8888/www.mobilize.us/
```
