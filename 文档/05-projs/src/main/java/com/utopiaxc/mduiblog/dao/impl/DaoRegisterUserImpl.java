package com.utopiaxc.mduiblog.dao.impl;

import com.utopiaxc.mduiblog.bean.BeanRegisterUser;
import com.utopiaxc.mduiblog.dao.DaoRegisterUser;
import com.utopiaxc.mduiblog.dao.DaoSession;
import com.utopiaxc.mduiblog.utils.DatabaseConnection;
import com.utopiaxc.mduiblog.utils.Encryption;

import javax.servlet.http.HttpServletRequest;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Vector;

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

    @Override
    public BeanRegisterUser do_login(BeanRegisterUser beanRegisterUser) {
        String username=beanRegisterUser.getUser_name();
        String password=beanRegisterUser.getUser_password();
        try {
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "SELECT user_name,user_id,user_password FROM register_user WHERE user_name=? OR user_email=?");
            preparedStatement.setString(1,username);
            preparedStatement.setString(2,username);
            ResultSet resultSet=preparedStatement.executeQuery();
            if (!resultSet.next()){
                return null;
            }
            String user_id=resultSet.getString("user_id");
            String user_password=resultSet.getString("user_password");
            if (!password.equals(user_password)){
                return null;
            }
            BeanRegisterUser beanRegisterUser1=new BeanRegisterUser();
            beanRegisterUser1.setUser_id(user_id);
            return beanRegisterUser1;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Vector<BeanRegisterUser> get_random_users() {
        try{
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "SELECT user_id,user_name FROM register_user WHERE user_group='user' ORDER BY RAND() LIMIT 5");
            ResultSet resultSet=preparedStatement.executeQuery();
            Vector<BeanRegisterUser> users=new Vector<>();
            while (resultSet.next()){
                BeanRegisterUser beanRegisterUser=new BeanRegisterUser();
                beanRegisterUser.setUser_id(resultSet.getString("user_id"));
                beanRegisterUser.setUser_name(resultSet.getString("user_name"));
                users.add(beanRegisterUser);
            }
            return users;
        }catch (Exception e){
            return new Vector<>();
        }
    }

    @Override
    public BeanRegisterUser get_user_by_id(String article_user_id) {
        try{
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "SELECT user_id,user_name FROM register_user WHERE user_id=?");
            preparedStatement.setString(1,article_user_id);
            ResultSet resultSet=preparedStatement.executeQuery();
            if (resultSet.next()){
                BeanRegisterUser beanRegisterUser=new BeanRegisterUser();
                beanRegisterUser.setUser_name(resultSet.getString("user_name"));
                beanRegisterUser.setUser_id(resultSet.getString("user_id"));
                return beanRegisterUser;
            }

            return null;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Vector<BeanRegisterUser> get_all_users() {
        try {
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "SELECT user_id,user_name,user_email,user_banned,user_group FROM register_user WHERE user_group!='admin'");
            ResultSet resultSet=preparedStatement.executeQuery();
            Vector<BeanRegisterUser> beanRegisterUsers=new Vector<>();
            while (resultSet.next()){
                BeanRegisterUser beanRegisterUser=new BeanRegisterUser();
                beanRegisterUser.setUser_id(resultSet.getString("user_id"));
                beanRegisterUser.setUser_name(resultSet.getString("user_name"));
                beanRegisterUser.setUser_email(resultSet.getString("user_email"));
                beanRegisterUser.setUser_banned(resultSet.getString("user_banned"));
                beanRegisterUser.setUser_group(resultSet.getString("user_group"));
                beanRegisterUsers.add(beanRegisterUser);
            }
            return beanRegisterUsers;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public BeanRegisterUser get_full_user_by_id(String user_id) {
        try{
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "SELECT user_id,user_name,user_slogan,user_birthday,user_link,user_region FROM register_user WHERE user_id=?");
            preparedStatement.setString(1,user_id);
            ResultSet resultSet=preparedStatement.executeQuery();
            if (resultSet.next()){
                BeanRegisterUser beanRegisterUser=new BeanRegisterUser();
                beanRegisterUser.setUser_name(resultSet.getString("user_name"));
                beanRegisterUser.setUser_id(resultSet.getString("user_id"));
                if (resultSet.getString("user_slogan")==null)
                    beanRegisterUser.setUser_slogan("无");
                else
                    beanRegisterUser.setUser_slogan(resultSet.getString("user_slogan"));

                if (resultSet.getString("user_birthday")==null)
                    beanRegisterUser.setUser_birthday("无");
                else
                    beanRegisterUser.setUser_birthday(resultSet.getString("user_birthday"));

                if (resultSet.getString("user_link")==null)
                    beanRegisterUser.setUser_link("无");
                else
                    beanRegisterUser.setUser_link(resultSet.getString("user_link"));

                if (resultSet.getString("user_region")==null)
                    beanRegisterUser.setUser_region("无");
                else
                    beanRegisterUser.setUser_region(resultSet.getString("user_region"));

                return beanRegisterUser;
            }
            return null;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
}
