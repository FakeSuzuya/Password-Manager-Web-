-- Création de la table users
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion du compte administrateur
INSERT INTO users (name, email, password)
VALUES ('admin', 'admin@example.com', 'admin'); -- Remplace 'admin_password' par un mot de passe sécurisé, et envisage l'utilisation de hashage pour les mots de passe
