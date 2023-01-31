/*
 * @Author: WangHao
 * @Date: 2023-01-07 14:12:34
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-21 14:44:39
 * @Description: 弹窗
 */


import React, { Component, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { IconClose } from 'components';
import './style.less';

const containers = {};

const Modal = props => {
  const { children, closeFn } = props;
  const style = useMemo(() => {
    const bg = {};
    const borderTop = {};
    const borderBottom = {};
    const { bgStart, bgEnd } = props.styles;
    if (bgStart && bgEnd) {
      bg.background = `linear-gradient(180deg, ${bgStart} 0%, ${bgEnd} 100%)`;
      borderTop.backgroundColor = bgStart;
      borderTop.borderColor = bgStart;
      borderBottom.backgroundColor = bgEnd;
      borderBottom.borderColor = bgEnd;
    }
    return { bg, borderBottom, borderTop };
  }, [])
  return (
    <div className="modal-plane" onTouchMove={e => e.preventDefault()}>
      <div className="modal-mask" />
      <div className="modal-box" style={props.styles} onClick={e => e.stopPropagation()}>
        {
          props.styles.bg ? (
            <img src={props.styles.bg} alt="" />
          ) : null
        }
        <div className="modal-box-padding" style={style.bg}>
          <div className="modal-content">
            { closeFn && <IconClose onClick={closeFn} /> }
            { children || null }
          </div>
        </div>
      </div>
    </div>
  );
};

class ModalComponent extends Component {
  static close(id) {
    if (containers[id]) {
      ReactDOM.unmountComponentAtNode(containers[id]);
      if (id) {
        document.body.removeChild(containers[id]);
      }
      window.removeEventListener('hashchange', close);
      window.removeEventListener('popstate', close);
    }
  }
  static alert(content = null, close = true, styles = {}) {
    const timestamp = Date.now();
    containers[timestamp] = document.createElement('div');
    document.body.appendChild(containers[timestamp]);
  
    function closeModal() {
      ModalComponent.close(timestamp);
    }
  
    window.addEventListener('hashchange', closeModal);
    window.addEventListener('popstate', closeModal);
    ReactDOM.render(
      <Modal closeFn={close ? closeModal : null} styles={styles}>
        { content }
      </Modal>,
      containers[timestamp],
    );
    return timestamp;
  }
}

export default ModalComponent;
