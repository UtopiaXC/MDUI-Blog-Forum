package com.utopiaxc.mduiblog.service.impl;

import com.utopiaxc.mduiblog.bean.BeanArticle;
import com.utopiaxc.mduiblog.dao.DaoArticle;
import com.utopiaxc.mduiblog.dao.DaoTopic;
import com.utopiaxc.mduiblog.dao.impl.DaoArticleImpl;
import com.utopiaxc.mduiblog.dao.impl.DaoTopicImpl;
import com.utopiaxc.mduiblog.service.ServiceArticle;

import javax.servlet.http.HttpServletRequest;
import java.util.Vector;

public class ServiceArticleImpl implements ServiceArticle {
    DaoArticle daoArticle=null;
    public ServiceArticleImpl() throws Exception{
        daoArticle=new DaoArticleImpl();
    }
    @Override
    public BeanArticle add_article(BeanArticle beanArticle) {
        return daoArticle.add_article(beanArticle);
    }

    @Override
    public Vector<BeanArticle> get_latest_article() {
        return daoArticle.get_latest_article();
    }

    @Override
    public Vector<BeanArticle> get_hot_article() {
        return daoArticle.get_hot_article();
    }

    @Override
    public BeanArticle get_article_bu_id(HttpServletRequest request) {
        String article_id=request.getParameter("article_id");
        return daoArticle.get_article_bu_id(article_id);
    }

    @Override
    public Vector<BeanArticle> draw_latest_articles() {
        return daoArticle.draw_latest_articles();
    }
}
