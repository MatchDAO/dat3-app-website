/*
 * @Author: WangHao
 * @Date: 2022-02-28 16:14:27
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-04 15:31:35
 * @Description: 请添加当前文件描述
 */
import React, { PureComponent } from 'react';
/**
 * 错误边界
 * @param props.children 子组件
 * @param props.errorContent 页面出错展示内容
 * @returns JSX.Element
 */
class ErrorBoundary extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
	}

  static getDerivedStateFromError() {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

	componentDidCatch(error, errorInfo) {
		console.error('界面加载出错: ', error, errorInfo);
	}

	render() {
		const {
			state: { hasError },
			props: { children, errorContent }
		} = this;
		if (hasError) {
			return errorContent || <div>页面加载出错！</div>
		}
		return children;
	}
};

export default ErrorBoundary;
