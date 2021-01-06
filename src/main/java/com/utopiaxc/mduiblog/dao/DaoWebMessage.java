package com.utopiaxc.mduiblog.dao;

import com.utopiaxc.mduiblog.bean.BeanWebMessage;

import java.util.Vector;

public interface DaoWebMessage {
    Vector<BeanWebMessage> get_web_messages();
}
