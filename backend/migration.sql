DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  fullname TEXT,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  create_datetime TIMESTAMP NOT NULL
);

INSERT INTO users (fullname, email, password, create_datetime) 
VALUES ('John Doe', 'john.doe@example.com', 'password123', CURRENT_TIMESTAMP);
INSERT INTO users (fullname, email, password, create_datetime) 
VALUES ('Jane Smith', 'jane.smith@example.com', 'password456', '2023-05-11 10:30:00');
