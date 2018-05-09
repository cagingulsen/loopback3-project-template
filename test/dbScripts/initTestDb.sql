USE YOUR_DB_NAME;

IF OBJECT_ID('dbo.smokeTable', 'U') IS NOT NULL
DROP TABLE dbo.smokeTable;

CREATE TABLE smokeTable (
    smokeID int PRIMARY KEY,
    smokeName varchar(255)
);

INSERT INTO dbo.smokeTable (smokeID, smokeName)
VALUES (1, 'Smoke1'), (32, 'Smoke32');
