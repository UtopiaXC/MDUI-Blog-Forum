package com.utopiaxc.mduiblog.service.impl;

import com.utopiaxc.mduiblog.bean.BeanArticle;
import com.utopiaxc.mduiblog.dao.DaoArticle;
import com.utopiaxc.mduiblog.dao.DaoTopic;
import com.utopiaxc.mduiblog.dao.impl.DaoArticleImpl;
import com.utopiaxc.mduiblog.dao.impl.DaoTopicImpl;
import com.utopiaxc.mduiblog.service.ServiceArticle;

public class ServiceArticleImpl implements ServiceArticle {
    DaoArticle daoArticle=null;
    public ServiceArticleImpl() throws Exception{
        daoArticle=new DaoArticleImpl();
    }
    @Override
    public BeanArticle add_article(BeanArticle beanArticle) {
        return daoArticle.add_article(beanArticle);
    }
}
