/*
 * @Author: WangHao
 * @Date: 2023-03-30 22:00:05
 * @LastEditors: WangHao
 * @LastEditTime: 2023-03-30 22:06:44
 * @Description: 请添加当前文件描述
 */
import React from 'react';
import './style.less';

export default function Logo(props) {
  return (
    <div className="dat3-logo">
      <img src={props.icon} alt="icon" />
      { props.text && <span>{props.text}</span> }
    </div>
  );
}