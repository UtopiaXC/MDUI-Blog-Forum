/*
 * Author:UtopiaXC
 * Created Time:2020/12/21-10:55
 * Created By Idea 2020.3
 * Usage:servlet层
 * */
package com.utopiaxc.mduiblog.servlet;

import com.alibaba.fastjson.JSONObject;
import com.utopiaxc.mduiblog.utils.ApiUtil;
import com.utopiaxc.mduiblog.utils.FastJsonUtils;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "api", value = "/api")
public class api extends HttpServlet {
    JSONObject jsonObject;

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter printWriter = response.getWriter();
        try {
            String function = request.getParameter("function");
            if ("login_check".equals(function)) {
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.login_check(request),
                        printWriter);
            }else if("register".equals(function)){
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.register(request),
                        printWriter);
            } else {
                JSONObject jsonObject = new JSONObject();
                jsonObject.put("Parameter", function);
                FastJsonUtils.doResponse(501,
                        "Wrong API Parameter",
                        jsonObject,
                        printWriter);
            }
        } catch (Exception e) {
            jsonObject = new JSONObject();
            jsonObject.put("error", e);
            FastJsonUtils.doResponse(500,
                    "Service Fault Error",
                    jsonObject,
                    printWriter);
        }
    }
}