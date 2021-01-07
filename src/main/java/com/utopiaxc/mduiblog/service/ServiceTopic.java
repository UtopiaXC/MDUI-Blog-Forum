package com.utopiaxc.mduiblog.service;

import com.utopiaxc.mduiblog.bean.BeanTopic;

import java.util.Vector;

public interface ServiceTopic {
    Vector<BeanTopic> get_topics();

    BeanTopic get_topic(String article_topic_name);

    Vector<BeanTopic> get_index_topics();

    BeanTopic get_topic_by_id(String article_topic_id);

    BeanTopic add_topic(BeanTopic beanTopic);

    boolean delete_topic(String topic_id);
}
