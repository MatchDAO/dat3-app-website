/*
 * @Author: WangHao
 * @Date: 2023-01-04 22:06:00
 * @LastEditors: WangHao
 * @LastEditTime: 2023-03-31 21:13:40
 * @Description: 导航页面
 */
import React, { useEffect, useCallback, useRef } from 'react';
import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import { WOW } from 'lib/wow';
import { Button } from 'components';
import { NavRouteContext } from 'providers/navRouteProvider';
import text from 'assets/text';
import utils from 'utils';
import './style.less';

function NavList(props) {
  return (
    <ul className="dat3-nav-list">
      {
        Array.isArray(props.list) ? (
          props.list.map(nav => (
            <li key={nav.name}>
              {
                nav.out ? (
                  <Link to={nav.url}>
                    { nav.icon && <img src={nav.icon} alt={nav.name} /> }
                    <span>{nav.name}</span>
                  </Link>
                ) : (
                  <a href={nav.url} target="blank">
                    { nav.icon && <img src={nav.icon} alt={nav.name} /> }
                    <span>{nav.name}</span>
                  </a>
                )
              }
            </li>
          ))
        ) : null
      }
      {props.children}
    </ul>
  )
}

const NavPage = () => {
  const { navList = [], logo, arrow } = text.navPage || {};
  const { channels: { url: googleUrl = '' } = {} } = text.download || {};
  const navigate = useNavigate();
  const platformRef = useRef(utils.isMobile());
  const outPage = useRef(navList[navList.length - 1]);
  const location = useLocation();
  const isHomePage = ['', '/', '/home'].indexOf(location.pathname) > -1;
  const locationRef = useRef(location.pathname);

  const isMint = (location.pathname || '').indexOf('mint') > -1;

  if (isMint) {
    navList[navList.length - 1] = { name: 'HOME', url: '/', out: true };
  } else {
    navList[navList.length - 1] = outPage.current;
  }

  const navRoute = useCallback(url => {
    locationRef.current = location.pathname;
    navigate(url, { replace: true });
  }, [location.pathname])

  function goBack() {
    const paths = ['/home', '/chat', '/userInfo', '/token', '/download'];
    const currentPos = paths.indexOf(location.pathname);
    navigate(paths[Math.max(0, currentPos - 1)]);
  }

  useEffect(() => {
    // if (window.WOW) {
    //   window.WOW.stop()
    //   window.WOW = null;
    // }
    window.WOW = new WOW({
      scrollContainer: '.dat3-main-container',
      offset: 5,
      live: true
    });
    window.WOW?.init();
  }, [])

  return (
    <NavRouteContext.Provider value={navRoute}>
      <div className="dat3-nav-page">
        {
          platformRef.current ? null : (
            <header>
              <div className="dat3-nav-logo">
                <Link to="/home">
                  <img className="dat3-icon-logo" src={logo} alt="logo" />
                </Link>
              </div>
              <NavList list={navList}>
                {
                  utils.isMobile() ? null : (
                    <a href={googleUrl} target="blank">
                      <Button>GOOGLE PLAY</Button>
                    </a>
                  )
                }
              </NavList>  
            </header>
          )
        }
        <div className={`dat3-main-container ${isMint ? 'dat3-mint' : ''}`}>
          {
            isMint ? (
              <Outlet />
            ) : (
              <main className="dat3-main">
                {
                  isHomePage ? null : (
                    <div className="dat3-back-btn" onClick={goBack}>
                      <img src={arrow} alt="后退"/>
                    </div>
                  )
                }
                <Outlet />
              </main>
            )
          }
        </div>
        {
          platformRef.current ? (
            <footer className="dat3-footer">
              <NavList list={navList} />
            </footer>
          ) : null
        }
      </div>
    </NavRouteContext.Provider>
  )
}

export default NavPage;