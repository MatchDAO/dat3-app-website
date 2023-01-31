/*
 * @Author: WangHao
 * @Date: 2023-01-11 22:51:24
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-11 22:54:16
 * @Description: 页面内容容器
 */
import React from 'react';
import './style.less';

export default function Container(props) {
  return (
    <div className="dat3-page-container">
      {props.children}
    </div>
  )
}
