package com.utopiaxc.mduiblog.dao.impl;

import com.utopiaxc.mduiblog.bean.BeanRegisterUser;
import com.utopiaxc.mduiblog.bean.BeanSession;
import com.utopiaxc.mduiblog.dao.DaoSession;
import com.utopiaxc.mduiblog.utils.DatabaseConnection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

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
            preparedStatement=databaseConnection.getConnection().prepareStatement("SELECT session_id FROM `session` WHERE session_token=?");
            preparedStatement.setString(1,token);
            resultSet=preparedStatement.executeQuery();
            if (resultSet.next()){
                return new BeanSession();
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
            preparedStatement.setString(1,beanSession.getSession_user_id());
            preparedStatement.setString(2,beanSession.getSession_token());
            preparedStatement.setString(3,beanSession.getSession_ip());
            preparedStatement.setString(4,beanSession.getSession_stime());
            preparedStatement.setString(5,beanSession.getSession_etime());
            preparedStatement.execute();
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
