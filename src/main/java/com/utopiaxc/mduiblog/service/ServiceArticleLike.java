package com.utopiaxc.mduiblog.service;

import com.utopiaxc.mduiblog.bean.BeanArticleLike;

import java.util.Vector;

public interface ServiceArticleLike {
    Vector<BeanArticleLike> get_like_count(String article_id);
}
