package com.utopiaxc.mduiblog.dao;

import com.utopiaxc.mduiblog.bean.BeanTopic;

import java.util.Vector;

public interface DaoTopic {
    Vector<BeanTopic> get_topics();

    BeanTopic get_topic(String article_topic_name);

    Vector<BeanTopic> get_index_topics();

    BeanTopic get_topic_by_id(String article_topic_id);
}
