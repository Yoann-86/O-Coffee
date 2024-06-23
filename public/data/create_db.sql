-- Coffee

DROP TABLE IF EXISTS "coffee";

CREATE TABLE "coffee"(
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(64) NOT NULL,
  "description" VARCHAR(255),
  "reference" INT NOT NULL,
  "origin" VARCHAR(64) NOT NULL,
  "price" INT NOT NULL,
  "characteristic" VARCHAR(64) NOT NULL,
  "availability" BOOLEAN NOT NULL,
  "alt_txt" VARCHAR(255)
);

INSERT INTO "coffee"("name", "description", "reference", "origin", "price", "characteristic", "availability", "alt_txt") 
VALUES
('Espresso', 'Café fort et concentré préparé en faisant passer de l''eau chaude à travers du café finement moulu.', 100955890, 'Italie', 20.90, 'Corsé', TRUE, 'Un sac de toile contenant des grains de café'),
('Columbian', 'Café moyennement corsé avec une acidité vive et une saveur riche.', 100955894, 'Colombie', 18.75, 'Acide', TRUE, 'Des grains de cafés frais sur la branche'),
('Ethiopian Yirgacheffe', 'Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.', 105589090, 'Éthiopie', 22.50, 'Fruité', TRUE, 'Des mains tenant des feves de cacao'),
('Brazilian Santos', 'Café doux et lisse avec un profil de saveur de noisette.', 134009550, 'Brésil', 17.80, 'Doux', TRUE, 'Un paquet de café en grains ouvert'),
('Guatemalan Antigua', 'Café corsé avec des nuances chocolatées et une pointe d''épice.', 256505890, 'Guatemala', 21.25, 'Corsé', TRUE, 'Des grains de café'),
('Kenyan AA', 'Café complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.', 295432730, 'Kenya', 23.70, 'Acide', TRUE, 'Un sac de café en grains ouvert'),
('Sumatra Mandheling', 'Café profond et terreux avec un corps lourd et une faible acidité.', 302932754, 'Indonésie', 19.95, 'Corsé', TRUE, 'Des grains de café en cours de toréfaction'),
('Costa Rican Tarrazu', 'Café vif et net avec une finition propre et une acidité vive.', 327302954, 'Costa Rica', 24.50, 'Acide', TRUE, 'Des grains de café en gros plan'),
('Vietnamese Robusta', 'Café audacieux et fort avec une saveur robuste distinctive.', 549549090, 'Vietnam', 16.75, 'Épicé', TRUE, 'Un percolateur contenant des grains de café'),
('Tanzanian Peaberry', 'Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.', 582954954, 'Tanzanie', 26.80, 'Fruité', TRUE, 'Une pelle contenant des grains de café'),
('Jamaican Blue Mountain', 'Reconnu pour sa saveur douce, son acidité vive et son absence d''amertume.', 589100954, 'Jamaïque', 39.25, 'Doux', TRUE, 'Des grains de cafés frais sur leur branche'),
('Rwandan Bourbon', 'Café avec des notes florales prononcées, une acidité vive et un corps moyen.', 650753915, 'Rwanda', 21.90, 'Fruité', TRUE, 'Un sac plein de café en grains'),
('Panamanian Geisha', 'Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.', 795501340, 'Panama', 42.00, 'Fruité', TRUE, 'Une tasse remplie de café en grain'),
('Peruvian Arabica', 'Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.', 954589100, 'Pérou', 19.40, 'Chocolaté', FALSE, 'Du grains de café fraichement toréfié'),
('Hawaiian Kona', 'Café rare au goût riche, une acidité douce et des nuances subtiles.', 958090105, 'Hawaï', 55.75, 'Doux', FALSE, 'Du grain de café sur un tas de café moulu'),
('Nicaraguan Maragogipe', 'Café avec des notes de fruits, une acidité vive et un corps plein.', 691550753, 'Nicaragua', 28.60, 'Fruité', FALSE, 'Une tasse contenant des grains de café');

-- Contact

DROP TABLE IF EXISTS "contact";

CREATE TABLE "contact"(
  "id" SERIAL PRIMARY KEY,
  "firstname" VARCHAR(64) NOT NULL,
  "lastname" VARCHAR(64) NOT NULL,
  "email" VARCHAR(64) NOT NULL,
  "subject" VARCHAR(64),
  "message" VARCHAR(255) NOT NULL
);


-- Administration

DROP TABLE IF EXISTS "administration";

CREATE TABLE "administration"(
  "id" SERIAL PRIMARY KEY,
  "user_name" VARCHAR(64) NOT NULL,
  "password" VARCHAR(64) NOT NULL,
  "email" VARCHAR(64) NOT NULL,
  "role" VARCHAR(64) NOT NULL,
  "log_authorisation" VARCHAR(64) NOT NULL
);

INSERT INTO "administration"("user_name", "password", "email", "role", "log_authorisation")
VALUES 
('pepper', 'pepper_brothers', 'pepper-brothers@gmail.com', 'super_user', 'true');