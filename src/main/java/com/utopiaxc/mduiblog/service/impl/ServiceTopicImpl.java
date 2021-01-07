package com.utopiaxc.mduiblog.service.impl;

import com.utopiaxc.mduiblog.bean.BeanTopic;
import com.utopiaxc.mduiblog.dao.DaoTopic;
import com.utopiaxc.mduiblog.dao.impl.DaoTopicImpl;
import com.utopiaxc.mduiblog.service.ServiceTopic;

import java.util.Vector;

public class ServiceTopicImpl implements ServiceTopic {
    DaoTopic daoTopic=null;
    public ServiceTopicImpl() throws Exception{
        daoTopic=new DaoTopicImpl();
    }
    @Override
    public Vector<BeanTopic> get_topics() {
        return daoTopic.get_topics();
    }

    @Override
    public BeanTopic get_topic(String article_topic_name) {
        return daoTopic.get_topic(article_topic_name);
    }

    @Override
    public Vector<BeanTopic> get_index_topics() {
        return daoTopic.get_index_topics();
    }

    @Override
    public BeanTopic get_topic_by_id(String article_topic_id) {
        return daoTopic.get_topic_by_id(article_topic_id);
    }

    @Override
    public BeanTopic add_topic(BeanTopic beanTopic) {
        return daoTopic.add_topic(beanTopic);
    }
}
