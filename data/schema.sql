-- EZ Routines Schema

DROP SCHEMA IF EXISTS EZRoutines;
CREATE SCHEMA EZRoutines;
USE EZRoutines;

-- Table Structure For User

CREATE TABLE users (
	id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(45) NOT NULL,
	last_name VARCHAR(45) NOT NULL,
    CONSTRAINT pk_user PRIMARY KEY (ID)
);

-- Table Structure For Exercises

CREATE TABLE exercises (
	id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    exercise_name VARCHAR(256) NOT NULL,
    muscle_group VARCHAR (5) NOT NULL,
    sets SMALLINT NOT NULL,
    reps SMALLINT NOT NULL,
    
    CONSTRAINT pk_exercise_id PRIMARY KEY (id)
);


-- Table Structure For Exercises_in_Workouts

CREATE TABLE exercises_in_workouts (
	id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    workout_id SMALLINT UNSIGNED NOT NULL,
    exercise_id SMALLINT UNSIGNED NOT NULL,
    
    CONSTRAINT pk_id PRIMARY KEY (id)
);


-- Table Structure For Workout

CREATE TABLE workouts (
	id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id SMALLINT UNSIGNED NOT NULL,
    workout_id SMALLINT UNSIGNED NOT NULL,
    
    CONSTRAINT pk_id PRIMARY KEY (id)
);

ALTER TABLE workouts
	ADD INDEX workout_id_idx (workout_id);
    
-- Foreign Keys added below

ALTER TABLE exercises_in_workouts
	ADD CONSTRAINT fk_workout_id FOREIGN KEY (workout_id)
		REFERENCES workouts (workout_id);

ALTER TABLE exercises_in_workouts 
	ADD CONSTRAINT fk_exercise_id FOREIGN KEY (exercise_id)
		REFERENCES exercises (id);
        
ALTER TABLE workouts
	ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id)
		REFERENCES users (id);
