/*
 * @Author: WangHao
 * @Date: 2023-01-04 15:36:36
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-28 11:16:33
 * @Description: 聊天页
 */
import React, { useState, useEffect, useRef } from 'react';
import { Button, Logo, Modal, Container } from 'components';
import { useNavRoute } from 'providers/navRouteProvider';
import text from 'assets/text';
import utils from 'utils';
import ReplyRewards from './views/ReplyRewards';
import ChatInfo from './views/ChatInfo/ChatInfo';
import './style.less';

function DefaultInfoCoin(props) {
  return (
    <div className="reply-coin">
      { props.icon ? <img src={props.icon} /> : null  }
      <span onClick={props.onClick}>{props.text}</span>
    </div>
  )
}

const Chat = () => {
  const { animation = 0.2 } = text;
  const { logo = {}, info = [], btnText, bg, chat_btn, inputText, inputTip } = text.chat || {};
  const { bg: modalBg } = text.replyWards || {};
  const hasInfo = Array.isArray(info) && info.length;
  const [infoArr, setInfoArr] = useState(hasInfo ? [getChatInfoItem(info[0])] : []);
  const [showSwitch, setShowSwitch] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavRoute();

  function getChatInfoItem(item) {
    item = { ...item };
    if (item.extra) {
      item.extra = (
        <DefaultInfoCoin
          icon={item.extra.icon}
          text={item.extra.text}
          onClick={showRewards}
        />
      );
    }
    return item;
  }

  function closeModal() {
    Modal.close(modalRef.current)
  }

	function switchPage() {
		navigate('/userInfo');
	}

  function showRewards() {
    modalRef.current = Modal.alert(
      <ReplyRewards navigate={closeModal} />,
      true,
      {
        bg: modalBg
      }
    );
  }
  
  function addOwnerInfo() {
    if (hasInfo && info.length > 1) {
      setInfoArr([...infoArr, getChatInfoItem(info[1]), getChatInfoItem(info[2])]);
      setShowSwitch(true)
    }
  }

  function resizeBtnPos(container, target) {
    if (container.scrollTop + container.clientHeight >= container.scrollHeight - 5) {
      target.style.bottom = '0.463rem';
    } else if (target.style.bottom !== 0) {
      target.style.bottom = 0;
    } else if (container.clientHeight === container.scrollHeight) {
      target.style.bottom = '1rem';
    }
  }

  useEffect(() => {
    if (infoArr.length) {
      window.WOW?.sync();
    }
  }, [infoArr.length])

  useEffect(() => {
    const isMobile = utils.isMobile();
    let scrollContainer = null;
    let target = null;
    if (!isMobile) {
      // scrollContainer = document.querySelector('.dat3-main-container');
      // target = document.querySelector('.dat3-input-container');
      // if (scrollContainer) {
      //   if (scrollContainer.clientHeight === scrollContainer.scrollHeight) {
      //     target.style.bottom = '1rem';
      //   }
      //   scrollContainer.addEventListener('scroll', function(evt) {
      //     resizeBtnPos(scrollContainer, target)
      //   })
      //   window.addEventListener('resize', function() {
      //     resizeBtnPos(scrollContainer, target)
      //   })
      // }
    }
    return () => {
      // scrollContainer.removeEventListener('scroll', function(evt) {
      //   resizeBtnPos(scrollContainer, target)
      // })
      // window.removeEventListener('resize', function() {
      //   resizeBtnPos(scrollContainer, target)
      // })
      scrollContainer = null;
      target = null;
      Modal.close(modalRef.current);
    };
  }, [])

	return (
    <div className="dat3-chat-page" style={{ backgroundImage: `url(${bg})` }}>
      <Container>
        <Logo icon={logo.icon} text={logo.text} />
        <div className="dat3-chat-container">
          <div className="dat3-chat-content-list">
            {
              infoArr.map((info, index) => (
                <ChatInfo key={info.type} delay={((index + 1) * animation).toFixed(1)} {...info} />
              ))
            }
          </div>
        </div>
      </Container>
      <div className="dat3-input-container">
        {
          infoArr.length > 2 ? null : (
            <div className="dat3-input-area">
              <input type="text" readOnly value={inputText} />
              <img className="dat3-chat-btn" src={chat_btn} alt="btn-submit" onClick={addOwnerInfo} />
            </div>
          )
        }
        {
          !showSwitch && infoArr.length === 1 ? (
            <p className="dat3-input-btn-tip wow fadeInDown" data-wow-delay="0.6s">
              {inputTip}
            </p>
          ) : null
        }
        {
          showSwitch ? (
            <Button
              className="wow fadeInUp"
              data-wow-delay="0.6s"
              onClick={switchPage}
            >
              {btnText}
            </Button>
          ) : null
        }
      </div>
      {/* <Button
        className={infoArr.length === 1 ? 'wow fadeInUp' : ''}
        data-wow-delay={`${animation}s`}
        disabled={disabled}
        onClick={addOwnerInfo}
      >
        {btnText}
      </Button> */}
    </div>
  )
}


export default Chat;