package com.utopiaxc.mduiblog.dao;

import com.utopiaxc.mduiblog.bean.BeanArticleLike;

import java.util.Vector;

public interface DaoArticleLike {
    Vector<BeanArticleLike> get_like_count(String article_id);
}
