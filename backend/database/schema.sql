-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (arm64)
--
-- Host: localhost    Database: rayj
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!50503 SET NAMES utf8 */
;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */
;
/*!40103 SET TIME_ZONE='+00:00' */
;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */
;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */
;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;

--
-- Table structure for table `Candidates`
--

DROP TABLE IF EXISTS `Candidates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `Candidates` (
    `Users_idUsers` int NOT NULL, `Offers_Id_offers` int NOT NULL, `Status` varchar(80) NOT NULL, PRIMARY KEY (
        `Users_idUsers`, `Offers_Id_offers`
    ), KEY `fk_Users_has_Offers_Offers1_idx` (`Offers_Id_offers`), KEY `fk_Users_has_Offers_Users1_idx` (`Users_idUsers`), CONSTRAINT `fk_Users_has_Offers_Offers1` FOREIGN KEY (`Offers_Id_offers`) REFERENCES `Offers` (`id_Offers`) ON DELETE CASCADE, CONSTRAINT `fk_Users_has_Offers_Users1` FOREIGN KEY (`Users_idUsers`) REFERENCES `Users` (`id_Users`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `Candidates`
--

LOCK TABLES `Candidates` WRITE;
/*!40000 ALTER TABLE `Candidates` DISABLE KEYS */
;
/*!40000 ALTER TABLE `Candidates` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `Categories`
--

DROP TABLE IF EXISTS `Categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `Categories` (
    `id_Categories` int NOT NULL AUTO_INCREMENT, `Name` varchar(45) NOT NULL, PRIMARY KEY (`id_Categories`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `Categories`
--

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */
;

INSERT INTO
    `Categories`
VALUES (1, 'Developpement'),
    (2, 'Data'),
    (3, 'Secretariat');
/*!40000 ALTER TABLE `Categories` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `Favorites`
--

DROP TABLE IF EXISTS `Favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `Favorites` (
    `Users_idUsers` int NOT NULL, `Offers_Id_offers` int NOT NULL, PRIMARY KEY (
        `Users_idUsers`, `Offers_Id_offers`
    ), KEY `fk_Users_has_Offers_Offers2_idx` (`Offers_Id_offers`), KEY `fk_Users_has_Offers_Users2_idx` (`Users_idUsers`), CONSTRAINT `fk_Users_has_Offers_Offers2` FOREIGN KEY (`Offers_Id_offers`) REFERENCES `Offers` (`id_Offers`) ON DELETE CASCADE, CONSTRAINT `fk_Users_has_Offers_Users2` FOREIGN KEY (`Users_idUsers`) REFERENCES `Users` (`id_Users`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `Favorites`
--

LOCK TABLES `Favorites` WRITE;
/*!40000 ALTER TABLE `Favorites` DISABLE KEYS */
;
/*!40000 ALTER TABLE `Favorites` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `Hardskills`
--

DROP TABLE IF EXISTS `Hardskills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `Hardskills` (
    `id_Hardskills` int NOT NULL AUTO_INCREMENT, `Name` varchar(45) NOT NULL, PRIMARY KEY (`id_Hardskills`)
) ENGINE = InnoDB AUTO_INCREMENT = 7 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `Hardskills`
--

LOCK TABLES `Hardskills` WRITE;
/*!40000 ALTER TABLE `Hardskills` DISABLE KEYS */
;

INSERT INTO
    `Hardskills`
VALUES (1, 'JS'),
    (2, 'REACT'),
    (3, 'HTML'),
    (4, 'CSS'),
    (5, 'NodeJS'),
    (6, 'MySQL');
/*!40000 ALTER TABLE `Hardskills` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `Hardskills_Offers`
--

DROP TABLE IF EXISTS `Hardskills_Offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `Hardskills_Offers` (
    `Hardskills_id_Hardskills` int NOT NULL, `Offers_Id_offers` int NOT NULL, PRIMARY KEY (
        `Hardskills_id_Hardskills`, `Offers_Id_offers`
    ), KEY `fk_Hardskills_has_Offers_Offers1_idx` (`Offers_Id_offers`), KEY `fk_Hardskills_has_Offers_Hardskills1_idx` (`Hardskills_id_Hardskills`), CONSTRAINT `fk_Hardskills_has_Offers_Hardskills1` FOREIGN KEY (`Hardskills_id_Hardskills`) REFERENCES `Hardskills` (`id_Hardskills`) ON DELETE CASCADE, CONSTRAINT `fk_Hardskills_has_Offers_Offers1` FOREIGN KEY (`Offers_Id_offers`) REFERENCES `Offers` (`id_Offers`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `Hardskills_Offers`
--

LOCK TABLES `Hardskills_Offers` WRITE;
/*!40000 ALTER TABLE `Hardskills_Offers` DISABLE KEYS */
;
/*!40000 ALTER TABLE `Hardskills_Offers` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `Offers`
--

DROP TABLE IF EXISTS `Offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `Offers` (
    `id_Offers` int NOT NULL AUTO_INCREMENT, `Date_of_publication` datetime DEFAULT CURRENT_TIMESTAMP, `Post_title` varchar(80) NOT NULL, `Description` text NOT NULL, `Training` tinyint DEFAULT NULL, `Level` varchar(45) DEFAULT NULL, `Domaine` varchar(85) NOT NULL, `Location` varchar(255) NOT NULL, `Users_idUsers` int NOT NULL, `Logo` text NOT NULL, PRIMARY KEY (`id_Offers`, `Users_idUsers`), KEY `fk_Offers_Users1_idx` (`Users_idUsers`), CONSTRAINT `fk_Offers_Users1` FOREIGN KEY (`Users_idUsers`) REFERENCES `Users` (`id_Users`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `Offers`
--

LOCK TABLES `Offers` WRITE;
/*!40000 ALTER TABLE `Offers` DISABLE KEYS */
;
/*!40000 ALTER TABLE `Offers` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `Offers_Categories`
--

DROP TABLE IF EXISTS `Offers_Categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `Offers_Categories` (
    `Offers_Id_offers` int NOT NULL, `Categories_idCategories` int NOT NULL, PRIMARY KEY (
        `Offers_Id_offers`, `Categories_idCategories`
    ), KEY `fk_Offers_has_Categories_Categories1_idx` (`Categories_idCategories`), KEY `fk_Offers_has_Categories_Offers1_idx` (`Offers_Id_offers`), CONSTRAINT `fk_Offers_has_Categories_Categories1` FOREIGN KEY (`Categories_idCategories`) REFERENCES `Categories` (`id_Categories`) ON DELETE CASCADE, CONSTRAINT `fk_Offers_has_Categories_Offers1` FOREIGN KEY (`Offers_Id_offers`) REFERENCES `Offers` (`id_Offers`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `Offers_Categories`
--

LOCK TABLES `Offers_Categories` WRITE;
/*!40000 ALTER TABLE `Offers_Categories` DISABLE KEYS */
;
/*!40000 ALTER TABLE `Offers_Categories` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `Softskills`
--

DROP TABLE IF EXISTS `Softskills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `Softskills` (
    `id_Softskills` int NOT NULL AUTO_INCREMENT, `Name` varchar(85) NOT NULL, PRIMARY KEY (`id_Softskills`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `Softskills`
--

LOCK TABLES `Softskills` WRITE;
/*!40000 ALTER TABLE `Softskills` DISABLE KEYS */
;

INSERT INTO
    `Softskills`
VALUES (1, 'Rigeur'),
    (2, 'Autonomie'),
    (3, 'Patience');
/*!40000 ALTER TABLE `Softskills` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `Softskills_Offers`
--

DROP TABLE IF EXISTS `Softskills_Offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `Softskills_Offers` (
    `Softskills_id_Softskills` int NOT NULL, `Offers_Id_offers` int NOT NULL, PRIMARY KEY (
        `Softskills_id_Softskills`, `Offers_Id_offers`
    ), KEY `fk_Softskills_has_Offers_Offers1_idx` (`Offers_Id_offers`), KEY `fk_Softskills_has_Offers_Softskills1_idx` (`Softskills_id_Softskills`), CONSTRAINT `fk_Softskills_has_Offers_Offers1` FOREIGN KEY (`Offers_Id_offers`) REFERENCES `Offers` (`id_Offers`) ON DELETE CASCADE, CONSTRAINT `fk_Softskills_has_Offers_Softskills1` FOREIGN KEY (`Softskills_id_Softskills`) REFERENCES `Softskills` (`id_Softskills`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `Softskills_Offers`
--

LOCK TABLES `Softskills_Offers` WRITE;
/*!40000 ALTER TABLE `Softskills_Offers` DISABLE KEYS */
;
/*!40000 ALTER TABLE `Softskills_Offers` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `Users` (
    `id_Users` int NOT NULL AUTO_INCREMENT, `Lastname` varchar(45) NOT NULL, `Firstname` varchar(45) NOT NULL, `Matricule` varchar(85) NOT NULL, `Password` varchar(255) NOT NULL, `Email` varchar(80) NOT NULL, `Phone` varchar(10) NOT NULL, `Seniority` datetime NOT NULL, `Admin` tinyint NOT NULL, `Introduction` text, `Picture` text NOT NULL, PRIMARY KEY (`id_Users`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */
;
/*!40000 ALTER TABLE `Users` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `Users_Hardskills`
--

DROP TABLE IF EXISTS `Users_Hardskills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `Users_Hardskills` (
    `Hardskills_id_Hardskills` int NOT NULL, `Users_idUsers` int NOT NULL, PRIMARY KEY (
        `Hardskills_id_Hardskills`, `Users_idUsers`
    ), KEY `fk_Hardskills_has_Users_Users1_idx` (`Users_idUsers`), KEY `fk_Hardskills_has_Users_Hardskills1_idx` (`Hardskills_id_Hardskills`), CONSTRAINT `fk_Hardskills_has_Users_Hardskills1` FOREIGN KEY (`Hardskills_id_Hardskills`) REFERENCES `Hardskills` (`id_Hardskills`) ON DELETE CASCADE, CONSTRAINT `fk_Hardskills_has_Users_Users1` FOREIGN KEY (`Users_idUsers`) REFERENCES `Users` (`id_Users`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `Users_Hardskills`
--

LOCK TABLES `Users_Hardskills` WRITE;
/*!40000 ALTER TABLE `Users_Hardskills` DISABLE KEYS */
;
/*!40000 ALTER TABLE `Users_Hardskills` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `Users_Softskills`
--

DROP TABLE IF EXISTS `Users_Softskills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `Users_Softskills` (
    `Users_idUsers` int NOT NULL, `Softskills_id_Softskills` int NOT NULL, PRIMARY KEY (
        `Users_idUsers`, `Softskills_id_Softskills`
    ), KEY `fk_Users_has_Softskills_Softskills1_idx` (`Softskills_id_Softskills`), KEY `fk_Users_has_Softskills_Users1_idx` (`Users_idUsers`), CONSTRAINT `fk_Users_has_Softskills_Softskills1` FOREIGN KEY (`Softskills_id_Softskills`) REFERENCES `Softskills` (`id_Softskills`) ON DELETE CASCADE, CONSTRAINT `fk_Users_has_Softskills_Users1` FOREIGN KEY (`Users_idUsers`) REFERENCES `Users` (`id_Users`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `Users_Softskills`
--

LOCK TABLES `Users_Softskills` WRITE;
/*!40000 ALTER TABLE `Users_Softskills` DISABLE KEYS */
;
/*!40000 ALTER TABLE `Users_Softskills` ENABLE KEYS */
;

UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */
;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */
;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */
;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */
;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */
;

-- Dump completed on 2024-01-31 11:06:13