/*
 * @Author: WangHao
 * @Date: 2023-01-08 10:00:48
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-17 19:13:47
 * @Description: 自动搜索页面
 */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'components';
import text from 'assets/text';
import utils from 'utils';
import './style.less';

import icon_search from 'assets/images/icon_search.png';
import icon_close from 'assets/images/icon_close.png';

export default function Search() {
  const { animation = 0.2 } = text;
  const { title = '', searchText = '', searchUsers = [], coin, btnText } = text.search || {};
	const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState('');
  const [btnShow, setBtnShow] = useState(false);
  const hasCoin = utils.isObject(coin);

	function switchPage() {
		navigate('/userInfo');
	}

  function updateUserList() {
    if (Array.isArray(searchUsers)) {
      setUserList(searchUsers);
    }
  }

  useEffect(() => {
    const wordStart = search.length;
    const total = searchText || '';
    const showKey = total.slice(wordStart, wordStart + 1);
    const newWord = `${search}${showKey}`;
    if (searchText) {
      if (total.length >= newWord.length && showKey) {
        window.setTimeout(() => setSearch(newWord), 500);
      } else if (total.length === newWord.length) {
        window.setTimeout(updateUserList, 500);
      }
    }
  }, [search])

  useEffect(() => {
    if (userList.length > 0) {
      setTimeout(() => setBtnShow(true), 500)
    }
  }, [userList.length])
  
  useEffect(() => {
    if (userList.length) {
      window.WOW?.sync();
    }
  }, [btnShow, userList.length])

	return (
		<div className="dat3-search-page">
      <Container>
  			<header className="dat3-search-header">
          {title}
  			</header>
  			<div className="dat3-search-input">
  				<img src={icon_search} alt="icon_search" />
          <input type="text" value={search} readOnly />
          <img src={icon_close} alt="icon_close" />
  			</div>
        <div className="dat3-user-list">
          {userList.map((userInfo, index) => (
            <UserItem animation={animation} key={userInfo.name} index={index} {...userInfo} />
          ))}
        </div>
      </Container>
      {
        btnShow ? (
          <div className="dat3-button-container wow fadeInUp" data-wow-delay={`${animation}s`}>
            { hasCoin && <IconCoin {...coin} animation={animation} /> }
            <Button onClick={switchPage}>{btnText}</Button>
          </div>
        ) : null
      }
		</div>
	)
}

function IconCoin(props) {
  return (
    <div className="dat3-icon-coin wow fadeInDown" data-wow-delay={`${props.animation * 2}s`}>
      <img src={props.icon} alt="icon-coin" />
      {props.text}
    </div>
  )
}

function UserItem(props) {
  return (
    <div
      className="dat3-search-user-item wow fadeInUp"
      data-wow-delay={`${props.index * props.animation}s`}
    >
      <img src={props.avatar} alt="user-logo" />
      <div className="dat3-search-user-content">
        <p>{props.name}</p>
        <p>{props.info}</p>
      </div>
    </div>
  )
}