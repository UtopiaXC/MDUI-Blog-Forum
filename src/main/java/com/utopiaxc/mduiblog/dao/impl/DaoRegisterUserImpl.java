package com.utopiaxc.mduiblog.dao.impl;

import com.utopiaxc.mduiblog.bean.BeanRegisterUser;
import com.utopiaxc.mduiblog.dao.DaoRegisterUser;
import com.utopiaxc.mduiblog.dao.DaoSession;
import com.utopiaxc.mduiblog.utils.DatabaseConnection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DaoRegisterUserImpl implements DaoRegisterUser {
    DatabaseConnection databaseConnection;
    PreparedStatement preparedStatement = null;
    public DaoRegisterUserImpl()throws Exception{
        databaseConnection = new DatabaseConnection();
    }
    @Override
    public boolean do_register(BeanRegisterUser beanRegisterUser) {
        String username=beanRegisterUser.getUser_name();
        String email=beanRegisterUser.getUser_email();
        String password=beanRegisterUser.getUser_password();
        try {
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "SELECT user_id FROM register_user WHERE user_name=? OR user_email=?");
            preparedStatement.setString(1,username);
            preparedStatement.setString(2,email);
            ResultSet resultSet=preparedStatement.executeQuery();
            if (resultSet.next()){
                return false;
            }
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "INSERT INTO register_user (user_name,user_email,user_password)VALUES(?,?,?)");
            preparedStatement.setString(1,username);
            preparedStatement.setString(2,email);
            preparedStatement.setString(3,password);
            if (preparedStatement.executeUpdate()==1)
                return true;
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}