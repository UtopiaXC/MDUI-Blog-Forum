package com.utopiaxc.mduiblog.dao.impl;

import com.utopiaxc.mduiblog.bean.BeanArticle;
import com.utopiaxc.mduiblog.bean.BeanArticleComment;
import com.utopiaxc.mduiblog.dao.DaoArticleComment;
import com.utopiaxc.mduiblog.utils.DatabaseConnection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Vector;

public class DaoArticleCommentImpl implements DaoArticleComment {
    DatabaseConnection databaseConnection;
    PreparedStatement preparedStatement = null;
    public DaoArticleCommentImpl()throws Exception{
        databaseConnection = new DatabaseConnection();
    }
    @Override
    public boolean do_comment(String user_id, String comment, String article_id) {
        try {
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "INSERT INTO article_comment (article_comment_article_id, article_comment_user_id,article_comment_content)VALUES (?,?,?)");
            preparedStatement.setString(1,article_id);
            preparedStatement.setString(2,user_id);
            preparedStatement.setString(3,comment);
            return preparedStatement.executeUpdate()==1;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public Vector<BeanArticleComment> get_comments(String article_id) {
        try {
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "SELECT article_comment_user_id, article_comment_time, article_comment_content FROM article_comment WHERE article_comment_article_id=?");
            preparedStatement.setString(1,article_id);
            ResultSet resultSet=preparedStatement.executeQuery();
            Vector<BeanArticleComment> beanArticleComments=new Vector<>();
            while (resultSet.next()){
                BeanArticleComment beanArticleComment=new BeanArticleComment();
                beanArticleComment.setArticle_comment_user_id(resultSet.getString("article_comment_user_id"));
                beanArticleComment.setArticle_comment_time(resultSet.getString("article_comment_time"));
                beanArticleComment.setArticle_comment_content(resultSet.getString("article_comment_content"));
                beanArticleComments.add(beanArticleComment);
            }
            return beanArticleComments;

        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
}
