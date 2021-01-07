//页面渲染
$(function () {
    var $document = $(document);

    // 代码高亮
    hljs.initHighlightingOnLoad();

    // 页面滚动
    var scroll = new SmoothScroll('[data-scroll]', {
        speed: 300,
        speedAsDuration: true
    });

    $('.mdui-toolbar-spacer').on('click', function () {
        scroll.animateScroll(0);
    });

    // 图片占位符
    Holder.addTheme("gray", {
        bg: "#BCBEC0",
        fg: "rgba(255, 255, 255, 1)",
        size: 12,
        fontweight: "normal"
    });

    // 示例处理
    $('.viewsource').on('click', function () {
        var $this = $(this);
        $this.parents('.doc-example').eq(0).toggleClass('doc-example-showcode');
    });

    /**
     * 设置文档主题
     */
    var DEFAULT_PRIMARY = '';
    var DEFAULT_ACCENT = '';
    var DEFAULT_LAYOUT = '';

    // 设置 cookie
    var setCookie = function (key, value) {
        // cookie 有效期为 1 年
        var date = new Date();
        date.setTime(date.getTime() + 365 * 24 * 3600 * 1000);
        document.cookie = key + '=' + value + '; expires=' + date.toGMTString() + '; path=/';
    };

    //设置主题
    var setDocsTheme = function (theme) {
        if (typeof theme.primary === 'undefined') {
            theme.primary = false;
        }
        if (typeof theme.accent === 'undefined') {
            theme.accent = false;
        }
        if (typeof theme.layout === 'undefined') {
            theme.layout = false;
        }

        var i, len;
        var $body = $('body');

        var classStr = $body.attr('class');
        var classs = classStr.split(' ');

        // 设置主色
        if (theme.primary !== false) {
            for (i = 0, len = classs.length; i < len; i++) {
                if (classs[i].indexOf('mdui-theme-primary-') === 0) {
                    $body.removeClass(classs[i])
                }
            }
            $body.addClass('mdui-theme-primary-' + theme.primary);
            setCookie('primary', theme.primary);
            $('input[name="doc-theme-primary"][value="' + theme.primary + '"]').prop('checked', true);
        }

        // 设置强调色
        if (theme.accent !== false) {
            for (i = 0, len = classs.length; i < len; i++) {
                if (classs[i].indexOf('mdui-theme-accent-') === 0) {
                    $body.removeClass(classs[i]);
                }
            }
            $body.addClass('mdui-theme-accent-' + theme.accent);
            setCookie('accent', theme.accent);
            $('input[name="doc-theme-accent"][value="' + theme.accent + '"]').prop('checked', true);
        }

        // 设置主题色
        if (theme.layout !== false) {
            for (i = 0, len = classs.length; i < len; i++) {
                if (classs[i].indexOf('mdui-theme-layout-') === 0) {
                    $body.removeClass(classs[i]);
                }
            }
            $body.addClass('mdui-theme-layout-' + theme.layout);
            setCookie('layout', theme.layout);
            $('input[name="doc-theme-layout"][value="' + theme.layout + '"]').prop('checked', true);
        }
    };

    // 切换主色
    $document.on('change', 'input[name="doc-theme-primary"]', function () {
        setDocsTheme({
            primary: $(this).val()
        });
    });

    // 切换强调色
    $document.on('change', 'input[name="doc-theme-accent"]', function () {
        setDocsTheme({
            accent: $(this).val()
        });
    });

    // 切换主题色
    $document.on('change', 'input[name="doc-theme-layout"]', function () {
        setDocsTheme({
            layout: $(this).val()
        });
    });

    // 恢复默认主题
    $document.on('cancel.mdui.dialog', '#dialog-theme', function () {
        setDocsTheme({
            primary: DEFAULT_PRIMARY,
            accent: DEFAULT_ACCENT,
            layout: DEFAULT_LAYOUT
        });
    });

    // 如果抽屉栏当前激活项不在视野中，则滚动抽屉栏，使激活项位于垂直居中
    (function () {
        var $drawer = $('#main-drawer');
        var $activeItem = $drawer.find('.mdui-list-item-active');

        if (!$activeItem.length) {
            return;
        }

        var activeItemOffsetTop = $activeItem.offset().top;
        var drawerHeight = $drawer.innerHeight();

        if (activeItemOffsetTop - 64 < 0 || activeItemOffsetTop - 64 + 238 > drawerHeight) {
            $drawer[0].scrollTop = activeItemOffsetTop + $drawer[0].scrollTop - drawerHeight / 2;
        }
    })();
});

//获取get参数的方法
(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    }
})(jQuery);

//设置布局主题
if (getCookie("layout") !== 'undefined') {
    $('body').addClass(('mdui-theme-layout-' + getCookie("layout"))); //在原来的后面加这个
}

//设置主色
if (getCookie("primary") !== 'undefined') {
    $('body').addClass(('mdui-theme-primary-' + getCookie("primary"))); //在原来的后面加这个
}

//设置强调色
if (getCookie("accent") !== 'undefined') {
    $('body').addClass(('mdui-theme-accent-' + getCookie("accent"))); //在原来的后面加这个
}

//获取cookie的方法
function getCookie(cookie_name) {
    let allcookies = document.cookie;
    let value;
    let cookie_pos = allcookies.indexOf(cookie_name);
    if (cookie_pos !== -1) {
        cookie_pos += cookie_name.length + 1;
        let cookie_end = allcookies.indexOf(";", cookie_pos);

        if (cookie_end === -1) {
            cookie_end = allcookies.length;
        }

        value = unescape(allcookies.substring(cookie_pos, cookie_end));
    }
    return value;
}

//按键监听
$("#search").keypress(function (e) {
    if (e.which === 13) {
        window.location.href = "search.html?key=" + $('#search').val()
    }
})

function login() {
    let username = $("#username");
    let password = $("#password");
    if (username.val() === '' || password.val() === '') {
        mdui.alert("您有未填写项目", "提醒")
        return false;
    }
    $("#login_progress").show();
    $("#login").attr("disabled", "true");
    $.ajax({
        url: api,
        type: "post",
        dataType: "json",
        data: {
            'function': 'login',
            'username': username.val(),
            'password': md5(password.val()),
        },
        success: function (result) {
            $("#login").removeAttr("disabled");
            $("#login_progress").hide();
            if (result.data.is_succeed === "false") {
                username.val("");
                password.val("");
                mdui.alert("密码或账号错误", "警告");
            } else if (result.data.is_succeed === "true") {
                window.location.href = "index.html";
            } else
                mdui.alert("未知错误", "抱歉");
        },
        error: function () {
            $("#login").removeAttr("disabled");
            $("#login_progress").hide();
        }
    })
}

function logout() {
    mdui.confirm('是否确定退出？', '提醒', function () {
        $.ajax({
            type: "POST",
            url: api,
            dataType: "json",
            data: {
                "function": "logout"
            },
            success: function () {
                document.cookie = "token" + "=" + "" + "; " + "-1";
                window.location = "/";
            }
        });
    });
}

function login_check() {
    let res = false;
    $.ajax({
        url: api,
        method: "post",
        dataType: "json",
        async: false,
        data: {
            'function': 'login_check'
        },
        success: function (result) {
            if (result.data.is_succeed === "true") {
                res = true
            }
        },
        error: function () {
            console.log("服务器异常！")
        }
    })
    return res;
}

function add_article() {
    if (!login_check()) {
        window.location.href = "login.html";
        return;
    }
    window.location.href = "add_article.html";

}

function draw_admin() {
    $.ajax({
        url: api,
        method: "post",
        dataType: "json",
        data: {
            "function": "draw_admin",
        },
        success: function (result) {
            //管理员用户信息设置
            $("#admin_name").append(result.data.admin_name);

            //网站信息设置
            for (i = 0; i < result.data.web_messages_count; i++) {
                if (result.data.web_messages[i].web_message_title === "title") {
                    $("#web_title").val(result.data.web_messages[i].web_message_content);
                }
                if (result.data.web_messages[i].web_message_title === "footer") {
                    $("#web_footer").val(result.data.web_messages[i].web_message_content);
                }
            }

            //话题设置
            for (i = 0; i < result.data.topics_count; i++) {
                $("#topics").append('<div id="div_topic_' + result.data.topics[i].topic_id + '" class="mdui-panel-item">\n' +
                    '                    <div class="mdui-panel-item-header">\n' +
                    '                        <div class="mdui-panel-item-title">' + result.data.topics[i].topic_title + '</div>\n' +
                    '                        <div class="mdui-panel-item-summary">ID：<span id="topic_id_old_' + result.data.topics[i].topic_id + '">' + result.data.topics[i].topic_id + '</span></div>\n' +
                    '                        <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>\n' +
                    '                    </div>\n' +
                    '                    <div class="mdui-panel-item-body">\n' +
                    '                        <div class="mdui-textfield">\n' +
                    '                            <label>\n' +
                    '                                <input id="new_topic_title_' + result.data.topics[i].topic_id + '" class="mdui-textfield-input" type="text" placeholder="话题名" value="' + result.data.topics[i].topic_title + '"/>\n' +
                    '                            </label>\n' +
                    '                        </div>\n' +
                    '                        <div class="mdui-textfield">\n' +
                    '                            <label>\n' +
                    '                                <input id="new_topic_pic_' + result.data.topics[i].topic_id + '" class="mdui-textfield-input" type="text" placeholder="话题封面" value="' + result.data.topics[i].topic_picture + '"/>\n' +
                    '                            </label>\n' +
                    '                        </div>\n' +
                    '                        <div class="mdui-panel-item-actions">\n' +
                    '                            <button id="button_cancel_new_topic_' + result.data.topics[i].topic_id + '" class="mdui-btn mdui-ripple" mdui-panel-item-close>取消\n' +
                    '                            </button>\n' +
                    '                            <button onclick="delete_tpoic(' + result.data.topics[i].topic_id + ');" class="mdui-btn mdui-ripple">删除</button>\n' +
                    '                            <button onclick="update_tpoic(' + result.data.topics[i].topic_id + ');" class="mdui-btn mdui-ripple">修改</button>\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                </div>')
            }

            //文章管理设置
            for (i = 0; i < result.data.articles_count; i++) {
                $("#articles").append('<tr id="article_id_' + result.data.articles[i].article_id + '">\n' +
                    '                        <td>' + result.data.articles[i].article_id + '</td>\n' +
                    '                        <td>' + result.data.articles[i].article_title + '</td>\n' +
                    '                        <td>' + result.data.articles[i].article_topic_id + '</td>\n' +
                    '                        <td>' + result.data.articles[i].article_user_id + '</td>\n' +
                    '                        <td>' + result.data.articles[i].article_submit_time + '</td>\n' +
                    '                        <td>' + result.data.articles[i].article_edit_time + '</td>\n' +
                    '                        <td style="cursor: pointer" onclick="delete_article(' + result.data.articles[i].article_id + ')"><i class="mdui-icon material-icons">clear</i></td>\n' +
                    '                    </tr>');
            }

            //用户管理
            for (i = 0; i < result.data.users_count; i++) {
                $("#users").append('<tr>\n' +
                    '                        <td>' + result.data.users[i].user_id + '</td>\n' +
                    '                        <td>' + result.data.users[i].user_name + '</td>\n' +
                    '                        <td>' + result.data.users[i].user_email + '</td>\n' +
                    '                        <td>' + result.data.users[i].user_banned + '</td>\n' +
                    '                        <td>' + result.data.users[i].user_group + '</td>\n' +
                    '                        <td style="cursor: pointer" onclick="ban_user(' + result.data.users[i].user_id + ')"><i class="mdui-icon material-icons">do_not_disturb</i></td>\n' +
                    '                    </tr>');
            }
            $("#drawing_progress").hide()
        },
        error: function () {
            $("#drawing_progress").hide()
        }
    })
}

function add_new_topic() {
    let topic_name = $("#new_topic_title").val();
    let topic_picture = $("#new_topic_pic").val();
    if (topic_name === "" || topic_picture === "") {
        mdui.alert("请不要留空", "抱歉");
        return;
    }
    var pattern = /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+(jpg|png)$/;
    if (!pattern.test(topic_picture)) {
        mdui.alert("请输入正确的图片地址", "抱歉");
        return;
    }
    $.ajax({
        url: api,
        method: "post",
        dataType: "json",
        data: {
            "function": "add_new_topic",
            "new_topic_title": topic_name,
            "new_topic_pic": topic_picture
        },
        success: function (result) {
            if (result.data.is_succeed === "false") {
                mdui.alert("话题已存在或服务器错误", "抱歉")
            } else {
                $("#topics").append('<div id="div_topic_' + result.data.topic_id  + '" class="mdui-panel-item">\n' +
                    '                    <div class="mdui-panel-item-header">\n' +
                    '                        <div class="mdui-panel-item-title">' + topic_name + '</div>\n' +
                    '                        <div class="mdui-panel-item-summary">ID：<span id="topic_id_old_' + result.data.topic_id + '">' + result.data.topic_id + '</span></div>\n' +
                    '                        <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>\n' +
                    '                    </div>\n' +
                    '                    <div class="mdui-panel-item-body">\n' +
                    '                        <div class="mdui-textfield">\n' +
                    '                            <label>\n' +
                    '                                <input id="new_topic_title_' + result.data.topic_id + '" class="mdui-textfield-input" type="text" placeholder="话题名" value="' + topic_name + '"/>\n' +
                    '                            </label>\n' +
                    '                        </div>\n' +
                    '                        <div class="mdui-textfield">\n' +
                    '                            <label>\n' +
                    '                                <input id="new_topic_pic_' + result.data.topic_id + '" class="mdui-textfield-input" type="text" placeholder="话题封面" value="' + topic_picture + '"/>\n' +
                    '                            </label>\n' +
                    '                        </div>\n' +
                    '                        <div class="mdui-panel-item-actions">\n' +
                    '                            <button id="button_cancel_new_topic_' + result.data.topic_id + '" class="mdui-btn mdui-ripple" mdui-panel-item-close>取消\n' +
                    '                            </button>\n' +
                    '                            <button onclick="delete_tpoic(' + result.data.topic_id + ');" class="mdui-btn mdui-ripple">删除</button>\n' +
                    '                            <button onclick="update_tpoic(' + result.data.topic_id + ');" class="mdui-btn mdui-ripple">修改</button>\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                </div>')
            }
        },
        error: function () {

        }
    })
}

function update_title() {
    let web_title = $("#web_title").val();
    if (web_title === "") {
        mdui.alert("不能为空", "抱歉")
        return
    }
    $.ajax({
        url: api,
        method: "post",
        dataType: "json",
        data: {
            "function": "update_web_title",
            "web_title": web_title
        },
        success: function (result) {
            if (result.data.is_succeed === "true") {
                mdui.alert("修改完成，请刷新查看", "完成")
            } else {
                mdui.alert("修改失败", "抱歉")
            }
        },
        error: function () {
            mdui.alert("服务器错误", "抱歉")
        }
    })
}

function update_footer() {
    let web_footer = $("#web_footer").val();
    if (web_footer === "") {
        mdui.alert("不能为空", "抱歉")
        return
    }
    $.ajax({
        url: api,
        method: "post",
        dataType: "json",
        data: {
            "function": "update_web_footer",
            "web_footer": web_footer
        },
        success: function (result) {
            if (result.data.is_succeed === "true") {
                mdui.alert("修改完成，请刷新查看", "完成")
            } else {
                mdui.alert("修改失败", "抱歉")
            }
        },
        error: function () {
            mdui.alert("服务器错误", "抱歉")
        }
    })
}

function delete_tpoic(topic_id) {
    mdui.confirm('该话题下所有文章将同步删除！确认删除？', '警告', function () {
        $.ajax({
            url: api,
            method: "post",
            dataType: "json",
            data: {
                "function": "delete_topic",
                "topic_id": topic_id
            },
            success: function (result) {
                if (result.data.is_succeed === "true") {
                    mdui.alert("删除成功", "完成")
                    $("#div_topic_"+topic_id).remove()
                } else {
                    mdui.alert("删除失败", "抱歉")
                }
            },
            error: function () {
                mdui.alert("服务器错误", "抱歉")
            }
        })
    });
}

function delete_article(article_id){
    mdui.confirm('确认删除？', '警告', function () {
        $.ajax({
            url: api,
            method: "post",
            dataType: "json",
            data: {
                "function": "delete_article",
                "article_id": article_id
            },
            success: function (result) {
                if (result.data.is_succeed === "true") {
                    mdui.alert("删除成功", "完成")
                    $("#article_id_"+article_id).remove()
                } else {
                    mdui.alert("删除失败", "抱歉")
                }
            },
            error: function () {
                mdui.alert("服务器错误", "抱歉")
            }
        })
    });
}