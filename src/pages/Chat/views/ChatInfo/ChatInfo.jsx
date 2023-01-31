/*
 * @Author: WangHao
 * @Date: 2023-01-07 10:33:45
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-21 13:08:50
 * @Description: 聊天信息项
 */
import React from 'react';
import './style.less';

export default function ChatInfo(props) {
  return (
    <div className={
      `dat3-chat-info-item wow fadeInUp ${props.role || ''} ${props.className || ''}`
      }
      data-wow-delay={`${props.delay}s`}
    >
      {props.role === 'other' ? (
        <img src={props.avatar} alt="user-icon"/>
      ): null}
      <div className="dat3-chat-content">
        <p>{props.text}</p>
        <div className="dat3-content-extra">{props.extra}</div>
      </div>
      {props.role === 'owner' ? (
        <img src={props.avatar} alt="user-icon"/>
      ): null}
    </div>
  )
}