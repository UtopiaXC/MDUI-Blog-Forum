package com.utopiaxc.mduiblog.dao;

import com.utopiaxc.mduiblog.bean.BeanWebMessage;

import java.util.Vector;

public interface DaoWebMessage {
    Vector<BeanWebMessage> get_web_messages();

    boolean update_web_title(String web_title);

    boolean update_web_footer(String web_footer);
}
