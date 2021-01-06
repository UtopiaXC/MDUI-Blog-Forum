
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
if (getCookie("layout")!=='undefined'){
    $('body').addClass(('mdui-theme-layout-'+getCookie("layout"))); //在原来的后面加这个
}

//设置主色
if (getCookie("primary")!=='undefined'){
    $('body').addClass(('mdui-theme-primary-'+getCookie("primary"))); //在原来的后面加这个
}

//设置强调色
if (getCookie("accent")!=='undefined'){
    $('body').addClass(('mdui-theme-accent-'+getCookie("accent"))); //在原来的后面加这个
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
        window.location.href="search.html?key="+$('#search').val()
    }
})

function login(){
    let username=$("#username");
    let password=$("#password");
    if (username.val()===''||password.val()==='') {
        mdui.alert("您有未填写项目","提醒")
        return false;
    }
    $("#login_progress").show();
    $("#login").attr("disabled","true");
    $.ajax({
        url:api,
        type:"post",
        dataType:"json",
        data:{
            'function':'login',
            'username':username.val(),
            'password':md5(password.val()),
        },
        success:function (result){
            $("#login").removeAttr("disabled");
            $("#login_progress").hide();
            if (result.data.is_succeed==="false"){
                username.val("");
                password.val("");
                mdui.alert("密码或账号错误","警告");
            }
            else if (result.data.is_succeed==="true"){
                window.location.href="index.html";
            }
            else
                mdui.alert("未知错误","抱歉");
        },
        error:function (){
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

function login_check(){
    let res=false;
    $.ajax({
        url:api,
        method:"post",
        dataType:"json",
        async:false,
        data:{
            'function':'login_check'
        },
        success:function (result){
            if (result.data.is_succeed==="true"){
                res=true
            }
        },
        error:function (){
            console.log("服务器异常！")
        }
    })
    return res;
}

function add_article(){
    if (!login_check()){
        window.location.href="login.html";
        return;
    }
    window.location.href="add_article.html";

}