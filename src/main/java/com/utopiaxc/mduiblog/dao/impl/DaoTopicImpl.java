package com.utopiaxc.mduiblog.dao.impl;

import com.utopiaxc.mduiblog.bean.BeanTopic;
import com.utopiaxc.mduiblog.dao.DaoTopic;
import com.utopiaxc.mduiblog.utils.DatabaseConnection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Vector;

public class DaoTopicImpl implements DaoTopic {
    DatabaseConnection databaseConnection;
    PreparedStatement preparedStatement = null;
    public DaoTopicImpl()throws Exception{
        databaseConnection = new DatabaseConnection();
    }

    @Override
    public Vector<BeanTopic> get_topics() {
        try{
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "SELECT topic_id, topic_picture, topic_title FROM topic");
            ResultSet resultSet=preparedStatement.executeQuery();
            Vector<BeanTopic> topics=new Vector<>();
            while (resultSet.next()){
                BeanTopic beanTopic=new BeanTopic(
                        resultSet.getString("topic_id"),
                        resultSet.getString("topic_picture"),
                        resultSet.getString("topic_title")
                );
                topics.add(beanTopic);
            }
            return topics;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public BeanTopic get_topic(String article_topic_name) {
        try{
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "SELECT topic_id, topic_picture, topic_title FROM topic WHERE topic_title=?");
            preparedStatement.setString(1,article_topic_name);
            ResultSet resultSet=preparedStatement.executeQuery();
            if (resultSet.next()){
                return new BeanTopic(
                        resultSet.getString("topic_id"),
                        resultSet.getString("topic_picture"),
                        resultSet.getString("topic_title")
                );
            }else
                return null;
        }catch (Exception e){
            return null;
        }
    }

    @Override
    public Vector<BeanTopic> get_index_topics() {
        try{
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "SELECT topic_id, topic_picture, topic_title FROM topic LIMIT 4");
            ResultSet resultSet=preparedStatement.executeQuery();
            Vector<BeanTopic> topics=new Vector<>();
            while (resultSet.next()){
                BeanTopic beanTopic=new BeanTopic(
                        resultSet.getString("topic_id"),
                        resultSet.getString("topic_picture"),
                        resultSet.getString("topic_title")
                );
                topics.add(beanTopic);
            }
            return topics;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public BeanTopic get_topic_by_id(String article_topic_id) {
        try{
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "SELECT topic_id, topic_picture, topic_title FROM topic WHERE topic_id=?");
            preparedStatement.setString(1,article_topic_id);
            ResultSet resultSet=preparedStatement.executeQuery();
            if (resultSet.next()){
                return new BeanTopic(
                        resultSet.getString("topic_id"),
                        resultSet.getString("topic_picture"),
                        resultSet.getString("topic_title")
                );
            }else
                return null;
        }catch (Exception e){
            return null;
        }
    }
}
