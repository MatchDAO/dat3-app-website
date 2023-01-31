/*
 * @Author: WangHao
 * @Date: 2023-01-08 13:27:50
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-21 18:57:23
 * @Description: 用户信息
 */
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal, Carousel, Container } from 'components';
import text from 'assets/text';
import utils from 'utils';
import Relationship from './views/RelationShip';
import './style.less';

export default function UserInfo() {
  const { animation = 0.2 } = text;
	const navigate = useNavigate();
  const modalRef = useRef(null);
  const userInfo = utils.isObject(text.userInfo) ? { ...text.userInfo } : {};
  const hasSigns = Array.isArray(userInfo.signs);
  const hasDescription = Array.isArray(userInfo.descriptions);
  const descriptionStart = hasSigns ? userInfo.signs.length * animation : 0;
  const btnStart = (hasDescription ? hasDescription.length * animation : 0) + descriptionStart;

  function watchUserRelationship() {
    modalRef.current = Modal.alert(
      <Relationship navigate={switchPage} />,
      true,
      userInfo.bg || { bgStart: '#FFFFFF', bgEnd: '#fff' }
    );
  }

	function switchPage() {
		navigate('/token');
	}

  useEffect(() => {
    window.WOW?.sync();
    return () => Modal.close(modalRef.current);
  }, [])

	return (
		<div className="dat3-user-info">
      <Container>
        <div className="dat3-scroll">
          <Carousel
            slideImgs={userInfo.scroll}
            screenWidth="450"
            parentNodeName=".dat3-main"
            delay={userInfo.scrollDelay}
            isSpots
          />
        </div>
        <div className="dat3-user-info-content">
          <div className="dat3-user-status wow fadeInDown">
            <span>{userInfo.name}</span>
            <span>{userInfo.status}</span>
          </div>
          {
            hasDescription && userInfo.descriptions.length ? (
              <div className="dat3-user-description">
                <ul>
                  {
                    userInfo.descriptions.map((description, index) => (
                      <li
                        key={description.title}
                        className="wow fadeInDown"
                        data-wow-delay={`${animation * index + descriptionStart}s`}
                      >
                        <p>{description.title}</p>
                        <p>{description.content}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ) : null
          }
        </div>
      </Container>
      <Button
        className="wow fadeInUp"
				data-wow-delay="0.6s"
        onClick={switchPage}
      >
        { userInfo.btnText }
      </Button>
		</div>
	)
}