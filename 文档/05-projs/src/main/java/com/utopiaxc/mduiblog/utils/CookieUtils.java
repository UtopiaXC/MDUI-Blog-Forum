/*
 * Author:UtopiaXC
 * Created Time:2020/12/21-12:56
 * Created By Idea 2020.3
 * Usage:
 * */
package com.utopiaxc.mduiblog.utils;

import org.apache.commons.lang3.StringUtils;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class CookieUtils {

    public static final int COOKIE_MAX_AGE = 7 * 24 * 3600;
    public static final int COOKIE_ONE_DAY = 60 * 60 * 24;

    /**
     * 根据Cookie名称得到Cookie对象，不存在该对象则返回Null
     *
     * @param request 请求
     * @param name    Cookie名
     * @return Cookie对象
     */
    public static Cookie getCookie(HttpServletRequest request, String name) {
        Cookie[] cookies = request.getCookies();
        if (cookies == null) {
            return null;
        }
        Cookie cookie = null;
        for (Cookie c : cookies) {
            if (name.equals(c.getName())) {
                cookie = c;
                break;
            }
        }
        return cookie;
    }

    /**
     * 根据Cookie名称直接得到Cookie值
     *
     * @param request 请求
     * @param name    Cookie名
     * @return Cookie值
     */
    public static String getCookieValue(HttpServletRequest request, String name) {
        Cookie cookie = getCookie(request, name);
        if (cookie != null) {
            return cookie.getValue();
        }
        return null;
    }

    /**
     * 移除cookie
     *
     * @param request  请求
     * @param response 回复
     * @param name     Cookie名
     *                 这个是名称，不是值
     */
    public static void removeCookie(HttpServletRequest request, HttpServletResponse response, String name) {
        if (null == name) {
            return;
        }
        Cookie cookie = getCookie(request, name);
        if (null != cookie) {
            cookie.setPath("/");
            cookie.setValue("");
            cookie.setMaxAge(0);
            cookie.setDomain("ityuan.com");
            response.addCookie(cookie);
        }
    }

    /**
     * 添加一条新的Cookie，可以指定过期时间(单位：秒)
     *
     * @param response 回复
     * @param name     Cookie名
     * @param value    Cookie值
     * @param maxValue 过期时间
     */
    public static void setCookie(HttpServletResponse response, String name, String value, int maxValue) {
        if (StringUtils.isBlank(name)) {
            return;
        }
        if (null == value) {
            value = "";
        }
        Cookie cookie = new Cookie(name, value);
        cookie.setPath("/");
        if (maxValue != 0) {
            cookie.setMaxAge(maxValue);
        } else {
            cookie.setMaxAge(COOKIE_ONE_DAY);
        }
        response.addCookie(cookie);
        try {
            response.flushBuffer();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 添加一条新的Cookie，默认30分钟过期时间
     *
     * @param response 回复
     * @param name     Cookie名
     * @param value    Cookie值
     */
    public static void setCookie(HttpServletResponse response, String name, String value) {
        setCookie(response, name, value, COOKIE_ONE_DAY);
    }

    /**
     * 将cookie封装到Map里面
     *
     * @param request 请求
     * @return CookieMap
     */
    public static Map<String, Cookie> getCookieMap(HttpServletRequest request) {
        Map<String, Cookie> cookieMap = new HashMap<String, Cookie>();
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                cookieMap.put(cookie.getName(), cookie);
            }
        }
        return cookieMap;
    }
}
