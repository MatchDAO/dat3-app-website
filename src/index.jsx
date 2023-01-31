/*
 * @Author: WangHao
 * @Date: 2023-01-04 15:23:04
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-13 14:23:25
 * @Description: 项目入口
 */
import React from 'react';
import ReactDOM from 'react-dom';
import utils from 'utils';
import App from './App';

// 样式
import './styles/reset.css';
import './styles/global.css';
import './styles/animate.css';
import './styles/entry.less';
import './styles/routes.css';

const html = document.querySelector('html');
const domContainer = document.querySelector('#root');
domContainer.classList += utils.isMobile() ? 'dat3-mobile' : 'dat3-web';
html.classList = "full";

ReactDOM.render(<App />, domContainer);