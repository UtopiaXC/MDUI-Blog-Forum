package com.utopiaxc.mduiblog.service.impl;

import com.utopiaxc.mduiblog.bean.BeanWebMessage;
import com.utopiaxc.mduiblog.dao.DaoWebMessage;
import com.utopiaxc.mduiblog.dao.impl.DaoWebMessageImpl;
import com.utopiaxc.mduiblog.service.ServiceWebMessage;

import java.util.Vector;

public class ServiceWebMessageImpl implements  ServiceWebMessage {
    DaoWebMessage daoWebMessage;
    public ServiceWebMessageImpl() throws Exception{
        daoWebMessage=new DaoWebMessageImpl();
    }
    @Override
    public Vector<BeanWebMessage> get_web_messages() {
        return daoWebMessage.get_web_messages();
    }
}
