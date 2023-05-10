DROP TABLE IF EXISTS users, login_credentials;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  create_datetime TIMESTAMP NOT NULL
);


INSERT INTO users (username, password, create_datetime) VALUES ('johndoe', 'password123', NOW());
INSERT INTO users (username, password, create_datetime) VALUES ('janedoe', 'password456', NOW());
INSERT INTO users (username, password, create_datetime) VALUES ('bobsmith', 'password789', NOW());