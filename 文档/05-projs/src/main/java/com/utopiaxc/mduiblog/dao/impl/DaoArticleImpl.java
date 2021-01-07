package com.utopiaxc.mduiblog.dao.impl;

import com.utopiaxc.mduiblog.bean.BeanArticle;
import com.utopiaxc.mduiblog.dao.DaoArticle;
import com.utopiaxc.mduiblog.utils.DatabaseConnection;

import javax.servlet.http.HttpServletRequest;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Vector;

public class DaoArticleImpl implements DaoArticle {
    DatabaseConnection databaseConnection;
    PreparedStatement preparedStatement = null;
    public DaoArticleImpl()throws Exception{
        databaseConnection = new DatabaseConnection();
    }
    @Override
    public BeanArticle add_article(BeanArticle beanArticle) {
        try{
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "INSERT INTO article (article_user_id, article_topic_id, article_title, article_content)VALUES(?,?,?,?)");
            preparedStatement.setString(1,beanArticle.getArticle_user_id());
            preparedStatement.setString(2,beanArticle.getArticle_topic_id());
            preparedStatement.setString(3,beanArticle.getArticle_title());
            preparedStatement.setString(4,beanArticle.getArticle_content());
            preparedStatement.execute();
            preparedStatement=databaseConnection
                    .getConnection()
                    .prepareStatement("SELECT LAST_INSERT_ID()");
            ResultSet resultSet=preparedStatement.executeQuery();
            if(resultSet.next()){
                beanArticle.setArticle_id(resultSet.getString("LAST_INSERT_ID()"));
                return beanArticle;
            }
            return null;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Vector<BeanArticle> get_latest_article() {
        try {
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "SELECT article.article_id,article.article_title,register_user.user_name FROM article,register_user WHERE article.article_user_id=register_user.user_id ORDER BY article.article_edit_time DESC LIMIT 5");
            ResultSet resultSet=preparedStatement.executeQuery();
            Vector<BeanArticle> beanArticles=new Vector<>();
            while (resultSet.next()){
                BeanArticle beanArticle=new BeanArticle();
                beanArticle.setArticle_user_id(resultSet.getString("user_name"));
                beanArticle.setArticle_title(resultSet.getString("article_title"));
                beanArticle.setArticle_id(resultSet.getString("article_id"));
                beanArticles.add(beanArticle);
            }
            return beanArticles;
        }catch (Exception e){
            e.printStackTrace();
            return new Vector<>();
        }
    }

    @Override
    public Vector<BeanArticle> get_hot_article() {
        try {
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "SELECT article.article_id,article.article_title,register_user.user_name FROM article,register_user WHERE article.article_user_id=register_user.user_id ORDER BY RAND() DESC LIMIT 5");
            ResultSet resultSet=preparedStatement.executeQuery();
            Vector<BeanArticle> beanArticles=new Vector<>();
            while (resultSet.next()){
                BeanArticle beanArticle=new BeanArticle();
                beanArticle.setArticle_user_id(resultSet.getString("user_name"));
                beanArticle.setArticle_title(resultSet.getString("article_title"));
                beanArticle.setArticle_id(resultSet.getString("article_id"));
                beanArticles.add(beanArticle);
            }
            return beanArticles;
        }catch (Exception e){
            e.printStackTrace();
            return new Vector<>();
        }
    }

    @Override
    public BeanArticle get_article_bu_id(String article_id) {
        try {
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "SELECT article_id, article_user_id, article_topic_id, article_title, article_content, article_submit_time, article_edit_time FROM article WHERE article_id=?");
            preparedStatement.setString(1,article_id);
            ResultSet resultSet=preparedStatement.executeQuery();
            if (resultSet.next())
                return new BeanArticle(
                        resultSet.getString("article_id"),
                        resultSet.getString("article_user_id"),
                        resultSet.getString("article_topic_id"),
                        resultSet.getString("article_title"),
                        resultSet.getString("article_content"),
                        resultSet.getString("article_submit_time"),
                        resultSet.getString("article_edit_time")
                );
            else
                return null;

        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Vector<BeanArticle> draw_latest_articles() {
        try {
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "SELECT article.article_id,article.article_title,register_user.user_name,article.article_submit_time,article.article_edit_time FROM article,register_user WHERE article.article_user_id=register_user.user_id ORDER BY article.article_edit_time DESC LIMIT 20");
            ResultSet resultSet=preparedStatement.executeQuery();
            Vector<BeanArticle> beanArticles=new Vector<>();
            while (resultSet.next()){
                BeanArticle beanArticle=new BeanArticle();
                beanArticle.setArticle_user_id(resultSet.getString("user_name"));
                beanArticle.setArticle_title(resultSet.getString("article_title"));
                beanArticle.setArticle_id(resultSet.getString("article_id"));
                beanArticle.setArticle_edit_time(resultSet.getString("article_edit_time"));
                beanArticle.setArticle_submit_time(resultSet.getString("article_submit_time"));
                beanArticles.add(beanArticle);
            }
            return beanArticles;
        }catch (Exception e){
            e.printStackTrace();
            return new Vector<>();
        }
    }

    @Override
    public Vector<BeanArticle> draw_topic_articles(String topic_id) {
        try {
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "SELECT article.article_id,article.article_title,register_user.user_name,article.article_submit_time,article.article_edit_time FROM article,register_user WHERE article.article_user_id=register_user.user_id AND article_topic_id=? ORDER BY article.article_edit_time DESC LIMIT 20");
            preparedStatement.setString(1,topic_id);
            ResultSet resultSet=preparedStatement.executeQuery();
            Vector<BeanArticle> beanArticles=new Vector<>();
            while (resultSet.next()){
                BeanArticle beanArticle=new BeanArticle();
                beanArticle.setArticle_user_id(resultSet.getString("user_name"));
                beanArticle.setArticle_title(resultSet.getString("article_title"));
                beanArticle.setArticle_id(resultSet.getString("article_id"));
                beanArticle.setArticle_edit_time(resultSet.getString("article_edit_time"));
                beanArticle.setArticle_submit_time(resultSet.getString("article_submit_time"));
                beanArticles.add(beanArticle);
            }
            return beanArticles;
        }catch (Exception e){
            e.printStackTrace();
            return new Vector<>();
        }
    }

    @Override
    public Vector<BeanArticle> get_all_articles() {
        try{
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "SELECT article_id,article_title,topic_title,user_name,article_submit_time,article_edit_time FROM article,register_user,topic WHERE article_user_id=register_user.user_id AND article_topic_id=topic.topic_id ORDER BY article_id");
            ResultSet resultSet=preparedStatement.executeQuery();
            Vector<BeanArticle> beanArticles=new Vector<>();
            while (resultSet.next()){
                BeanArticle beanArticle=new BeanArticle();
                beanArticle.setArticle_id(resultSet.getString("article_id"));
                beanArticle.setArticle_title(resultSet.getString("article_title"));
                beanArticle.setArticle_topic_id(resultSet.getString("topic_title"));
                beanArticle.setArticle_user_id(resultSet.getString("user_name"));
                beanArticle.setArticle_submit_time(resultSet.getString("article_submit_time"));
                beanArticle.setArticle_edit_time(resultSet.getString("article_edit_time"));
                beanArticles.add(beanArticle);
            }
            return beanArticles;
        }catch (Exception e){
            return null;
        }
    }

    @Override
    public boolean delete_article(String article_id) {
        try {
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "DELETE FROM article WHERE article_id=?");
            preparedStatement.setString(1,article_id);
            return preparedStatement.executeUpdate()==1;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public Vector<BeanArticle> get_articles_by_user(String user_id) {
        try {
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "SELECT article.article_id,article.article_title,register_user.user_name,article.article_submit_time,article.article_edit_time FROM article,register_user WHERE article.article_user_id=register_user.user_id AND user_id=? ORDER BY article.article_edit_time DESC");
            preparedStatement.setString(1,user_id);
            ResultSet resultSet=preparedStatement.executeQuery();
            Vector<BeanArticle> beanArticles=new Vector<>();
            while (resultSet.next()){
                BeanArticle beanArticle=new BeanArticle();
                beanArticle.setArticle_user_id(resultSet.getString("user_name"));
                beanArticle.setArticle_title(resultSet.getString("article_title"));
                beanArticle.setArticle_id(resultSet.getString("article_id"));
                beanArticle.setArticle_edit_time(resultSet.getString("article_edit_time"));
                beanArticle.setArticle_submit_time(resultSet.getString("article_submit_time"));
                beanArticles.add(beanArticle);
            }
            return beanArticles;
        }catch (Exception e){
            e.printStackTrace();
            return new Vector<>();
        }
    }
}
