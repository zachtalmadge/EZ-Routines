# E-Z Routines

E-Z Routines is an application that allows users to create a custom workout routine with a variety of resistance exercises.


## Overview
Failing to plan is planning to fail. Many people often walk into the gym not knowing what it is they want to do for that particular day. There are so many free-weight movements, machines and equipment that make make the process of figuring out what to do first head-spinning. E-Z Routines takes the guess work out of all that by helping you have a workout routine at-the-ready when you walk through the front door.

## Thesis
For my Thesis Project, I chose to learn MySQL to use as the database for this application. I chose MySQL because because SQL in general is a more established, more popular database language. Seeing that MySQL and PostgreDB is used more than MongoDB further encouraged me to go down this road.

The feature I implemented were the use of tables in MySQL to structure the data in E-Z Routines. The benefits of this means that if the application were taken to scale then the 4 tables that were created would ensure data normalization. What this means is that no row in any table would be repeated. If this app were further developed, the tables would also allow for easy managment of mulitple users who each have multiple workouts. 

The schemas used in SQL ensure that data follows the same structure. For example, every exercise will have a name, muscle group, number of sets, and number of reps.

In addition, the use of the MySQL Workbench also make it easy to modify and add to the database. If this project were to be worked on with a number of developers, then the use of the the Workbench would make it easy to import/export data to the server.


## Technologies Used

  - <b>MySQL</b>
  - Express
  - React
  - Node
  - Semantic UI
  - Bootstrap for React

---

## Installation

1. Open a terminal in the <b>client</b> folder and run:
```sh
$ npm install
```

2. Open a terminal in the <b>server</b> folder and run:
```sh
$ npm install
```

3. Open up the ./data/schema.sql file in MySQL workbench and execute the query.

4. Then open ./data/data.sql file in MySQL workbench and execute the query.


4. Now, go back into the terminal that is in the <b>server</b> directory and run 
```sh
$ npm start
```

5. Finally, in the terminal that's located in the <b>client</b> directory run:
```sh
$ npm start
```

## Acknowledgment
Thank you to The Last Mile for providing me with the education, tools and resources to learn WDF and MERN. This has been an amazing journey from day 1.

## - Zachary Talmadge
>If programming is the ocean I feel like I've only dipped my toe in the water.