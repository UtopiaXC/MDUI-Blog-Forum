package com.utopiaxc.mduiblog.dao;

import com.utopiaxc.mduiblog.bean.BeanArticleComment;

import java.util.Vector;

public interface DaoArticleComment {
    boolean do_comment(String user_id, String comment, String article_id);

    Vector<BeanArticleComment> get_comments(String article_id);
}
