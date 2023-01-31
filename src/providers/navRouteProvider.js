/*
 * @Author: WangHao
 * @Date: 2023-01-08 10:45:52
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-08 11:22:03
 * @Description: 顶层注入的切换路由方法
 */
import React from 'react';

const navRouteContext = React.createContext(function() { console.log('route nav') });

if (process.env.NODE_ENV !== 'production') {
	navRouteContext.displayName = 'routeSwitch';
}

export function useNavRoute() {
	return React.useContext(navRouteContext);
}

export const NavRouteContext = navRouteContext;