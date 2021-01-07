package com.utopiaxc.mduiblog.service.impl;

import com.utopiaxc.mduiblog.bean.BeanArticleComment;
import com.utopiaxc.mduiblog.dao.DaoArticleComment;
import com.utopiaxc.mduiblog.dao.impl.DaoArticleCommentImpl;
import com.utopiaxc.mduiblog.service.ServiceArticleComment;

import java.util.Vector;

public class ServiceArticleCommentImpl implements ServiceArticleComment {
    DaoArticleComment daoArticleComment=null;
    public ServiceArticleCommentImpl() throws Exception{
        daoArticleComment=new DaoArticleCommentImpl();
    }
    @Override
    public boolean do_comment(String user_id, String comment, String article_id) {
        return daoArticleComment.do_comment(user_id, comment,article_id);
    }

    @Override
    public Vector<BeanArticleComment> get_comments(String article_id) {
        return daoArticleComment.get_comments(article_id);
    }
}
