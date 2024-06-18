CREATE TABLE IF NOT EXISTS users (
      userId INT AUTO_INCREMENT PRIMARY KEY,
      userName VARCHAR(255),
      name VARCHAR(255),
      mobile VARCHAR(255),
      email VARCHAR(255),
      role VARCHAR(255),
      password VARCHAR(255),
      status VARCHAR(255),
      dateAdded TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      addedBy VARCHAR(255),
      lastEditedDate TIMESTAMP,
      lastEditedBy VARCHAR(255)
    );
