INSERT INTO battles (name, location, attacker_king, defender_king, attacker_outcome, note) VALUES ('Battle of the Golden Tooth', 'Golden Tooth', 'Joffrey/Tommen Baratheon', 'Robb Stark', 'win');
INSERT INTO battles (name, location, attacker_king, defender_king, attacker_outcome, note) VALUES ('Battle at the Mummer''s Ford', 'Mummer''s Ford', 'Joffrey/Tommen Baratheon', 'Robb Stark', 'win');
INSERT INTO battles (name, location, attacker_king, defender_king, attacker_outcome, note) VALUES ('Battle of Riverrun', 'Riverrun', 'Joffrey/Tommen Baratheon', 'Robb Stark', 'win');
INSERT INTO parties (name, location, attacker_king, defender_king, attacker_outcome, note) VALUES ('Battle of the Fords', 'Red Fork', 'Joffrey/Tommen Baratheon', 'Robb Stark', 'loss');
INSERT INTO parties (name, location, attacker_king, defender_king, attacker_outcome, note) VALUES ('Battle of Winterfell', 'Winterfell', 'Joffrey/Tommen Baratheon', 'Robb Stark', 'win', 'Since House Bolton betrays the Starks for House Lannister, we code this battle as between these two houses. Greyjoy men, numbering only 20, don''t play a major part in the fighting and end up dying anyway.');

INSERT INTO deaths (name, allegiances) VALUES ('Robb Stark', 'House of Stark');
INSERT INTO deaths (name, allegiances) VALUES ('Joffrey', 'House of Lannister');

INSERT INTO predictions (name, isAlive) VALUES ('Robb Stark', 0);
INSERT INTO predictions (name, isAlive) VALUES ('Joffrey', 0);


