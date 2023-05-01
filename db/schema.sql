CREATE TABLE players(
	player_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	player_name VARCHAR(30) NOT NULL,
	player_country  VARCHAR(50) NOT NULL
	player_club VARCHAR(50)
	player_position ENUM('CF','SS','LW','RW','CAM','LMF','CM','RMF','CDM','LB','RB','CB','GK') NOT NULL
);