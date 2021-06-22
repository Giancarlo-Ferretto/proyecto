-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         10.4.17-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para servicio_cliente_gf
CREATE DATABASE IF NOT EXISTS `servicio_cliente_gf` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `servicio_cliente_gf`;

-- Volcando estructura para tabla servicio_cliente_gf.ticketreplies
CREATE TABLE IF NOT EXISTS `ticketreplies` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ticketId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `reply` varchar(1028) NOT NULL,
  `replyDate` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`ID`),
  KEY `FK_ticketreply_tickets` (`ticketId`),
  KEY `FK_ticketreply_users` (`userId`),
  CONSTRAINT `FK_ticketreply_tickets` FOREIGN KEY (`ticketId`) REFERENCES `tickets` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_ticketreply_users` FOREIGN KEY (`userId`) REFERENCES `users` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla servicio_cliente_gf.tickets
CREATE TABLE IF NOT EXISTS `tickets` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `status` varchar(100) NOT NULL,
  `priority` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `subject` varchar(150) NOT NULL,
  `description` varchar(2048) NOT NULL DEFAULT '0',
  `creationDate` datetime NOT NULL DEFAULT date_format(current_timestamp(),'%Y-%m-%d %T.%f'),
  PRIMARY KEY (`ID`),
  KEY `FK__clients` (`userId`) USING BTREE,
  CONSTRAINT `FK__clients` FOREIGN KEY (`userId`) REFERENCES `users` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla servicio_cliente_gf.users
CREATE TABLE IF NOT EXISTS `users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `lastname` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL,
  `isAdmin` int(11) NOT NULL DEFAULT 0,
  `rut` varchar(150) NOT NULL,
  `address` varchar(150) NOT NULL,
  `region` varchar(150) NOT NULL,
  `city` varchar(150) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
