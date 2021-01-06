package com.utopiaxc.mduiblog.dao.impl;

import com.utopiaxc.mduiblog.bean.BeanSession;
import com.utopiaxc.mduiblog.dao.DaoSession;
import com.utopiaxc.mduiblog.utils.DatabaseConnection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DaoSessionImpl implements DaoSession {
    DatabaseConnection databaseConnection;
    PreparedStatement preparedStatement = null;
    public DaoSessionImpl()throws Exception{
        databaseConnection = new DatabaseConnection();
    }

    @Override
    public BeanSession getSessionBean(String token) {
        ResultSet resultSet;
        try {
            preparedStatement=databaseConnection.getConnection().prepareStatement("SELECT session_id,session_etime,session_user_id FROM `session` WHERE session_token=?");
            preparedStatement.setString(1,token);
            resultSet=preparedStatement.executeQuery();
            if (resultSet.next()){
                if(Integer.parseInt(resultSet.getString("session_etime"))<(System.currentTimeMillis()/1000)){
                    preparedStatement=databaseConnection.getConnection().prepareStatement(
                            "DELETE FROM `session` WHERE session_token=?");
                    preparedStatement.setString(1,token);
                    preparedStatement.execute();
                    return null;
                }
                BeanSession beanSession=new BeanSession();
                beanSession.setSession_user_id(resultSet.getString("session_user_id"));
                return beanSession;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        return null;
    }

    @Override
    public void do_login(String token, BeanSession beanSession) {
        try{
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "INSERT INTO `session` (session_user_id,session_token,session_ip,session_stime,session_etime)VALUES(?,?,?,?,?)");
            preparedStatement.setInt(1, Integer.parseInt(beanSession.getSession_user_id()));
            preparedStatement.setString(2,beanSession.getSession_token());
            preparedStatement.setString(3,beanSession.getSession_ip());
            preparedStatement.setInt(4, Integer.parseInt(beanSession.getSession_stime()));
            preparedStatement.setInt(5, Integer.parseInt(beanSession.getSession_etime()));
            preparedStatement.executeUpdate();
        }catch (Exception e){
            System.out.println(e.toString());
        }
    }

    @Override
    public void do_logout(BeanSession beanSession) {
        try {
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "DELETE FROM `session` WHERE session_token=?");
            preparedStatement.setString(1,beanSession.getSession_token());
            preparedStatement.executeUpdate();
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    public BeanSession getSessionBeanAdmin(String token) {
        ResultSet resultSet;
        try {
            preparedStatement=databaseConnection.getConnection().prepareStatement("SELECT session_id,session_etime,session_user_id FROM `session` WHERE session_token=?");
            preparedStatement.setString(1,token);
            resultSet=preparedStatement.executeQuery();
            if (resultSet.next()){
                if(Integer.parseInt(resultSet.getString("session_etime"))<(System.currentTimeMillis()/1000)){
                    preparedStatement=databaseConnection.getConnection().prepareStatement(
                            "DELETE FROM `session` WHERE session_token=?");
                    preparedStatement.setString(1,token);
                    preparedStatement.execute();
                    return null;
                }
                preparedStatement=databaseConnection.getConnection().prepareStatement(
                        "SELECT user_group FROM register_user WHERE user_id=?");
                preparedStatement.setString(1,resultSet.getString("session_user_id"));
                ResultSet resultSetUser=preparedStatement.executeQuery();
                if (resultSetUser.next()){
                    if (resultSetUser.getString("user_group").equals("admin")){
                        BeanSession beanSession=new BeanSession();
                        beanSession.setSession_user_id(resultSet.getString("session_user_id"));
                        return beanSession;
                    }
                }
                return null;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        return null;
    }

}
