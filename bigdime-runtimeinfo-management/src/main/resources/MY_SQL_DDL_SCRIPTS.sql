-- Metadata TABLES CREATION SCRIPTS:

-- DROP ALL THE TABLES IF EXISTS

DROP TABLE IF EXISTS RUNTIME_PROPERTY;
DROP TABLE IF EXISTS RUNTIME_INFO;
-- DDL FOR METASEGMENT CREATE TABLE:

-- DDL FOR RUNTIME_INFO
CREATE TABLE `RUNTIME_INFO` (
  `RUNTIME_INFO_ID` int(64) NOT NULL AUTO_INCREMENT,
  `ADAPTOR_NAME` varchar(255) DEFAULT NULL,
  `ENTITY_NAME` varchar(255) DEFAULT NULL,
  `INPUT_DESCRIPTOR` varchar(255) DEFAULT NULL,
  `STATUS` varchar(255) DEFAULT NULL,
  `NUM_OF_ATTEMPTS` varchar(255) DEFAULT NULL, 
  `CREATED_AT` datetime DEFAULT NULL,
  `CREATED_BY` varchar(255) DEFAULT NULL, 
  `UPDATED_AT` datetime DEFAULT NULL,
  `UPDATED_BY` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`RUNTIME_INFO_ID`),
  UNIQUE KEY `UNIQUE` (`ADAPTOR_NAME`,`ENTITY_NAME`,`INPUT_DESCRIPTOR`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- DDL FOR RUNTIME_PROPERTY

CREATE TABLE `RUNTIME_PROPERTY` (
  `RUNTIME_PROPERTY_ID` int(64) NOT NULL AUTO_INCREMENT,
  `RUNTIME_INFO_ID` int(64) DEFAULT NULL,
  `PROPERTY_NAME` varchar(255) DEFAULT NULL,
  `PROPERTY_VALUE` VARCHAR(512) DEFAULT NULL,
  PRIMARY KEY (`RUNTIME_PROPERTY_ID`),
  KEY (`RUNTIME_INFO_ID`),
  CONSTRAINT `FK_RUNTIME_INFO_ID` FOREIGN KEY (`RUNTIME_INFO_ID`) REFERENCES `RUNTIME_INFO` (`RUNTIME_INFO_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
-- AUDIT TABLES INFO:

