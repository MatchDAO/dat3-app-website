/*
 * @Author: WangHao
 * @Date: 2023-01-07 15:01:14
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-16 22:04:23
 * @Description: 聊天-奖励回复弹窗内容
 */
import React from 'react';
import { Button } from 'components';
import text from 'assets/text';
import './style.less';

export default function Relationship(props) {
  const watchEffect = text.watchEffect || {};
	return (
    <div className="dat3-user-relationship">
      <header>{watchEffect.header}</header>
      <div className="dat3-user-relationship-img">
        <img src={watchEffect.image} alt="gif-relationship" />
      </div>
      <Button onClick={props.navigate}>{watchEffect.btnText}</Button>
    </div>
  )
}