CREATE DATABASE guestbook;

USE guestbook;
DROP TABLE IF EXISTS guestbook;


CREATE TABLE guestbook (
	
    id INT PRIMARY KEY AUTO_INCREMENT,
    fname VARCHAR(255),
    lname VARCHAR(255),
    jobtitle VARCHAR(255),
    company VARCHAR(255),
    linkedin VARCHAR(255),
    email VARCHAR(255),
    meeting VARCHAR(255),
    message VARCHAR(1999),
    mailinglist VARCHAR(255),
    entryData TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
);

INSERT INTO guestbook (
    fname,
    lname,
    jobtitle,
    company,
    linkedin,
    email,
    meeting,
    message,
    mailinglist
)
VALUES (
    'John',
    'Doe',
    'Software Engineer',
    'Tech Solutions Inc.',
    'https://linkedin.com/in/johndoe',
    'johndoe@example.com',
    'Conference 2024',
    'Looking forward to collaborating with your team!',
    'on'
);


SELECT * FROM guestbook;