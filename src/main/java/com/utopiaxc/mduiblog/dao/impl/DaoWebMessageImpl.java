package com.utopiaxc.mduiblog.dao.impl;

import com.utopiaxc.mduiblog.bean.BeanWebMessage;
import com.utopiaxc.mduiblog.dao.DaoWebMessage;
import com.utopiaxc.mduiblog.utils.DatabaseConnection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Vector;

public class DaoWebMessageImpl implements DaoWebMessage {
    DatabaseConnection databaseConnection;
    PreparedStatement preparedStatement = null;
    public DaoWebMessageImpl()throws Exception{
        databaseConnection = new DatabaseConnection();
    }
    @Override
    public Vector<BeanWebMessage> get_web_messages() {
        try {
            preparedStatement=databaseConnection.getConnection().prepareStatement(
                    "SELECT web_message_id, web_message_title, web_message_content FROM web_message");
            ResultSet resultSet=preparedStatement.executeQuery();
            Vector<BeanWebMessage> beanWebMessages=new Vector<>();
            while (resultSet.next()){
                String id=resultSet.getString("web_message_id");
                String title=resultSet.getString("web_message_title");
                String content=resultSet.getString("web_message_content");
                if (title.equals("title")||title.equals("footer"))
                    beanWebMessages.add(new BeanWebMessage(id,title,content));
            }
            return beanWebMessages;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
}
