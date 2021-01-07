/*
 * Author:UtopiaXC
 * Created Time:2020/12/21-10:55
 * Created By Idea 2020.3
 * Usage:JSON处理工具类
 * */
package com.utopiaxc.mduiblog.utils;
import com.alibaba.fastjson.JSONObject;

import java.io.PrintWriter;

public class FastJsonUtils {
    public static void doResponse(int code, String Message, JSONObject jsonObject, PrintWriter out){
        JSONObject response=new JSONObject();
        response.put("code",code);
        response.put("message",Message);
        response.put("data",jsonObject);
        out.println(response.toJSONString());
    }
}
