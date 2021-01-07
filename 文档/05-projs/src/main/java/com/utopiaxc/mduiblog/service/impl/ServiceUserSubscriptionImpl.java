package com.utopiaxc.mduiblog.service.impl;

import com.utopiaxc.mduiblog.dao.DaoArticle;
import com.utopiaxc.mduiblog.dao.DaoUserSubscription;
import com.utopiaxc.mduiblog.dao.impl.DaoArticleImpl;
import com.utopiaxc.mduiblog.dao.impl.DaoUserSubscriptionImpl;
import com.utopiaxc.mduiblog.service.ServiceUserSubscription;

public class ServiceUserSubscriptionImpl implements ServiceUserSubscription {
    DaoUserSubscription daoUserSubscription=null;
    public ServiceUserSubscriptionImpl() throws Exception{
        daoUserSubscription=new DaoUserSubscriptionImpl();
    }
    @Override
    public int get_subscription_count_by_id(String user_id) {
        return daoUserSubscription.get_subscription_count_by_id(user_id);
    }
}
