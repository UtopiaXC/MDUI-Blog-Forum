/*
 * Author:UtopiaXC
 * Created Time:2020/12/21-12:08
 * Created By Idea 2020.3
 * Usage:API的函数集
 * */
package com.utopiaxc.mduiblog.utils;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.utopiaxc.mduiblog.bean.*;
import com.utopiaxc.mduiblog.service.*;
import com.utopiaxc.mduiblog.service.impl.*;

import javax.servlet.Registration;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Random;
import java.util.Vector;

public class ApiUtil {

    public static JSONObject login_check(HttpServletRequest request) {
        //连接Service层
        ServiceSession serviceSession= null;
        try {
            serviceSession = new ServiceSessionImpl();
        } catch (Exception e) {
            //返回的数据
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }

        //返回的数据
        JSONObject data=new JSONObject();
        //获得并返回登录检查数据
        if (serviceSession.is_login(request)) {
            data.put("user_id",serviceSession.get_logged_user(request).getSession_user_id());
            data.put("is_succeed", "true");
        }
        else
            data.put("is_succeed","false");
        return data;
    }

    public static JSONObject register(HttpServletRequest request) {
        ServiceRegisterUser serviceRegisterUser=null;
        try{
            serviceRegisterUser=new ServiceRegisterUserImpl();
        }catch (Exception e){
            //返回的数据
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }

        //返回的数据
        JSONObject data=new JSONObject();
        //获得并返回登录检查数据
        if (serviceRegisterUser.is_register_success(request))
            data.put("is_succeed","true");
        else {
            data.put("is_succeed", "false");
        }
        return data;
    }

    public static JSONObject login(HttpServletRequest request, HttpServletResponse response) throws Exception{
        //连接Service层
        ServiceRegisterUser serviceRegisterUser=null;
        ServiceSession serviceSession=null;
        try {
            serviceRegisterUser=new ServiceRegisterUserImpl();
            serviceSession=new ServiceSessionImpl();
        }catch (Exception e){
            //返回的数据
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }


        BeanRegisterUser beanRegisterUser=serviceRegisterUser.do_login(request);
        if (beanRegisterUser!=null){
            serviceSession.do_login(beanRegisterUser,response,request);
            JSONObject data=new JSONObject();
            data.put("is_succeed","true");
            return data;
        }else{
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            return data;
        }

    }

    public static JSONObject logout(HttpServletRequest request) {
        //连接Service层
        ServiceSession serviceSession=null;
        try {
            serviceSession=new ServiceSessionImpl();
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }
        serviceSession.do_logout(request);
        JSONObject data=new JSONObject();
        data.put("is_succeed","true");
        return data;
    }

    public static JSONObject get_topics() {
        //连接Service层
        ServiceTopic serviceTopic=null;
        try {
            serviceTopic=new ServiceTopicImpl();
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }

        Vector<BeanTopic> topics=serviceTopic.get_topics();
        JSONObject data=new JSONObject();
        data.put("is_succeed","true");
        data.put("topics",topics.toArray());
        data.put("topics_count",topics.size());
        return data;
    }

    public static JSONObject add_article(HttpServletRequest request) {
        ServiceSession serviceSession;
        ServiceTopic serviceTopic;
        ServiceArticle serviceArticle;
        try {
            JSONObject data=new JSONObject();
            serviceArticle=new ServiceArticleImpl();
            serviceSession=new ServiceSessionImpl();
            serviceTopic=new ServiceTopicImpl();
            BeanSession beanSession=serviceSession.get_logged_user(request);
            if (beanSession==null){
                data.put("is_succeed","false");
                data.put("error_cause","您未登录");
                return data;
            }
            BeanTopic beanTopic=serviceTopic.get_topic(request.getParameter("article_topic_name"));
            if (beanTopic==null){
                data.put("is_succeed","false");
                data.put("error_cause","错误的话题");
                return data;
            }
            BeanArticle beanArticle=new BeanArticle();
            beanArticle.setArticle_content(request.getParameter("article_content"));
            beanArticle.setArticle_title(request.getParameter("article_title"));
            beanArticle.setArticle_topic_id(beanTopic.getTopic_id());
            beanArticle.setArticle_user_id(beanSession.getSession_user_id());
            beanArticle=serviceArticle.add_article(beanArticle);
            if (beanArticle==null){
                data.put("is_succeed","false");
                data.put("error_cause","服务器错误");
                return data;
            }
            data.put("is_succeed","true");
            data.put("article_id",beanArticle.getArticle_id());
            return data;
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }
    }

    public static JSONObject get_web_message() {
        ServiceWebMessage serviceWebMessage;
        try {
            serviceWebMessage=new ServiceWebMessageImpl();
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }
        Vector<BeanWebMessage> beanWebMessages=serviceWebMessage.get_web_messages();

        JSONObject data=new JSONObject();
        data.put("is_succeed","true");
        data.put("web_messages_count",beanWebMessages.size());
        data.put("web_messages",beanWebMessages.toArray());
        return data;
    }

    public static JSONObject admin_check(HttpServletRequest request) {
        //连接Service层
        ServiceSession serviceSession= null;
        try {
            serviceSession = new ServiceSessionImpl();
        } catch (Exception e) {
            //返回的数据
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }

        //返回的数据
        JSONObject data=new JSONObject();
        //获得并返回登录检查数据
        if (serviceSession.is_login_admin(request))
            data.put("is_succeed","true");
        else
            data.put("is_succeed","false");
        return data;
    }

    public static JSONObject get_index(HttpServletRequest request) {
        ServiceArticle serviceArticle;
        ServiceTopic serviceTopic;
        ServiceRegisterUser serviceRegisterUser;
        try{
            serviceArticle=new ServiceArticleImpl();
            serviceTopic=new ServiceTopicImpl();
            serviceRegisterUser=new ServiceRegisterUserImpl();
            Vector<BeanTopic> topics=serviceTopic.get_index_topics();
            Vector<BeanArticle> articles=serviceArticle.get_latest_article();
            Vector<BeanArticle> hot_articles=serviceArticle.get_hot_article();
            Vector<BeanRegisterUser> users=serviceRegisterUser.get_random_users();
            JSONObject data=new JSONObject();
            data.put("is_succeed","true");
            data.put("topics_count",topics.size());
            data.put("topics",topics.toArray());
            data.put("articles_count",articles.size());
            data.put("articles",articles.toArray());
            data.put("hot_articles_count",hot_articles.size());
            data.put("hot_articles",hot_articles.toArray());
            data.put("users_count",users.size());
            data.put("users",users.toArray());
            return data;
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }
    }

    public static JSONObject get_article(HttpServletRequest request) {
        ServiceArticle serviceArticle;
        ServiceRegisterUser serviceRegisterUser;
        ServiceArticleComment serviceArticleComment;
        ServiceTopic serviceTopic;
        ServiceArticleLike serviceArticleLike;
        try{
            serviceArticle=new ServiceArticleImpl();
            serviceRegisterUser=new ServiceRegisterUserImpl();
            serviceArticleComment=new ServiceArticleCommentImpl();
            serviceTopic=new ServiceTopicImpl();
            serviceArticleLike=new ServiceArticleLikeImpl();

            BeanArticle beanArticle=serviceArticle.get_article_bu_id(request);
            if (beanArticle==null){
                JSONObject data=new JSONObject();
                data.put("is_succeed","false");
                data.put("error_cause","article_id_404");
                return data;
            }
            BeanTopic beanTopic=serviceTopic.get_topic_by_id(beanArticle.getArticle_topic_id());
            if (beanTopic==null){
                JSONObject data=new JSONObject();
                data.put("is_succeed","false");
                data.put("error_cause","topic_404");
                return data;
            }
            BeanRegisterUser beanRegisterUser=serviceRegisterUser.get_user_by_id(beanArticle.getArticle_user_id());
            if (beanRegisterUser==null){
                JSONObject data=new JSONObject();
                data.put("is_succeed","false");
                data.put("error_cause","user_404");
                return data;
            }
            Vector<BeanArticleLike> beanArticleLikes=serviceArticleLike.get_like_count(beanArticle.getArticle_id());
            if (beanArticleLikes==null){
                JSONObject data=new JSONObject();
                data.put("is_succeed","false");
                data.put("error_cause","article_like_404");
                return data;
            }
            JSONObject data=new JSONObject();
            data.put("is_succeed","true");
            data.put("article_title",beanArticle.getArticle_title());
            data.put("article_content",beanArticle.getArticle_content());
            data.put("article_edit_time",beanArticle.getArticle_edit_time());
            data.put("article_topic_name",beanTopic.getTopic_title());
            data.put("article_topic_id",beanTopic.getTopic_id());
            data.put("article_user_id",beanArticle.getArticle_user_id());
            data.put("article_user_name",beanRegisterUser.getUser_name());
            data.put("article_like_count",beanArticleLikes.size());
            return data;
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }
    }

    public static JSONObject draw_latest_articles(HttpServletRequest request) {
        ServiceArticle serviceArticle;
        try {
            serviceArticle=new ServiceArticleImpl();
            Vector<BeanArticle> beanArticles=serviceArticle.draw_latest_articles();
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("articles_count",beanArticles.size());
            data.put("articles",beanArticles.toArray());
            return data;
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }
    }

    public static JSONObject draw_topics() {
        //连接Service层
        ServiceTopic serviceTopic=null;
        try {
            serviceTopic=new ServiceTopicImpl();
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }

        Vector<BeanTopic> topics=serviceTopic.get_topics();
        JSONObject data=new JSONObject();
        data.put("is_succeed","true");
        data.put("topics",topics.toArray());
        data.put("topics_count",topics.size());
        return data;
    }

    public static JSONObject draw_topic_article(HttpServletRequest request) {
        ServiceArticle serviceArticle;
        String topic_id=request.getParameter("topic_id");
        try {
            serviceArticle=new ServiceArticleImpl();
            Vector<BeanArticle> beanArticles=serviceArticle.draw_topic_articles(topic_id);
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("articles_count",beanArticles.size());
            data.put("articles",beanArticles.toArray());
            return data;
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }
    }

    public static JSONObject draw_admin(HttpServletRequest request) {
        ServiceRegisterUser serviceRegisterUser;
        ServiceSession serviceSession;
        ServiceWebMessage serviceWebMessage;
        ServiceTopic serviceTopic;
        ServiceArticle serviceArticle;
        ServiceArticleReport serviceArticleReport;
        ServiceArticleCommentReport serviceArticleCommentReport;
        ServiceUserReport serviceUserReport;
        try{
            serviceRegisterUser=new ServiceRegisterUserImpl();
            serviceSession=new ServiceSessionImpl();
            serviceWebMessage=new ServiceWebMessageImpl();
            serviceTopic=new ServiceTopicImpl();
            serviceArticle=new ServiceArticleImpl();
            serviceArticleReport=new ServiceArticleReportImpl();
            serviceArticleCommentReport=new ServiceArticleCommentReportImpl();
            serviceUserReport=new ServiceUserReportImpl();

            if (!serviceSession.is_login_admin(request)){
                JSONObject data=new JSONObject();
                data.put("is_succeed","false");
                data.put("error_cause","Not Admin Login");
                return data;
            }

            BeanRegisterUser beanRegisterUser = serviceRegisterUser
                            .get_user_by_id(serviceSession.get_logged_user(request).getSession_user_id());
            if (beanRegisterUser==null){
                JSONObject data=new JSONObject();
                data.put("is_succeed","false");
                data.put("error_cause","bean_admin_404");
                return data;
            }

            Vector<BeanWebMessage> beanWebMessages=serviceWebMessage.get_web_messages();
            if (beanWebMessages.size()==0){
                JSONObject data=new JSONObject();
                data.put("is_succeed","false");
                data.put("error_cause","bean_web_message_404");
                return data;
            }

            Vector<BeanTopic> beanTopics=serviceTopic.get_topics();
            if (beanTopics==null){
                JSONObject data=new JSONObject();
                data.put("is_succeed","false");
                data.put("error_cause","bean_topics_404");
                return data;
            }

            Vector<BeanArticle> beanArticles=serviceArticle.get_all_articles();
            if (beanArticles==null){
                JSONObject data=new JSONObject();
                data.put("is_succeed","false");
                data.put("error_cause","bean_articles_404");
                return data;
            }
            Vector<BeanRegisterUser> registerUsers=serviceRegisterUser.get_all_users();
            if (registerUsers==null){
                JSONObject data=new JSONObject();
                data.put("is_succeed","false");
                data.put("error_cause","bean_users_404");
                return data;
            }

            JSONObject data=new JSONObject();
            data.put("is_succeed","true");
            data.put("admin_name",beanRegisterUser.getUser_name());
            data.put("web_messages_count",beanWebMessages.size());
            data.put("web_messages",beanWebMessages.toArray());
            data.put("topics_count",beanTopics.size());
            data.put("topics",beanTopics.toArray());
            data.put("articles_count",beanArticles.size());
            data.put("articles",beanArticles.toArray());
            data.put("users_count",registerUsers.size());
            data.put("users",registerUsers.toArray());
            return data;
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }
    }

    public static JSONObject add_new_topic(HttpServletRequest request) {
        ServiceTopic serviceTopic;
        try{
            serviceTopic=new ServiceTopicImpl();
            BeanTopic beanTopic=new BeanTopic();
            beanTopic.setTopic_title(request.getParameter("new_topic_title"));
            beanTopic.setTopic_picture(request.getParameter("new_topic_pic"));
            BeanTopic beanTopicBack=serviceTopic.add_topic(beanTopic);
            if (beanTopicBack==null){
                JSONObject data=new JSONObject();
                data.put("is_succeed","false");
                data.put("error_cause","话题已存在或服务器错误");
                return data;
            }
            JSONObject data=new JSONObject();
            data.put("is_succeed","true");
            data.put("topic_id",beanTopic.getTopic_id());
            return data;
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }
    }

    public static JSONObject update_web_title(HttpServletRequest request) {
        ServiceWebMessage serviceWebMessage;
        try {
            serviceWebMessage=new ServiceWebMessageImpl();
            String web_title=request.getParameter("web_title");
            if (serviceWebMessage.update_web_title(web_title)){
                JSONObject data=new JSONObject();
                data.put("is_succeed","true");
                return data;
            }else{
                JSONObject data=new JSONObject();
                data.put("is_succeed","false");
                return data;
            }
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }
    }

    public static JSONObject update_web_footer(HttpServletRequest request) {
        ServiceWebMessage serviceWebMessage;
        try {
            serviceWebMessage=new ServiceWebMessageImpl();
            String web_footer=request.getParameter("web_footer");
            if (serviceWebMessage.update_web_footer(web_footer)){
                JSONObject data=new JSONObject();
                data.put("is_succeed","true");
                return data;
            }else{
                JSONObject data=new JSONObject();
                data.put("is_succeed","false");
                return data;
            }
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }
    }

    public static JSONObject delete_topic(HttpServletRequest request) {
        ServiceTopic serviceTopic;
        try {
            serviceTopic=new ServiceTopicImpl();
            String topic_id=request.getParameter("topic_id");
            if (serviceTopic.delete_topic(topic_id)){
                JSONObject data=new JSONObject();
                data.put("is_succeed","true");
                return data;
            }else{
                JSONObject data=new JSONObject();
                data.put("is_succeed","false");
                return data;
            }
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }
    }

    public static JSONObject delete_article(HttpServletRequest request) {
        ServiceArticle serviceArticle;
        try {
            serviceArticle=new ServiceArticleImpl();
            String article_id=request.getParameter("article_id");
            if (serviceArticle.delete_article(article_id)){
                JSONObject data=new JSONObject();
                data.put("is_succeed","true");
                return data;
            }else{
                JSONObject data=new JSONObject();
                data.put("is_succeed","false");
                return data;
            }
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }
    }

    public static JSONObject draw_user_page(HttpServletRequest request) {
        ServiceRegisterUser serviceRegisterUser;
        ServiceArticle serviceArticle;
        ServiceUserSubscription serviceUserSubscription;
        ServiceArticleComment serviceArticleComment;
        ServiceArticleLike serviceArticleLike;
        try{
            serviceRegisterUser=new ServiceRegisterUserImpl();
            serviceArticle=new ServiceArticleImpl();
            serviceUserSubscription=new ServiceUserSubscriptionImpl();
            serviceArticleComment=new ServiceArticleCommentImpl();
            serviceArticleLike=new ServiceArticleLikeImpl();

            String user_id=request.getParameter("user_id");
            BeanRegisterUser beanRegisterUser=serviceRegisterUser.get_full_user_by_id(user_id);
            if (beanRegisterUser==null){
                JSONObject data=new JSONObject();
                data.put("is_succeed","false");
                return data;
            }

            Vector<BeanArticle> beanArticles=serviceArticle.get_articles_by_user(user_id);
            if (beanArticles==null){
                    JSONObject data=new JSONObject();
                    data.put("is_succeed","false");
                    return data;
            }

            int subscriptions=serviceUserSubscription.get_subscription_count_by_id(user_id);


            JSONObject data=new JSONObject();
            data.put("is_succeed","true");
            data.put("user_name",beanRegisterUser.getUser_name());
            data.put("user_slogan",beanRegisterUser.getUser_slogan());
            data.put("user_birthday",beanRegisterUser.getUser_birthday());
            data.put("user_link",beanRegisterUser.getUser_link());
            data.put("user_region",beanRegisterUser.getUser_region());
            data.put("articles_count",beanArticles.size());
            data.put("articles",beanArticles.toArray());
            data.put("subscriptions",subscriptions);
            return data;

        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }
    }
}
