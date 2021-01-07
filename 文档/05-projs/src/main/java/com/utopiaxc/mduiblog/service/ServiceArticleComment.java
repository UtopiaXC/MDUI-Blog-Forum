package com.utopiaxc.mduiblog.service;

import com.utopiaxc.mduiblog.bean.BeanArticleComment;

import java.util.Vector;

public interface ServiceArticleComment {
    boolean do_comment(String user_id, String comment, String article_id);

    Vector<BeanArticleComment> get_comments(String article_id);
}
