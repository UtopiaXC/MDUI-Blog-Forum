/*
 Navicat Premium Data Transfer

 Source Server         : MySQL
 Source Server Type    : MySQL
 Source Server Version : 80016
 Source Host           : localhost:3306
 Source Schema         : mduiblog

 Target Server Type    : MySQL
 Target Server Version : 80016
 File Encoding         : 65001

 Date: 05/01/2021 23:54:08
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `article_id` int(11) NOT NULL AUTO_INCREMENT,
  `article_user_id` int(11) NOT NULL,
  `article_topic_id` int(11) NOT NULL,
  `article_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `article_content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `article_submit_time` datetime(0) NOT NULL,
  `article_edit_time` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`article_id`) USING BTREE,
  INDEX `article_user_id`(`article_user_id`) USING BTREE,
  INDEX `article_topic_id`(`article_topic_id`) USING BTREE,
  CONSTRAINT `article_topic_id` FOREIGN KEY (`article_topic_id`) REFERENCES `topic` (`topic_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `article_user_id` FOREIGN KEY (`article_user_id`) REFERENCES `register_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------

-- ----------------------------
-- Table structure for article_comment
-- ----------------------------
DROP TABLE IF EXISTS `article_comment`;
CREATE TABLE `article_comment`  (
  `article_comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `article_comment_article_id` int(11) NOT NULL,
  `article_comment_user_id` int(11) NOT NULL,
  `article_comment_father_user_id` int(11) NULL DEFAULT NULL,
  `article_comment_time` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`article_comment_id`) USING BTREE,
  INDEX `article_comment_article_id`(`article_comment_article_id`) USING BTREE,
  INDEX `article_comment_user_id`(`article_comment_user_id`) USING BTREE,
  CONSTRAINT `article_comment_article_id` FOREIGN KEY (`article_comment_article_id`) REFERENCES `article` (`article_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `article_comment_user_id` FOREIGN KEY (`article_comment_user_id`) REFERENCES `register_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article_comment
-- ----------------------------

-- ----------------------------
-- Table structure for article_comment_like
-- ----------------------------
DROP TABLE IF EXISTS `article_comment_like`;
CREATE TABLE `article_comment_like`  (
  `article_comment_like_id` int(11) NOT NULL,
  `article_comment_like_comment_id` int(11) NOT NULL,
  `article_comment_like_user_id` int(11) NOT NULL,
  `article_comment_like_time` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`article_comment_like_id`) USING BTREE,
  INDEX `article_comment_like_comment_id`(`article_comment_like_comment_id`) USING BTREE,
  INDEX `article_comment_like_user_id`(`article_comment_like_user_id`) USING BTREE,
  CONSTRAINT `article_comment_like_comment_id` FOREIGN KEY (`article_comment_like_comment_id`) REFERENCES `article_comment` (`article_comment_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `article_comment_like_user_id` FOREIGN KEY (`article_comment_like_user_id`) REFERENCES `register_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article_comment_like
-- ----------------------------

-- ----------------------------
-- Table structure for article_comment_report
-- ----------------------------
DROP TABLE IF EXISTS `article_comment_report`;
CREATE TABLE `article_comment_report`  (
  `article_comment_report_id` int(11) NOT NULL AUTO_INCREMENT,
  `article_comment_report_comment_id` int(11) NOT NULL,
  `article_comment_report_user_id` int(11) NOT NULL,
  `article_comment_report_reason` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `article_comment_report_time` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`article_comment_report_id`) USING BTREE,
  INDEX `article_comment_report_comment_id`(`article_comment_report_comment_id`) USING BTREE,
  INDEX `article_comment_report_user_id`(`article_comment_report_user_id`) USING BTREE,
  CONSTRAINT `article_comment_report_comment_id` FOREIGN KEY (`article_comment_report_comment_id`) REFERENCES `article_comment` (`article_comment_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `article_comment_report_user_id` FOREIGN KEY (`article_comment_report_user_id`) REFERENCES `register_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article_comment_report
-- ----------------------------

-- ----------------------------
-- Table structure for article_like
-- ----------------------------
DROP TABLE IF EXISTS `article_like`;
CREATE TABLE `article_like`  (
  `article_like_id` int(11) NOT NULL,
  `article_like_article_id` int(11) NOT NULL,
  `article_like_user_id` int(11) NOT NULL,
  `article_like_time` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`article_like_id`) USING BTREE,
  INDEX `article_like_article_id`(`article_like_article_id`) USING BTREE,
  INDEX `article_like_user_id`(`article_like_user_id`) USING BTREE,
  CONSTRAINT `article_like_article_id` FOREIGN KEY (`article_like_article_id`) REFERENCES `article` (`article_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `article_like_user_id` FOREIGN KEY (`article_like_user_id`) REFERENCES `register_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article_like
-- ----------------------------

-- ----------------------------
-- Table structure for article_report
-- ----------------------------
DROP TABLE IF EXISTS `article_report`;
CREATE TABLE `article_report`  (
  `article_report_id` int(11) NOT NULL AUTO_INCREMENT,
  `article_report_article_id` int(11) NOT NULL,
  `article_report_user_id` int(11) NOT NULL,
  `article_report_reason` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `article_report_time` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`article_report_id`) USING BTREE,
  INDEX `article_report_article_id`(`article_report_article_id`) USING BTREE,
  INDEX `article_report_user_id`(`article_report_user_id`) USING BTREE,
  CONSTRAINT `article_report_article_id` FOREIGN KEY (`article_report_article_id`) REFERENCES `article` (`article_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `article_report_user_id` FOREIGN KEY (`article_report_user_id`) REFERENCES `register_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article_report
-- ----------------------------

-- ----------------------------
-- Table structure for register_user
-- ----------------------------
DROP TABLE IF EXISTS `register_user`;
CREATE TABLE `register_user`  (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_group` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_banned` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_register_time` datetime(0) NOT NULL,
  `user_slogan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_birthday` date NULL DEFAULT NULL,
  `user_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_region` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_organization` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_description` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE,
  UNIQUE INDEX `user_name`(`user_name`) USING BTREE,
  UNIQUE INDEX `user_email`(`user_email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of register_user
-- ----------------------------
INSERT INTO `register_user` VALUES (1, 'admin', 'admin@admin.com', '6a2543bb4e46819d7d0827e531a4c269', 'admin', 'false', '2021-01-05 23:52:02', NULL, NULL, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for session
-- ----------------------------
DROP TABLE IF EXISTS `session`;
CREATE TABLE `session`  (
  `session_id` int(11) NOT NULL AUTO_INCREMENT,
  `session_user_id` int(11) NOT NULL,
  `session_token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `session_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `session_stime` int(11) NOT NULL,
  `session_etime` int(11) NOT NULL,
  PRIMARY KEY (`session_id`) USING BTREE,
  INDEX `session_user_id`(`session_user_id`) USING BTREE,
  CONSTRAINT `session_user_id` FOREIGN KEY (`session_user_id`) REFERENCES `register_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of session
-- ----------------------------

-- ----------------------------
-- Table structure for topic
-- ----------------------------
DROP TABLE IF EXISTS `topic`;
CREATE TABLE `topic`  (
  `topic_id` int(11) NOT NULL AUTO_INCREMENT,
  `topic_picture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `topic_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`topic_id`) USING BTREE,
  UNIQUE INDEX `topic_title`(`topic_title`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of topic
-- ----------------------------

-- ----------------------------
-- Table structure for user_alert
-- ----------------------------
DROP TABLE IF EXISTS `user_alert`;
CREATE TABLE `user_alert`  (
  `user_alert_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_alert_user_id` int(11) NOT NULL,
  `user_alert_read` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_alert_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_alert_content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_alert_time` datetime(0) NOT NULL,
  PRIMARY KEY (`user_alert_id`) USING BTREE,
  INDEX `user_alert_user_id`(`user_alert_user_id`) USING BTREE,
  CONSTRAINT `user_alert_user_id` FOREIGN KEY (`user_alert_user_id`) REFERENCES `register_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_alert
-- ----------------------------

-- ----------------------------
-- Table structure for user_report
-- ----------------------------
DROP TABLE IF EXISTS `user_report`;
CREATE TABLE `user_report`  (
  `user_report_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_report_user_id` int(11) NOT NULL,
  `user_report_user_to` int(11) NOT NULL,
  `user_report_reason` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_report_time` datetime(0) NOT NULL,
  PRIMARY KEY (`user_report_id`) USING BTREE,
  INDEX `user_report_user_id`(`user_report_user_id`) USING BTREE,
  INDEX `user_report_user_to`(`user_report_user_to`) USING BTREE,
  CONSTRAINT `user_report_user_id` FOREIGN KEY (`user_report_user_id`) REFERENCES `register_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_report_user_to` FOREIGN KEY (`user_report_user_to`) REFERENCES `register_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_report
-- ----------------------------

-- ----------------------------
-- Table structure for user_subscription
-- ----------------------------
DROP TABLE IF EXISTS `user_subscription`;
CREATE TABLE `user_subscription`  (
  `user_subscription_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_subscription_from` int(11) NOT NULL,
  `user_subscription_to` int(11) NOT NULL,
  PRIMARY KEY (`user_subscription_id`) USING BTREE,
  INDEX `user_subscription_from`(`user_subscription_from`) USING BTREE,
  INDEX `user_subscription_to`(`user_subscription_to`) USING BTREE,
  CONSTRAINT `user_subscription_from` FOREIGN KEY (`user_subscription_from`) REFERENCES `register_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_subscription_to` FOREIGN KEY (`user_subscription_to`) REFERENCES `register_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_subscription
-- ----------------------------

-- ----------------------------
-- Table structure for verification_code
-- ----------------------------
DROP TABLE IF EXISTS `verification_code`;
CREATE TABLE `verification_code`  (
  `verification_code_id` int(11) NOT NULL AUTO_INCREMENT,
  `verification_code_user_id` int(11) NOT NULL,
  `verification_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `verification_etime` int(11) NOT NULL,
  `verification_used` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`verification_code_id`) USING BTREE,
  INDEX `verification_code_user_id`(`verification_code_user_id`) USING BTREE,
  CONSTRAINT `verification_code_user_id` FOREIGN KEY (`verification_code_user_id`) REFERENCES `register_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of verification_code
-- ----------------------------

-- ----------------------------
-- Table structure for web_message
-- ----------------------------
DROP TABLE IF EXISTS `web_message`;
CREATE TABLE `web_message`  (
  `web_message_id` int(11) NOT NULL AUTO_INCREMENT,
  `web_message_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `web_message_content` varchar(1500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`web_message_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of web_message
-- ----------------------------
INSERT INTO `web_message` VALUES (1, 'title', 'MDUI-Blog');
INSERT INTO `web_message` VALUES (2, 'footer', 'Powered By <a href=\'https://github.com/UtopiaXC/MDUI-Blog/\' target=\'_blank\'>MDUI-Blog</a> | Designed By <a href=\'https://www.utopiaxc.cn/\' target=\'_blank\'>UtopiaXC</a>');

-- ----------------------------
-- Triggers structure for table article
-- ----------------------------
DROP TRIGGER IF EXISTS `before_article_insert`;
delimiter ;;
CREATE TRIGGER `before_article_insert` BEFORE INSERT ON `article` FOR EACH ROW BEGIN
SET NEW.article_submit_time=NOW();
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table register_user
-- ----------------------------
DROP TRIGGER IF EXISTS `before_user_insert`;
delimiter ;;
CREATE TRIGGER `before_user_insert` BEFORE INSERT ON `register_user` FOR EACH ROW BEGIN
SET new.user_group='user',new.user_banned='false',new.user_register_time=NOW();
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table user_alert
-- ----------------------------
DROP TRIGGER IF EXISTS `before_user_alert_insert`;
delimiter ;;
CREATE TRIGGER `before_user_alert_insert` BEFORE INSERT ON `user_alert` FOR EACH ROW BEGIN
SET NEW.user_alert_read='false',NEW.user_alert_time=NOW();
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table user_report
-- ----------------------------
DROP TRIGGER IF EXISTS `before_user_report_insert`;
delimiter ;;
CREATE TRIGGER `before_user_report_insert` BEFORE INSERT ON `user_report` FOR EACH ROW BEGIN
SET NEW.user_report_time=NOW();
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table verification_code
-- ----------------------------
DROP TRIGGER IF EXISTS `before_verification_code_insert`;
delimiter ;;
CREATE TRIGGER `before_verification_code_insert` BEFORE INSERT ON `verification_code` FOR EACH ROW BEGIN
SET NEW.verification_used='false';
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
