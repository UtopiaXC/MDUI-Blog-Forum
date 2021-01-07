package com.utopiaxc.mduiblog.dao.impl;

import com.utopiaxc.mduiblog.dao.DaoUserSubscription;
import com.utopiaxc.mduiblog.utils.DatabaseConnection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DaoUserSubscriptionImpl implements DaoUserSubscription {
    DatabaseConnection databaseConnection;
    PreparedStatement preparedStatement = null;
    public DaoUserSubscriptionImpl()throws Exception{
        databaseConnection = new DatabaseConnection();
    }
    @Override
    public int get_subscription_count_by_id(String user_id) {
        try{
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "SELECT COUNT(user_subscription_id) FROM user_subscription WHERE user_subscription_to=?");
            preparedStatement.setString(1,user_id);
            ResultSet resultSet=preparedStatement.executeQuery();
            if (resultSet.next()){
                return resultSet.getInt("COUNT(user_subscription_id)");
            }else
                return 0;
        }catch (Exception e){
            e.printStackTrace();
            return 0;
        }

    }
}
