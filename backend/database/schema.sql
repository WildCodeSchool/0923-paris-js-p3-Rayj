-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (arm64)
--
-- Host: localhost    Database: rayj
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Candidates`
--

DROP TABLE IF EXISTS `Candidates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Candidates` (
  `Users_idUsers` int NOT NULL,
  `Offers_Id_offers` int NOT NULL,
  `Status` varchar(80) NOT NULL,
  PRIMARY KEY (`Users_idUsers`,`Offers_Id_offers`),
  KEY `fk_Users_has_Offers_Offers1_idx` (`Offers_Id_offers`),
  KEY `fk_Users_has_Offers_Users1_idx` (`Users_idUsers`),
  CONSTRAINT `fk_Users_has_Offers_Offers1` FOREIGN KEY (`Offers_Id_offers`) REFERENCES `Offers` (`id_Offers`) ON DELETE CASCADE,
  CONSTRAINT `fk_Users_has_Offers_Users1` FOREIGN KEY (`Users_idUsers`) REFERENCES `Users` (`id_Users`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Candidates`
--

LOCK TABLES `Candidates` WRITE;
/*!40000 ALTER TABLE `Candidates` DISABLE KEYS */;
/*!40000 ALTER TABLE `Candidates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Categories`
--

DROP TABLE IF EXISTS `Categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Categories` (
  `id_Categories` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  PRIMARY KEY (`id_Categories`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categories`
--

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */;
INSERT INTO `Categories` VALUES (1,'Developpement'),(2,'Data'),(3,'Secretariat'),(4,'SSIAP'),(5,'Agent Sécurité');
/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Favorites`
--

DROP TABLE IF EXISTS `Favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Favorites` (
  `Users_idUsers` int NOT NULL,
  `Offers_Id_offers` int NOT NULL,
  PRIMARY KEY (`Users_idUsers`,`Offers_Id_offers`),
  KEY `fk_Users_has_Offers_Offers2_idx` (`Offers_Id_offers`),
  KEY `fk_Users_has_Offers_Users2_idx` (`Users_idUsers`),
  CONSTRAINT `fk_Users_has_Offers_Offers2` FOREIGN KEY (`Offers_Id_offers`) REFERENCES `Offers` (`id_Offers`) ON DELETE CASCADE,
  CONSTRAINT `fk_Users_has_Offers_Users2` FOREIGN KEY (`Users_idUsers`) REFERENCES `Users` (`id_Users`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Favorites`
--

LOCK TABLES `Favorites` WRITE;
/*!40000 ALTER TABLE `Favorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `Favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Hardskills`
--

DROP TABLE IF EXISTS `Hardskills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Hardskills` (
  `id_Hardskills` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  PRIMARY KEY (`id_Hardskills`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Hardskills`
--

LOCK TABLES `Hardskills` WRITE;
/*!40000 ALTER TABLE `Hardskills` DISABLE KEYS */;
INSERT INTO `Hardskills` VALUES (1,'JS'),(2,'REACT'),(3,'HTML'),(4,'CSS'),(5,'NodeJS'),(6,'MySQL'),(7,'Python'),(8,'Connaissances juridiques '),(9,'Génie logiciel'),(10,'Développement d’APIs'),(11,'ElasticSearch'),(12,'Redis'),(13,'PGSQL'),(14,'VueJS'),(15,'Piloter un projet'),(16,'Établir un diagnostic'),(17,'Sens de l’analyse'),(18,'Qualité rédactionnelle');
/*!40000 ALTER TABLE `Hardskills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Hardskills_Offers`
--

DROP TABLE IF EXISTS `Hardskills_Offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Hardskills_Offers` (
  `Hardskills_id_Hardskills` int NOT NULL,
  `Offers_Id_offers` int NOT NULL,
  PRIMARY KEY (`Hardskills_id_Hardskills`,`Offers_Id_offers`),
  KEY `fk_Hardskills_has_Offers_Offers1_idx` (`Offers_Id_offers`),
  KEY `fk_Hardskills_has_Offers_Hardskills1_idx` (`Hardskills_id_Hardskills`),
  CONSTRAINT `fk_Hardskills_has_Offers_Hardskills1` FOREIGN KEY (`Hardskills_id_Hardskills`) REFERENCES `Hardskills` (`id_Hardskills`) ON DELETE CASCADE,
  CONSTRAINT `fk_Hardskills_has_Offers_Offers1` FOREIGN KEY (`Offers_Id_offers`) REFERENCES `Offers` (`id_Offers`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Hardskills_Offers`
--

LOCK TABLES `Hardskills_Offers` WRITE;
/*!40000 ALTER TABLE `Hardskills_Offers` DISABLE KEYS */;
INSERT INTO `Hardskills_Offers` VALUES (2,10),(3,10),(4,10),(2,11),(4,11),(5,11),(7,11),(16,22),(18,22);
/*!40000 ALTER TABLE `Hardskills_Offers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Offers`
--

DROP TABLE IF EXISTS `Offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Offers` (
  `id_Offers` int NOT NULL AUTO_INCREMENT,
  `Date_of_publication` datetime DEFAULT CURRENT_TIMESTAMP,
  `Post_title` varchar(80) NOT NULL,
  `Description` text NOT NULL,
  `Training` tinyint DEFAULT NULL,
  `Level` varchar(45) DEFAULT NULL,
  `Domaine` varchar(85) NOT NULL,
  `Location` varchar(255) NOT NULL,
  `Users_idUsers` int NOT NULL,
  `Logo` text NOT NULL,
  PRIMARY KEY (`id_Offers`,`Users_idUsers`),
  KEY `fk_Offers_Users1_idx` (`Users_idUsers`),
  CONSTRAINT `fk_Offers_Users1` FOREIGN KEY (`Users_idUsers`) REFERENCES `Users` (`id_Users`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Offers`
--

LOCK TABLES `Offers` WRITE;
/*!40000 ALTER TABLE `Offers` DISABLE KEYS */;
INSERT INTO `Offers` VALUES (10,NULL,'DNE SOCLE 4 Expert(e) en sécurité de systèmes d\'information ','-Vous serez chargé(e) de mettre en place une détection opérationnelle des attaques et de procéder à l’analyse des incidents les plus significatifs touchant les systèmes d’information du ministère. Dans le cadre de vos missions, vous serez amené(e) à organiser le pilotage des retours d’expériences, orienter les équipes de veille et les investigations menées.\r\n\r\n-L’équipe est constituée du responsable du COSSIM, de trois experts en analyse et traitements d’incidents (Forensic) et en analyse de flux afin de mettre en place une détection des attaques. Des stagiaires et apprentis ingénieurs se joignent régulièrement au COSSIM.',0,'1 ans','Technique','Paris',3,'http://localhost:3310/upload/1707320483221.0.8631453823822277.logogouv.png'),(11,NULL,'Ingénieur Logiciel Embarqué (F/H)','• Mission principale : Assurer les activités de rédaction de spécification, de conception, de développement, de tests, de vérification, de validation et de production en lien avec les logiciels embarqués des nanosatellites développés par le CSUM.\r\n\r\n• Activités :\r\n- Définir une architecture logicielle.\r\n- Définir des spécifications logicielles.\r\n- Contribuer à l\'élaboration de plan de développement logiciel.\r\n- Réaliser la conception de logiciels embarqués ainsi que les documents de définition et de justification associés.\r\n- Faire des analyses de fonctionnement logiciel.\r\n- Contribuer à l\'élaboration des plans de vérification logiciels.\r\n- Définir et réaliser des plans de tests logiciels.\r\n- Réaliser des tests logiciels.\r\n- Prendre part au management de la configuration logicielle des satellites.\r\n- Assurer une veille technologique sur le domaine spatial et la filière nanosatellite\r\n- Participer aux actions de promotion du domaine spatial et de la science: salon, congrès, conférences; symposium, workshop …\r\n- Contribuer à l’amélioration continue des processus du CSUM\r\n- Toute activité nécessaire au bon fonctionnement du CSUM\r\n- Former les étudiants du supérieur au spatial au travers des projets nanosatellite',1,'2 ans','Technique','Lille',3,'http://localhost:3310/upload/1707320578771.0.2623608556237651.logogouv.png'),(12,NULL,'Responsable du bureau guichet unique','Sous l’autorité de la responsable de service, le responsable de bureau assure l’encadrement et le pilotage du bureau du guichet unique.\r\n\r\nActivités principales liées à la mission :\r\n\r\nAnimation du bureau, encadrement des 3 gestionnaires, et pilotage des missions du bureau :\r\n\r\n\r\n-Participer avec la responsable de service et son adjointe aux projets de dématérialisation du service en vue de la simplification des démarches\r\n\r\n- Organiser la journée d’accueil des nouveaux personnels, réaliser l’enquête et le bilan annuel auprès des participants',1,'6 mois','Ressources Humaines','Toulouse',3,'http://localhost:3310/upload/1707320714035.0.7350205350504488.logogouv.png'),(13,NULL,'Responsable du bureau guichet unique','Sous l’autorité de la responsable de service, le responsable de bureau assure l’encadrement et le pilotage du bureau du guichet unique.\r\n\r\nActivités principales liées à la mission :\r\n\r\nAnimation du bureau, encadrement des 3 gestionnaires, et pilotage des missions du bureau :\r\n\r\n\r\n-Participer avec la responsable de service et son adjointe aux projets de dématérialisation du service en vue de la simplification des démarches\r\n\r\n- Organiser la journée d’accueil des nouveaux personnels, réaliser l’enquête et le bilan annuel auprès des participants',1,'6 mois','Ressources Humaines','Toulouse',3,'http://localhost:3310/upload/1707320715268.0.491569460761371.logogouv.png'),(14,NULL,'Responsable du bureau guichet unique','Sous l’autorité de la responsable de service, le responsable de bureau assure l’encadrement et le pilotage du bureau du guichet unique.\r\n\r\nActivités principales liées à la mission :\r\n\r\nAnimation du bureau, encadrement des 3 gestionnaires, et pilotage des missions du bureau :\r\n\r\n\r\n-Participer avec la responsable de service et son adjointe aux projets de dématérialisation du service en vue de la simplification des démarches\r\n\r\n- Organiser la journée d’accueil des nouveaux personnels, réaliser l’enquête et le bilan annuel auprès des participants',1,'6 mois','Ressources Humaines','Toulouse',3,'http://localhost:3310/upload/1707320715791.0.4812088882569072.logogouv.png'),(15,NULL,'Responsable du bureau guichet unique','Sous l’autorité de la responsable de service, le responsable de bureau assure l’encadrement et le pilotage du bureau du guichet unique.\r\n\r\nActivités principales liées à la mission :\r\n\r\nAnimation du bureau, encadrement des 3 gestionnaires, et pilotage des missions du bureau :\r\n\r\n\r\n-Participer avec la responsable de service et son adjointe aux projets de dématérialisation du service en vue de la simplification des démarches\r\n\r\n- Organiser la journée d’accueil des nouveaux personnels, réaliser l’enquête et le bilan annuel auprès des participants',1,'6 mois','Ressources Humaines','Toulouse',3,'http://localhost:3310/upload/1707320715968.0.48911100431290255.logogouv.png'),(16,NULL,'Responsable du bureau guichet unique','Sous l’autorité de la responsable de service, le responsable de bureau assure l’encadrement et le pilotage du bureau du guichet unique.\r\n\r\nActivités principales liées à la mission :\r\n\r\nAnimation du bureau, encadrement des 3 gestionnaires, et pilotage des missions du bureau :\r\n\r\n\r\n-Participer avec la responsable de service et son adjointe aux projets de dématérialisation du service en vue de la simplification des démarches\r\n\r\n- Organiser la journée d’accueil des nouveaux personnels, réaliser l’enquête et le bilan annuel auprès des participants',1,'6 mois','Ressources Humaines','Toulouse',3,'http://localhost:3310/upload/1707320716165.0.09628321166546971.logogouv.png'),(17,NULL,'Responsable du bureau guichet unique','Sous l’autorité de la responsable de service, le responsable de bureau assure l’encadrement et le pilotage du bureau du guichet unique.\r\n\r\nActivités principales liées à la mission :\r\n\r\nAnimation du bureau, encadrement des 3 gestionnaires, et pilotage des missions du bureau :\r\n\r\n\r\n-Participer avec la responsable de service et son adjointe aux projets de dématérialisation du service en vue de la simplification des démarches\r\n\r\n- Organiser la journée d’accueil des nouveaux personnels, réaliser l’enquête et le bilan annuel auprès des participants',1,'6 mois','Ressources Humaines','Toulouse',3,'http://localhost:3310/upload/1707320716302.0.11246376920140433.logogouv.png'),(18,NULL,'Responsable du bureau guichet unique','Sous l’autorité de la responsable de service, le responsable de bureau assure l’encadrement et le pilotage du bureau du guichet unique.\r\n\r\nActivités principales liées à la mission :\r\n\r\nAnimation du bureau, encadrement des 3 gestionnaires, et pilotage des missions du bureau :\r\n\r\n\r\n-Participer avec la responsable de service et son adjointe aux projets de dématérialisation du service en vue de la simplification des démarches\r\n\r\n- Organiser la journée d’accueil des nouveaux personnels, réaliser l’enquête et le bilan annuel auprès des participants',1,'6 mois','Ressources Humaines','Toulouse',3,'http://localhost:3310/upload/1707320722450.0.2538645586777082.logogouv.png'),(19,NULL,'Responsable du bureau guichet unique','Sous l’autorité de la responsable de service, le responsable de bureau assure l’encadrement et le pilotage du bureau du guichet unique.\r\n\r\nActivités principales liées à la mission :\r\n\r\nAnimation du bureau, encadrement des 3 gestionnaires, et pilotage des missions du bureau :\r\n\r\n\r\n-Participer avec la responsable de service et son adjointe aux projets de dématérialisation du service en vue de la simplification des démarches\r\n\r\n- Organiser la journée d’accueil des nouveaux personnels, réaliser l’enquête et le bilan annuel auprès des participants',1,'6 mois','Ressources Humaines','Toulouse',3,'http://localhost:3310/upload/1707320722628.0.4110435494460496.logogouv.png'),(20,NULL,'Responsable du bureau guichet unique','Sous l’autorité de la responsable de service, le responsable de bureau assure l’encadrement et le pilotage du bureau du guichet unique.\r\n\r\nActivités principales liées à la mission :\r\n\r\nAnimation du bureau, encadrement des 3 gestionnaires, et pilotage des missions du bureau :\r\n\r\n\r\n-Participer avec la responsable de service et son adjointe aux projets de dématérialisation du service en vue de la simplification des démarches\r\n\r\n- Organiser la journée d’accueil des nouveaux personnels, réaliser l’enquête et le bilan annuel auprès des participants',1,'6 mois','Ressources Humaines','Toulouse',3,'http://localhost:3310/upload/1707320722798.0.17680704803987668.logogouv.png'),(21,NULL,'Responsable du bureau guichet unique','Sous l’autorité de la responsable de service, le responsable de bureau assure l’encadrement et le pilotage du bureau du guichet unique.\r\n\r\nActivités principales liées à la mission :\r\n\r\nAnimation du bureau, encadrement des 3 gestionnaires, et pilotage des missions du bureau :\r\n\r\n\r\n-Participer avec la responsable de service et son adjointe aux projets de dématérialisation du service en vue de la simplification des démarches\r\n\r\n- Organiser la journée d’accueil des nouveaux personnels, réaliser l’enquête et le bilan annuel auprès des participants',1,'6 mois','Ressources Humaines','Toulouse',3,'http://localhost:3310/upload/1707320722982.0.3197345834398566.logogouv.png'),(22,NULL,'Responsable du bureau guichet unique','Sous l’autorité de la responsable de service, le responsable de bureau assure l’encadrement et le pilotage du bureau du guichet unique.\r\n\r\nActivités principales liées à la mission :\r\n\r\nAnimation du bureau, encadrement des 3 gestionnaires, et pilotage des missions du bureau :\r\n\r\n\r\n-Participer avec la responsable de service et son adjointe aux projets de dématérialisation du service en vue de la simplification des démarches\r\n\r\n- Organiser la journée d’accueil des nouveaux personnels, réaliser l’enquête et le bilan annuel auprès des participants',1,'6 mois','Ressources Humaines','Toulouse',3,'http://localhost:3310/upload/1707320738001.0.1253269149679621.logogouv.png');
/*!40000 ALTER TABLE `Offers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Offers_Categories`
--

DROP TABLE IF EXISTS `Offers_Categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Offers_Categories` (
  `Offers_Id_offers` int NOT NULL,
  `Categories_idCategories` int NOT NULL,
  PRIMARY KEY (`Offers_Id_offers`,`Categories_idCategories`),
  KEY `fk_Offers_has_Categories_Categories1_idx` (`Categories_idCategories`),
  KEY `fk_Offers_has_Categories_Offers1_idx` (`Offers_Id_offers`),
  CONSTRAINT `fk_Offers_has_Categories_Categories1` FOREIGN KEY (`Categories_idCategories`) REFERENCES `Categories` (`id_Categories`) ON DELETE CASCADE,
  CONSTRAINT `fk_Offers_has_Categories_Offers1` FOREIGN KEY (`Offers_Id_offers`) REFERENCES `Offers` (`id_Offers`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Offers_Categories`
--

LOCK TABLES `Offers_Categories` WRITE;
/*!40000 ALTER TABLE `Offers_Categories` DISABLE KEYS */;
INSERT INTO `Offers_Categories` VALUES (10,1),(11,1),(22,3);
/*!40000 ALTER TABLE `Offers_Categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Softskills`
--

DROP TABLE IF EXISTS `Softskills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Softskills` (
  `id_Softskills` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(85) NOT NULL,
  PRIMARY KEY (`id_Softskills`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Softskills`
--

LOCK TABLES `Softskills` WRITE;
/*!40000 ALTER TABLE `Softskills` DISABLE KEYS */;
INSERT INTO `Softskills` VALUES (1,'Rigeur'),(2,'Autonomie'),(3,'Patience'),(4,'Autonomie'),(5,'travailler en équipe'),(6,'Sens du service'),(7,'Curiosité'),(8,'ténacité'),(9,'communication'),(10,'Sens critique');
/*!40000 ALTER TABLE `Softskills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Softskills_Offers`
--

DROP TABLE IF EXISTS `Softskills_Offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Softskills_Offers` (
  `Softskills_id_Softskills` int NOT NULL,
  `Offers_Id_offers` int NOT NULL,
  PRIMARY KEY (`Softskills_id_Softskills`,`Offers_Id_offers`),
  KEY `fk_Softskills_has_Offers_Offers1_idx` (`Offers_Id_offers`),
  KEY `fk_Softskills_has_Offers_Softskills1_idx` (`Softskills_id_Softskills`),
  CONSTRAINT `fk_Softskills_has_Offers_Offers1` FOREIGN KEY (`Offers_Id_offers`) REFERENCES `Offers` (`id_Offers`) ON DELETE CASCADE,
  CONSTRAINT `fk_Softskills_has_Offers_Softskills1` FOREIGN KEY (`Softskills_id_Softskills`) REFERENCES `Softskills` (`id_Softskills`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Softskills_Offers`
--

LOCK TABLES `Softskills_Offers` WRITE;
/*!40000 ALTER TABLE `Softskills_Offers` DISABLE KEYS */;
INSERT INTO `Softskills_Offers` VALUES (1,10),(3,10),(7,10),(8,10),(2,11),(7,11),(10,11),(3,22),(9,22),(10,22);
/*!40000 ALTER TABLE `Softskills_Offers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id_Users` int NOT NULL AUTO_INCREMENT,
  `Lastname` varchar(45) NOT NULL,
  `Firstname` varchar(45) NOT NULL,
  `Matricule` varchar(85) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Email` varchar(80) NOT NULL,
  `Phone` varchar(10) NOT NULL,
  `Seniority` datetime NOT NULL,
  `Admin` tinyint NOT NULL,
  `Introduction` text,
  `Picture` text NOT NULL,
  PRIMARY KEY (`id_Users`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (3,'yannis ','yannis','123','$argon2id$v=19$m=19456,t=2,p=1$BAgdMthAmGfTrywW5BWEmQ$2Pn8z6J3uGp6744uyoKiLU0FZ411GvBEA2lvWMWbHhk','yannis@wcs.fr','06060606','2024-02-28 00:00:00',1,'Bonjour je suis développeur à la wild.','http://localhost:3310/upload/1707318710954.0.2872807026871653.cartoonize_1699457212490.jpg'),(4,'rachid ','rachid ','12293','$argon2id$v=19$m=19456,t=2,p=1$R9e5EYj2ZyqLc4NxAkeeRg$oK1tvsRNiMc+v+hg3gJNq+WsKx3pi14BMF6dGHFwHNQ','rachid@wcs.fr','06060606','2024-02-05 00:00:00',1,'Bonjour,\r\nJe suis dévéloppeur à la wild.','http://localhost:3310/upload/1707318962278.0.25556591767055226.rara.png'),(5,'jean','jean','1269','$argon2id$v=19$m=19456,t=2,p=1$5oEryLBNvCY8DYdUhVOj9Q$u2bwIn5O7idghEcaSl5gT2aLSp1KwxMNpC5uX8yXx+0','jean@inviter.fr','06060606','2024-02-24 00:00:00',0,'Bonjour,\r\nje Sus utilisateur 1','http://localhost:3310/upload/1707319046521.0.3255137632134233.utilisateur1.jpeg'),(6,'clara','clara','1769','$argon2id$v=19$m=19456,t=2,p=1$QxQILylw7TfShtZoMFGvGA$iEBS0OM0o8f6OXGUNIo6h/hx59HFXZm08XasEOvLqLI','clara@inviter.fr','06060606','2024-02-11 00:00:00',0,'Bonjour je suis utilisateur 2','http://localhost:3310/upload/1707319118492.0.786959154207953.utilisatrice2.jpg'),(8,'tom','tom','1890','$argon2id$v=19$m=19456,t=2,p=1$INgZyMRNzlOmhwV8y9HwlQ$nJuPx1woEuZ2L6kGu7JR4JKEYSpDdAxZHB/KZb6f/qc','tom@inviter.fr','06060606','2024-01-02 00:00:00',0,'Bonjour je suis utilisateur 4','http://localhost:3310/upload/1707319318739.0.2535436728647802.utilisateur4.jpg'),(9,'asle','asle','18607','$argon2id$v=19$m=19456,t=2,p=1$efGgDCypoEoIpf8eE36n/A$gT9LjSV5E/qMjeuwhwchLsidkuP/K1dcxYz5fOD4dt4','asle@wcs.fr','06060606','2024-02-10 00:00:00',1,'Bonjour je suis développeuse à la wild','http://localhost:3310/upload/1707319597378.0.3710124399715835.IMG_4834.jpg'),(10,'tara','tara','1890','$argon2id$v=19$m=19456,t=2,p=1$zHkndOX5Ds7w8taZY+KtEQ$J5Fi74aoBsfBYiqI4jU49Sdaw1h+4l1n8jZ8PxP3yac','tara@inviter.fr','06060606','2024-02-19 00:00:00',0,'Bonjour je suis utilisateur 1','http://localhost:3310/upload/1707319682852.0.7521787726369775.utilisateur 6.jpg');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users_Hardskills`
--

DROP TABLE IF EXISTS `Users_Hardskills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users_Hardskills` (
  `Hardskills_id_Hardskills` int NOT NULL,
  `Users_idUsers` int NOT NULL,
  PRIMARY KEY (`Hardskills_id_Hardskills`,`Users_idUsers`),
  KEY `fk_Hardskills_has_Users_Users1_idx` (`Users_idUsers`),
  KEY `fk_Hardskills_has_Users_Hardskills1_idx` (`Hardskills_id_Hardskills`),
  CONSTRAINT `fk_Hardskills_has_Users_Hardskills1` FOREIGN KEY (`Hardskills_id_Hardskills`) REFERENCES `Hardskills` (`id_Hardskills`) ON DELETE CASCADE,
  CONSTRAINT `fk_Hardskills_has_Users_Users1` FOREIGN KEY (`Users_idUsers`) REFERENCES `Users` (`id_Users`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users_Hardskills`
--

LOCK TABLES `Users_Hardskills` WRITE;
/*!40000 ALTER TABLE `Users_Hardskills` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users_Hardskills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users_Softskills`
--

DROP TABLE IF EXISTS `Users_Softskills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users_Softskills` (
  `Users_idUsers` int NOT NULL,
  `Softskills_id_Softskills` int NOT NULL,
  PRIMARY KEY (`Users_idUsers`,`Softskills_id_Softskills`),
  KEY `fk_Users_has_Softskills_Softskills1_idx` (`Softskills_id_Softskills`),
  KEY `fk_Users_has_Softskills_Users1_idx` (`Users_idUsers`),
  CONSTRAINT `fk_Users_has_Softskills_Softskills1` FOREIGN KEY (`Softskills_id_Softskills`) REFERENCES `Softskills` (`id_Softskills`) ON DELETE CASCADE,
  CONSTRAINT `fk_Users_has_Softskills_Users1` FOREIGN KEY (`Users_idUsers`) REFERENCES `Users` (`id_Users`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users_Softskills`
--

LOCK TABLES `Users_Softskills` WRITE;
/*!40000 ALTER TABLE `Users_Softskills` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users_Softskills` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-07 16:50:40
