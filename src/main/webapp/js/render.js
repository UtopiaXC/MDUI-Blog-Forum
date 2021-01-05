const api="http://localhost/api";



$(function (){
    //添加主题选择器
    $.get('render/dialog-theme.html',function(theme){
        $("body").append(theme);
    });

})

const page_title = new Vue({
    el: '#page_title',
    data: {
        page_title: '主页'
    }
});

const site_name = new Vue({
    el: '#site_name',
    data: {
        site_name: 'Blog'
    }
});

const account=new Vue({
    el:"#account",
    data:{
        account:"<a href='login.html' class='mdui-list-item mdui-ripple'>登录</a>" +
            "<a href='register.html' class='mdui-list-item mdui-ripple'>注册</a>" +
            "<a href='find_password.html' class='mdui-list-item mdui-ripple'>找回密码</a>"
    }
})

const footer = new Vue({
    el: '#footer',
    data: {
        footer: 'Powered By <a target="_blank" href="https://github.com/UtopiaXC/MDUI-Blog-Forum">MDUI Blog Forum</a> Designed By <a target="_blank" href="https://www.utopiaxc.cn/">UtopiaXC</a>'
    }
});

$.ajax({
    url:api,
    method:"post",
    dataType:"json",
    data:{
        'function':'login_check'
    },
    success:function (result){
        if (result.data.is_succeed!=="false"){
            account.$data.account="<a href='user_center.html' class='mdui-list-item mdui-ripple'>个人中心</a>" +
                "<a href='user_account.html' class='mdui-list-item mdui-ripple'>账号设置</a>";
        }else{

        }
    },
    error:function (){
        console.log("服务器异常！")
    }
})