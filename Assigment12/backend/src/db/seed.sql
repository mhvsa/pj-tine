
CREATE TABLE IF NOT EXISTS tinApp.STUDENT (
	ID INT NOT NULL AUTO_INCREMENT,
	FIRST_NAME varchar(100) NOT NULL,
	LAST_NAME varchar(100) NOT NULL,
	CONSTRAINT STUDENT_PK PRIMARY KEY (ID)
)

ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_unicode_ci
AUTO_INCREMENT=1;