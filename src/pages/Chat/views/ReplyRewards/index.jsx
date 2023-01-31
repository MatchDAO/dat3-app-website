/*
 * @Author: WangHao
 * @Date: 2023-01-07 15:01:14
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-28 16:31:49
 * @Description: 聊天-奖励回复弹窗内容
 */
import React, { useEffect } from 'react';
import { Button } from 'components';
import text from 'assets/text';
import './style.less';

import btnBg from 'assets/images/chat/img_btn_bg.png';

export default function ReplyRewards(props) {
  const { animation = 0.2 } = text;
  const { head = {}, rewards = [], btnText = '' } = text.replyWards || {};
  const hasRewards = Array.isArray(rewards) && rewards.length;
  const tipStart = hasRewards ? (rewards.length + 1) * animation : animation * 2;

  useEffect(() => {
    window.WOW?.sync();
  }, [])

	return (
    <div className="dat3-chat-reply-rewards">
      <header>
        <p className="wow fadeInUp">{head.title}</p>
        <p className="wow fadeInUp" data-wow-delay={`${animation}s`}>
          <span>{head.mainTip}</span>
          <span>{head.sideTip}</span>
        </p>
      </header>
      <div className="dat3-chat-reply-rewards-content">
        <div className="dat3-chat-content-list">
          {
            hasRewards ? (
              rewards.map((reward, index) => (
                <ReplyReward key={reward.title} animation={animation} index={index} { ...reward } />
              ))
            ) : null
          }
        </div>
        <Button
          data-wow-force="1"
          className="wow fadeInUp"
          data-wow-delay={`${tipStart + animation}s`}
          onClick={props.navigate}
          bg={btnBg}
        >
          { btnText }
        </Button>
      </div>
    </div>
  )
}

function ReplyReward(props) {
  return (
    <div
      className="dat3-reply-reward-item wow fadeInUp"
      data-wow-delay={`${(props.animation + (props.index + 1) * props.animation).toFixed(1)}s`}
    >
      <img src={props.icon} alt="logo-coin" />
      <div className="dat3-reward-description">
        <p>{props.title}</p>
        <p>
          {props.text}
          <span>{props.tip}</span>
        </p>
      </div>
    </div>
  )
}