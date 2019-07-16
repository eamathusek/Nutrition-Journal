CREATE TABLE workout
(
    exercise VARCHAR(1500) NOT NULL PRIMARY KEY
);

CREATE TABLE meal
(
    nutrition VARCHAR(1500) NOT NULL PRIMARY KEY
);

CREATE TABLE journal
(
    note VARCHAR(1500) NOT NULL PRIMARY KEY,
    nutrition VARCHAR(1500) NOT NULL
);

INSERT INTO journal(note)
    VALUES('This is my first entry');

INSERT INTO journal(nutrition)
    VALUES('This is my first entry');