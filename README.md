# Nguyen Tuan Kha-intern-backend-test

This is my code test for Web Developer Intern application at Nexlab Technology - Building a website for Managing Stores


# Usage

- Clone code from this repository
- Open project folder in `VS Code`
- Open `New Terminal`
- Type: 
```c
cd ./Intern_Backend
```
```c
npm install
```
```c
npm start
```
### Create Tables and Insert data to Database
- Go to the directory `./src/app/config` and change the database properties to `<your database properties>`.
```c
development: {
      username: {your username},
      password: {your password},
      database: {your database name},
      host: 'localhost',
      port: 5432,
      dialect: 'postgres',
    },
```
- Open `New Terminal`
- Type the following command into the command prompt window.
```c
cd ./src/app
```
- Next,
```c
npx sequelize-cli db:drop #drop all table of your database   
```
```c
npx sequelize-cli db:migrate #create tables in folder 'migrations'
```
```c
npx sequelize-cli db:seed:all #insert available data to Database
```
# Technical:

- Back-end frameworks - NodeJS(ExpressJS) 
- PostgreSQL for database
- Sequelize for ORM and Migration

# Contributors

- Candidate: [NguyenTuanKha](https://github.com/TunKeyy)
