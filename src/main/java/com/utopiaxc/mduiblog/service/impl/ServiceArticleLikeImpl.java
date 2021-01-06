package com.utopiaxc.mduiblog.service.impl;

import com.utopiaxc.mduiblog.bean.BeanArticleLike;
import com.utopiaxc.mduiblog.dao.DaoArticle;
import com.utopiaxc.mduiblog.dao.DaoArticleLike;
import com.utopiaxc.mduiblog.dao.impl.DaoArticleImpl;
import com.utopiaxc.mduiblog.dao.impl.DaoArticleLikeImpl;
import com.utopiaxc.mduiblog.service.ServiceArticleLike;

import java.util.Vector;

public class ServiceArticleLikeImpl implements ServiceArticleLike {
    DaoArticleLike daoArticleLike=null;
    public ServiceArticleLikeImpl() throws Exception{
        daoArticleLike=new DaoArticleLikeImpl();
    }
    @Override
    public Vector<BeanArticleLike> get_like_count(String article_id) {
        return daoArticleLike.get_like_count(article_id);
    }
}
