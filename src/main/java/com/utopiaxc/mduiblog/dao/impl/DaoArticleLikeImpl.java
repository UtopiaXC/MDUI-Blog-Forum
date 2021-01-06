package com.utopiaxc.mduiblog.dao.impl;

import com.utopiaxc.mduiblog.bean.BeanArticleLike;
import com.utopiaxc.mduiblog.dao.DaoArticleLike;
import com.utopiaxc.mduiblog.utils.DatabaseConnection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Vector;

public class DaoArticleLikeImpl implements DaoArticleLike {
    DatabaseConnection databaseConnection;
    PreparedStatement preparedStatement = null;
    public DaoArticleLikeImpl()throws Exception{
        databaseConnection = new DatabaseConnection();
    }
    @Override
    public Vector<BeanArticleLike> get_like_count(String article_id) {
        try {
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "SELECT article_like_id, article_like_article_id, article_like_user_id, article_like_time FROM article_like WHERE article_like_article_id=?");
            preparedStatement.setString(1,article_id);
            ResultSet resultSet=preparedStatement.executeQuery();
            Vector<BeanArticleLike> beanArticleLikes=new Vector<>();
            while (resultSet.next())
                beanArticleLikes.add(new BeanArticleLike(
                        resultSet.getString("article_like_id"),
                        resultSet.getString("article_like_article_id"),
                        resultSet.getString("article_like_user_id"),
                        resultSet.getString("article_like_time")

                ));
            return beanArticleLikes;

        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
}
