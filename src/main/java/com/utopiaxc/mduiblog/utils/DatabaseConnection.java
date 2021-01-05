/*
 * Author:UtopiaXC
 * Created Time:2020/12/21-10:55
 * Created By Idea 2020.3
 * Usage:数据库连接工具类
 * */
package com.utopiaxc.mduiblog.utils;

import java.sql.Connection;
import java.sql.DriverManager;

public class DatabaseConnection {
    private static final String DB_DRIVER = "com.mysql.cj.jdbc.Driver" ;
    private static final String DB_URL = "jdbc:mysql://localhost:3306/mduiblog?serverTimezone=Asia/Shanghai" ;
    private static final String DB_USER = "root" ;
    private static final String DB_PASSWORD = "123456" ;
    private Connection conn = null ;
    public DatabaseConnection() throws Exception{
        Class.forName(DB_DRIVER) ;
        this.conn = DriverManager.getConnection(DB_URL,DB_USER,DB_PASSWORD) ;
    }
    public Connection getConnection(){
        return this.conn ;
    }
    public void close() throws Exception{
        if(this.conn != null){
            this.conn.close() ;
        }
    }
}
