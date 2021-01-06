package com.utopiaxc.mduiblog.dao.impl;

import com.utopiaxc.mduiblog.bean.BeanArticle;
import com.utopiaxc.mduiblog.dao.DaoArticle;
import com.utopiaxc.mduiblog.utils.DatabaseConnection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;

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
}
