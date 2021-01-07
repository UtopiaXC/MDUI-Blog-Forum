/*
 Navicat Premium Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 80016
 Source Host           : localhost:3306
 Source Schema         : mduiblog

 Target Server Type    : MySQL
 Target Server Version : 80016
 File Encoding         : 65001

 Date: 07/01/2021 20:54:10
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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, 2, 1, '使用jQuery AJAX来进行网页的异步加载', '<h2>一、绪论</h2><p>在传统的动态网站中，用户在获取到网页文件之前，服务器的应用服务器（一般指PHP Server，Tomcat等）会对动态网站源代码进行编译运行，从而将运行的结果发送给用户。根据提交的表单的不同，所获得的网页文档也不尽相同。</p><p>举一个简单的例子，下面的这段代码是从MySQL数据库中获取到用户信息并打印到前端：</p><pre><code>&lt;html lang=\"zh\"&gt;\n&lt;head&gt;\n    &lt;title&gt;Test&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n&lt;?php\n$conn=new mysqli();\n$sql=\"SELECT UID,Username FROM user\";\n$result=$conn-&gt;query($sql);\nwhile ($row=$result-&gt;fetch_assoc()){\n    echo $row[\'UID\'].\":\".$row[\'Username\'];\n}\n?&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre><p>然而，无论是查询数据库还是编译运行执行相应的php代码都是需要消耗一定的时间的。而在这段时间内，用户无法获取到网站文档，浏览器也不会进行页面的渲染，只有当所有的代码被执行结束后用户才会从服务器收到相应的文档，此后浏览器才会获取css和js文件进行渲染。</p><p>显然，当一个页面内有大量的语句时，或数据库的数据量过大需要一定时间进行查询时，抑或是当网站处于高并发下都会导致用户请求到网站文档的速度下降甚至超时，严重影响用户访问体验。</p><p>因此，在这种情况下，采用异步加载可以解决部分以上问题。比如用户可以先获取到网站文档，开始加载CSS、JS、媒体资源，与此同时再去请求相应的数据达到减少加载时间的效果。</p><p><br><br></p><h2>二、什么是AJAX</h2><p>AJAX全称Asynchronous JavaScript and XML，即异步的JavaScript和XML技术。通过AJAX技术，访问者可以分批次的从服务器获取数据，即浏览器首先获取到HTML文档，然后加载文档内部的JS、CSS以及资源文件，而后通过JS访问服务器上的数据接口，访问成功后再将从接口中获取的数据展现在前端，实现异步加载</p><p><br><br></p><h2>三、使用jQuery-AJAX</h2><p>AJAX实质上是一种技术，目前有很多JS框架和库都实现了相应的AJAX方法，例如Request，Axios等等。而jQuery又是老牌的JS库，同时也是目前世界上使用范围最广泛，最热门的JS库，因此我们首选采用jQ来进行AJAX异步加载。</p><h3>1、首先，我们将jQ引入到我们的网站文件中。</h3><p>方法一、将jQ的JS文件下载到本地然后载入</p><pre><code>&lt;script src=\"/scripts/jquery.min.js\"&gt;&lt;/script&gt;</code></pre><p>方法二、通过CDN在线引入</p><pre><code>&lt;script src=\"https://code.jquery.com/jquery-3.3.1.min.js\"&gt;&lt;/script&gt;</code></pre><p>方法三、通过npm安装</p><pre><code>$ npm install jquery</code></pre><h3>2、编写代码</h3><p>同样的，我们依旧以上面的例子为基础，改写它让他成为异步加载的站点。首先，我们需要将用户请求的页面写出来，起名为index.html</p><pre><code>&lt;html lang=\"zh\"&gt;\n&lt;head&gt;\n    &lt;title&gt;Test&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n\n&lt;/body&gt;\n&lt;/html&gt;</code></pre><p>第二步，引入jQ库，这里我们采用CDN的方式</p><pre><code>&lt;html lang=\"zh\"&gt;\n&lt;head&gt;\n    &lt;title&gt;Test&lt;/title&gt;\n    &lt;script src=\"https://code.jquery.com/jquery-3.3.1.min.js\"&gt;&lt;/script&gt;\n&lt;/head&gt;\n&lt;body&gt;\n\n&lt;/body&gt;\n&lt;/html&gt;</code></pre><p>第三步，写出用于获取信息的接口，注意，这里请求的可以是任何资源，包括HTML文档，JS文件，二进制图片流等等。为了简单方便，我们先用php返回一个HTML文档作为返回数据。 新建一个php文档，命名为api.php，然后在上面写入内容</p><pre><code>&lt;?php\n$conn=new mysqli();\n$sql=\"SELECT UID,Username FR\".\"OM user\";//把FR/OM拆开是因为被防火墙拦截了（雾\n$result=$conn-&gt;query($sql);\nwhile ($row=$result-&gt;fetch_assoc()){\n    echo $row[\'UID\'].\":\".$row[\'Username\'];\n}</code></pre><p>第四步，采用AJAX请求接口<br>jQ-AJAX语法：</p><pre><code>$.ajax({name:value, name:value, ... })</code></pre><p>实例：将jQ-AJAX写入到index.html</p><pre><code>&lt;html lang=\"zh\"&gt;\n&lt;head&gt;\n    &lt;title&gt;Test&lt;/title&gt;\n    &lt;script src=\"https://code.jquery.com/jquery-3.3.1.min.js\"&gt;&lt;/script&gt;\n&lt;/head&gt;\n&lt;body&gt;\n\n&lt;/body&gt;\n&lt;script&gt;\n    $.ajax({                                //这里开始是jQ的AJAX请求函数\n        url: \"api.php\",                     //URL参数意味着请求目标\n        success: function (result) {        //success为请求成功后执行的内容，这里利用一个匿名函数执行。result是异步请求到的内容\n            console.log(result)             //在控制台上打印出请求到的内容\n        },\n        error:function (){                  //如果请求失败则执行该部分下的内容\n\n        }\n    });\n&lt;/script&gt;\n&lt;/html&gt;</code></pre><p>到这里，我们就可以看到在控制台上输出的来自api.php的内容了。</p><p>第五步，对数据进行使用</p><p>我们已经从接口中获取到了数据，接下来我们在success中对这些数据进行利用就可以了，比如将他们打印到HTML页面上</p><pre><code>&lt;head&gt;\n    &lt;title&gt;Test&lt;/title&gt;\n    &lt;script src=\"https://code.jquery.com/jquery-3.3.1.min.js\"&gt;&lt;/script&gt;\n    &lt;script src=\"https://cdn.jsdelivr.net/npm/vue/dist/vue.js\"&gt;&lt;/script&gt;\n&lt;/head&gt;\n&lt;body&gt;\n&lt;p id=\"content_js\"&gt;&lt;/p&gt;\n&lt;p id=\"content_jQ\"&gt;&lt;/p&gt;\n&lt;p id=\"content_VUE\"&gt;{{message}}&lt;/p&gt;\n&lt;/body&gt;\n&lt;script&gt;\n    $.ajax({                                //这里开始是jQ的AJAX请求函数\n        url: \"api.php\",                     //URL参数意味着请求目标\n        success: function (result) {        //success为请求成功后执行的内容，这里利用一个匿名函数执行。result是异步请求到的内容\n            console.log(result);            //在控制台上打印出请求到的内容\n            document.getElementById(\"content_js\")\n                .innerText=result;          //利用js将获得的数据赋给页面的元素\n            $(\"#content_jQ\").html(result);  //利用jQ将获得的数据赋给页面的元素\n            new Vue({                       //利用VUE将获得的数据赋给页面的元素\n                el: \'#content_VUE\',\n                data: {\n                    message: result\n                }\n            })\n\n        },\n        error:function (){                  //如果请求失败则执行该部分下的内容\n\n        }\n    });\n&lt;/script&gt;\n&lt;/html&gt;</code></pre><h2>四、利用AJAX获取JSON格式的数据</h2><p>我们首先新建一个用于输出JSON格式的类，起名为Response.php</p><pre><code>class Response {\n    public static function json($code, $message = \'\', $data = []){\n        $result = [\n            \"code\" =&gt; $code,\n            \"message\" =&gt; $message,\n            \"data\" =&gt; $data\n        ];\n        //API返回格式\n        header(\'Content-Type:text/json;charset=utf-8\');\n        echo json_encode($result);\n        exit;\n    }\n}</code></pre><p>然后，在api.php中，采用json格式将数据返回</p><pre><code>&lt;?php\nrequire_once \"Response.php\";\n\n$conn = new mysqli();\n$sql = \"SELECT UID,Username FR\" . \"OM user\";//把FR/OM拆开是因为被防火墙拦截了（雾\n$result = $conn-&gt;query($sql);\n$arr = [];\n$data = [];\n$count = $result-&gt;num_rows;\n$data += [\"count\" =&gt; $count];\nwhile ($row = $result-&gt;fetch_assoc()) {\n    array_push($arr, $row);\n}\nResponse::json(200, \"API successfully called\", $arr);\nexit(0);</code></pre><p>最后，我们利用AJAX和JS将他们展现在页面上</p><pre><code>&lt;html lang=\"zh\"&gt;\n&lt;head&gt;\n    &lt;title&gt;Test&lt;/title&gt;\n    &lt;script src=\"https://code.jquery.com/jquery-3.3.1.min.js\"&gt;&lt;/script&gt;\n    &lt;script src=\"https://cdn.jsdelivr.net/npm/vue/dist/vue.js\"&gt;&lt;/script&gt;\n&lt;/head&gt;\n&lt;body&gt;\n&lt;p id=\"content_js\"&gt;&lt;/p&gt;\n&lt;p id=\"content_jQ\"&gt;&lt;/p&gt;\n&lt;p id=\"content_VUE\"&gt;{{message}}&lt;/p&gt;\n&lt;/body&gt;\n&lt;script&gt;\n    $.ajax({                                //这里开始是jQ的AJAX请求函数\n        url: \"api.php\",                     //URL参数意味着请求目标\n        success: function (result) {        //success为请求成功后执行的内容，这里利用一个匿名函数执行。result是异步请求到的内容\n            var content=\"\";                 //利用一个变量保存即将输出的内容\n            for (i=0;i&lt;result.data.count;i++){  //将返回的数据循环读出\n                content+=result.data[i].UID+\":\"+result.data[i].Username;    //读出所有的data内容\n            }\n            console.log(content);            //在控制台上打印出请求到的内容\n            document.getElementById(\"content_js\")\n                .innerText=content;          //利用js将获得的数据赋给页面的元素\n            $(\"#content_jQ\").html(content);  //利用jQ将获得的数据赋给页面的元素\n            new Vue({                       //利用VUE将获得的数据赋给页面的元素\n                el: \'#content_VUE\',\n                data: {\n                    message: content\n                }\n            })\n\n        },\n        error:function (){                  //如果请求失败则执行该部分下的内容\n\n        }\n    });\n&lt;/script&gt;\n&lt;/html&gt;</code></pre><h2>五、利用AJAX发送POST请求</h2><p>我们只需要给ajax函数中添加一个method参数就可以实现使用GET、POST、PUT的方式进行异步请求。同时，利用一个data参数为表单设置内容。</p><pre><code>&lt;html lang=\"zh\"&gt;\n&lt;head&gt;\n    &lt;title&gt;Test&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n&lt;/body&gt;\n&lt;script&gt;\n    $.ajax({                                //这里开始是jQ的AJAX请求函数\n        url: \"api.php\",                     //URL参数意味着请求目标\n        method:\"post\",                      //请求方式\n        data:{                              //表单内容\n            \"UID\":123,\n            \"Username\":\"admin\"\n        },\n        success: function (result) {\n        },\n        error:function (){\n\n        }\n    });\n&lt;/script&gt;\n&lt;/html&gt;</code></pre><h2>六、注意</h2><p>不要忘记在AJAX中的各个参数之间加上半角逗号。</p><h2>七、附录：jQ-AJAX的参数（转自<a href=\"https://www.runoob.com/jquery/ajax-ajax.html\" target=\"_blank\">菜鸟教程</a>）</h2><table><tbody><tr><td>async</td><td>布尔值，表示请求是否异步处理。默认是 true。</td></tr><tr><td>beforeSend(<em>xhr</em>)</td><td>发送请求前运行的函数。</td></tr><tr><td>cache</td><td>布尔值，表示浏览器是否缓存被请求页面。默认是 true。</td></tr><tr><td>complete(<em>xhr,status</em>)</td><td>请求完成时运行的函数（在请求成功或失败之后均调用，即在 success 和 error 函数之后）。</td></tr><tr><td>contentType</td><td>发送数据到服务器时所使用的内容类型。默认是：\"application/x-www-form-urlencoded\"。</td></tr><tr><td>context</td><td>为所有 AJAX 相关的回调函数规定 \"this\" 值。</td></tr><tr><td>data</td><td>规定要发送到服务器的数据。</td></tr><tr><td>dataFilter(<em>data</em>,<em>type</em>)</td><td>用于处理 XMLHttpRequest 原始响应数据的函数。</td></tr><tr><td>dataType</td><td>预期的服务器响应的数据类型。</td></tr><tr><td>error(<em>xhr,status,error</em>)</td><td>如果请求失败要运行的函数。</td></tr><tr><td>global</td><td>布尔值，规定是否为请求触发全局 AJAX 事件处理程序。默认是 true。</td></tr><tr><td>ifModified</td><td>布尔值，规定是否仅在最后一次请求以来响应发生改变时才请求成功。默认是 false。</td></tr><tr><td>jsonp</td><td>在一个 jsonp 中重写回调函数的字符串。</td></tr><tr><td>jsonpCallback</td><td>在一个 jsonp 中规定回调函数的名称。</td></tr><tr><td>password</td><td>规定在 HTTP 访问认证请求中使用的密码。</td></tr><tr><td>processData</td><td>布尔值，规定通过请求发送的数据是否转换为查询字符串。默认是 true。</td></tr><tr><td>scriptCharset</td><td>规定请求的字符集。</td></tr><tr><td>success(<em>result,status,xhr</em>)</td><td>当请求成功时运行的函数。</td></tr><tr><td>timeout</td><td>设置本地的请求超时时间（以毫秒计）。</td></tr><tr><td>traditional</td><td>布尔值，规定是否使用参数序列化的传统样式。</td></tr><tr><td>type</td><td>规定请求的类型（GET 或 POST）。</td></tr><tr><td>url</td><td>规定发送请求的 URL。默认是当前页面。</td></tr><tr><td>username</td><td>规定在 HTTP 访问认证请求中使用的用户名。</td></tr><tr><td>xhr</td><td>用于创建 XMLHttpRequest 对象的函数。</td></tr></tbody></table>', '2021-01-07 20:41:26', '2021-01-07 20:41:26');

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of register_user
-- ----------------------------
INSERT INTO `register_user` VALUES (1, 'admin', 'admin@admin.com', '6a2543bb4e46819d7d0827e531a4c269', 'admin', 'false', '2021-01-05 23:52:02', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `register_user` VALUES (2, 'UtopiaXC', 'dys1025@sina.com', '948cb37e3d69840d2ebddaa0f5e2121e', 'user', 'false', '2021-01-07 20:32:06', NULL, NULL, NULL, NULL, NULL, NULL);

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of session
-- ----------------------------
INSERT INTO `session` VALUES (5, 1, '79333f911b844983cf7030c17df8fd7b', '0:0:0:0:0:0:0:1', 1610023417, 1612615417);

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of topic
-- ----------------------------
INSERT INTO `topic` VALUES (1, 'https://s3.ax1x.com/2020/11/21/D3nlKs.jpg', '测试');

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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
SET NEW.article_submit_time=NOW(),NEW.article_edit_time=NOW();
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
