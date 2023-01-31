/*
 * @Author: WangHao
 * @Date: 2023-01-05 20:45:28
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-28 16:30:48
 * @Description: 公共组件
 */
import React, { useMemo } from 'react';
import './style.less';

export default function Button(props) {
  const { disabled, className, onClick, styles, children, color, bg, ...rest } = props;
  const style = useMemo(() => {
    return {
      backgroundColor: color,
      borderTopColor: color,
      borderBottomColor: color,
      ...styles,
    }
  }, [color, styles])

  return (
    <div
      className={`dat3-button${disabled ? ' disabled' : ''} ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {
        bg ? (
          <img src={bg} />
        ) :  (
          <>
            <div className="dat3-btn-bg">
              <i style={style} />
              <i style={style} />
              <i style={style} />
              <i style={style} />
              <i style={style} />
              <i style={style} />
              <i style={style} />
              <i style={style} />
              <i style={style} />
            </div>
            <p>{children}</p>
          </>
        )
      }
    </div>
  )
}
