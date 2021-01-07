package com.utopiaxc.mduiblog.service;

import com.utopiaxc.mduiblog.bean.BeanArticle;

import javax.servlet.http.HttpServletRequest;
import java.util.Vector;

public interface ServiceArticle {
    BeanArticle add_article(BeanArticle beanArticle);

    Vector<BeanArticle> get_latest_article();

    Vector<BeanArticle> get_hot_article();

    BeanArticle get_article_bu_id(HttpServletRequest request);

    Vector<BeanArticle> draw_latest_articles();

    Vector<BeanArticle> draw_topic_articles(String topic_id);
}
