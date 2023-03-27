-- EZ Routines Data

USE EZRoutines;

INSERT INTO users (id, first_name, last_name)
VALUES (null, 'Zach', 'Talmadge');

INSERT INTO workouts (id, user_id, workout_id)
VALUES (null, 1, 1);

INSERT INTO exercises (id, exercise_name, muscle_group, sets, reps)
VALUES 
(null, 'Deadlifts', 'back', 5, 8),
(null, 'Pullups', 'back', 5, 10),
(null, 'Chinups', 'back', 4, 8),
(null, 'Barbell Rows', 'back', 5, 10),
(null, 'Dumbbell Rows', 'back', 4, 12),
(null, 'T-bar Rows', 'back', 3, 8),
(null, 'Pulldowns', 'back', 5, 12),
(null, 'Sumo Deadlifts', 'back', 4, 10),
(null, 'Hyperextensions', 'back', 3, 10),
(null, 'Pullovers', 'back', 4, 10),
(null, 'Cable Rows', 'back', 3, 8),
(null, 'Machine Rows', 'back', 4, 12),

(null, 'Bench Press', 'chest', 5, 10),
(null, 'Incline bench Press', 'chest', 4, 8),
(null, 'Dumbbell bench Press', 'chest', 4, 12),
(null, 'Incline dummbbell Press', 'chest', 5, 10),
(null, 'Dumbbell flyes', 'chest', 4, 14),
(null, 'Cable flyes', 'chest', 3, 12),
(null, 'Machine flyes', 'chest', 4, 10),
(null, 'Machine Press', 'chest', 5, 12),
(null, 'Dips', 'chest', 4, 10),
(null, 'Pullovers', 'chest', 4, 8),
(null, 'Machine Pullovers', 'chest', 3, 10),
(null, 'Machine Incline Press', 'chest', 4, 12),

(null, 'Back Squat', 'legs', 5, 10),
(null, 'Front Squat', 'legs', 5, 10),
(null, 'Smith Machine Squat', 'legs', 4, 10),
(null, 'Pendulum Machine Squat', 'legs', 5, 8),
(null, 'Hack Squat', 'legs', 4, 12),
(null, 'Leg Press', 'legs', 5, 12),
(null, 'Leg extensions', 'legs', 4, 12),
(null, 'Lunges', 'legs', 5, 10),
(null, 'Dumbbell Calf Raises', 'legs', 4, 12),
(null, 'Machine Calf Raises', 'legs', 5, 15),
(null, 'romanian Deadlifts', 'legs', 4, 8),
(null, 'bulgarian Squats', 'legs', 4, 8),

(null, 'Standing Military Press', 'shldr', 5, 10),
(null, 'Seated Military Press', 'shldr', 5, 10),
(null, 'Dumbbell Overhead Press', 'shldr', 4, 10),
(null, 'Machine Shoulder Press', 'shldr', 5, 8),
(null, 'Dumbbell Front Raises', 'shldr', 4, 12),
(null, 'Dumbbell Side Raises', 'shldr', 5, 12),
(null, 'Reverse Flyes', 'shldr', 4, 12),
(null, 'Upright Rows', 'shldr', 5, 10),
(null, 'Face Pulls', 'shldr', 4, 12),
(null, 'Barbell Shrugs', 'shldr', 5, 15),
(null, 'Dumbbell Shrugs', 'shldr', 4, 8),
(null, 'Cable Raises', 'shldr', 4, 8),

(null, 'Close Grip Bench Press', 'arms', 4, 6),
(null, 'Skull Crushers', 'arms', 5, 12),
(null, 'Overhead Extensions', 'arms', 4, 10),
(null, 'Cable Extensions', 'arms', 5, 12),
(null, 'Weighted Close Grip Dips', 'arms', 4, 10),
(null, 'Kickbacks', 'arms', 5, 12),
(null, 'Barbell curls', 'arms', 4, 12),
(null, 'Dumbbell curls', 'arms', 5, 10),
(null, 'Concentration curls', 'arms', 4, 12),
(null, 'Preacher curls', 'arms', 5, 15),
(null, 'EZ-bar Curls', 'arms', 4, 8),
(null, 'Cable Curls', 'arms', 4, 8)
;