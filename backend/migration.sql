DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  fullname TEXT,
  email VARCHAR NOT NULL,
  password VARCHAR(50) NOT NULL,
  create_datetime TIMESTAMP NOT NULL
);

INSERT INTO users (fullname, email, password, create_datetime) 
VALUES ('John Doe', 'johndoe@example.com', 'password123', NOW());
INSERT INTO users (fullname, email, password,create_datetime) 
VALUES ('Jane Doe', 'janedoe@example.com', 'password456', NOW());
INSERT INTO users (fullname, email, password,create_datetime) 
VALUES ('Bob Smith', 'bobsmith@example.com', 'password789', NOW());
