/*
 * @Author: WangHao
 * @Date: 2022-02-28 16:07:45
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-04 16:46:39
 * @Description: 懒加载组件
 */
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'components';

/**
 * 懒加载组件
 * @param props.children 懒加载组件
 * @param props.waitContent 懒加载等待展示组件
 * @param props.className 懒加载区域自定义类
 * @param props.errorContent 页面出错展示内容
 * @returns JSX.Element
 */
const LazyArea = (props) => {
	const {
		children, waitContent, className, errorContent,
	} = props;
	return (
		<div className={`lazy-area ${className || ''}`}>
			<ErrorBoundary errorContent={errorContent}>
				<Suspense fallback={waitContent || <div>正在加载...</div>}>
					{ children }
				</Suspense>
			</ErrorBoundary>
		</div>
	);
};

export default LazyArea;
