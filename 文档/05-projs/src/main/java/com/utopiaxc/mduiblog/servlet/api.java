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
            }else if ("login".equals(function)) {
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.login(request,response),
                        printWriter);
            }else if("logout".equals(function)){
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.logout(request),
                        printWriter);
            }else if("get_topics".equals(function)){
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.get_topics(),
                        printWriter);
            }else if("add_article".equals(function)){
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.add_article(request),
                        printWriter);
            }else if("get_web_message".equals(function)){
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.get_web_message(),
                        printWriter);
            } else if("admin_check".equals(function)){
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.admin_check(request),
                        printWriter);
            } else if("get_index".equals(function)){
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.get_index(request),
                        printWriter);
            }else if("get_article".equals(function)){
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.get_article(request),
                        printWriter);
            }else if("draw_latest_articles".equals(function)){
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.draw_latest_articles(request),
                        printWriter);
            }
            else if("draw_topics".equals(function)){
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.draw_topics(),
                        printWriter);
            }else if("draw_topic_article".equals(function)){
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.draw_topic_article(request),
                        printWriter);
            }else if("draw_admin".equals(function)){
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.draw_admin(request),
                        printWriter);
            }else if("add_new_topic".equals(function)){
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.add_new_topic(request),
                        printWriter);
            } else if("update_web_title".equals(function)){
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.update_web_title(request),
                        printWriter);
            }else if("update_web_footer".equals(function)){
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.update_web_footer(request),
                        printWriter);
            }else if("delete_topic".equals(function)){
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.delete_topic(request),
                        printWriter);
            }else if("delete_article".equals(function)){
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.delete_article(request),
                        printWriter);
            }else if("draw_user_page".equals(function)){
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.draw_user_page(request),
                        printWriter);
            }else if("do_article_like".equals(function)){
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.do_article_like(request),
                        printWriter);
            }else if("add_comment".equals(function)){
                FastJsonUtils.doResponse(200,
                        "API Called Successfully",
                        ApiUtil.add_comment(request),
                        printWriter);
            }else {
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