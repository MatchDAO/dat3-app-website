/*
 * @Author: WangHao
 * @Date: 2023-01-07 16:48:09
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-07 17:13:44
 * @Description: 模拟图标-关闭(×)
 */
import React from 'react';
import './style.less';

export default function IconClose(props) {
  return (
    <span onClick={props.onClick} className="dat3-icon-close" />
  )
}