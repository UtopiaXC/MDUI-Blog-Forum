package com.utopiaxc.mduiblog.dao;

import com.utopiaxc.mduiblog.bean.BeanArticle;

import javax.servlet.http.HttpServletRequest;
import java.util.Vector;

public interface DaoArticle {
    BeanArticle add_article(BeanArticle beanArticle);

    Vector<BeanArticle> get_latest_article();

    Vector<BeanArticle> get_hot_article();

    BeanArticle get_article_bu_id(String article_id);

    Vector<BeanArticle> draw_latest_articles();
}
