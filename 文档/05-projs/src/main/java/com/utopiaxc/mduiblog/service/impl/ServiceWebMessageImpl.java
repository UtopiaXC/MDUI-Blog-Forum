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

    @Override
    public boolean update_web_title(String web_title) {
        return daoWebMessage.update_web_title(web_title);
    }

    @Override
    public boolean update_web_footer(String web_footer) {
        return daoWebMessage.update_web_footer(web_footer);
    }
}
