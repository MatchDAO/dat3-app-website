/*
 * @Author: WangHao
 * @Date: 2023-01-08 14:36:29
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-28 12:37:05
 * @Description: Token释放页
 */
import React, { useEffect, useRef } from 'react';
import { Button, Container } from 'components';
import { useNavRoute } from 'providers/navRouteProvider';
import text from 'assets/text';
import utils from 'utils';
import echarts from '../../../echarts.min';
import './style.less';

export default function Token() {
	const { animation = 0.2 } = text;
	const navigate = useNavRoute();
	const data = text.token || {};
	const lineRef = useRef(null);

	function switchPage() {
		navigate('/download');
	}

	function getChartData() {
		const {
			x = [],
			y = {},
			zIndex = {},
			xLimit = {},
			yLimit = {},
			color = {},
			legend = [],
			chartTitle = '',
		} = text.token.chart || {};
		const legends = {
			type: 'plain',
			data: [],
		};
		const data = [];
		const xData = [];
		const types = Object.keys(y);
		types.forEach((type, index) => {
			const yPos = y[type] || {};
			data.push({
				lineStyle: { opacity: 0 },
				data: yPos,
				type: 'line',
				smooth: true,
				cap: 'round',
				symbol: 'none',
				areaStyle: { color: color[type], opacity: 1, },
				name: legend[index],
			});
			// legends.data[index] = {
			// 	name: legend[index],
			// 	textStyle: { color: '#333' },
			// 	itemStyle: {
			// 		color: color[type],
			// 		shadowBlur: 1,
			// 		shadowColor: '#ccc',
			// 		borderWidth: 2,
			// 		borderColor: '#fff',
			// 		borderCap: 'butt',
			// 	},
			// }
		})
		x.forEach(item => {
			xData.push({ value: item })
		})
		return { x, data, legends, xLimit, yLimit, title: chartTitle };
	}
	
	useEffect(() => {
		if (lineRef.current) {
			const myChart = echarts.init(lineRef.current);
			const { x, data, title, xLimit, yLimit } = getChartData();
			const isMobile = utils.isMobile();
			myChart.setOption({
				// legend: {
				// 	...legends,
				// 	show: true,
				// 	bottom: 0,
				// 	left: isMobile ? 30 : 48,
				// 	itemGap: isMobile ? 5 : 15,
				// 	icon: 'roundRect',
				// 	textStyle: { lineHeight: 14 }
				// },
				// title: {
				// 	show: true,
				// 	text: title,
				// 	left: 'center',
				// 	textStyle: { fontSize: 16 }
				// },
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: x,
					axisLine: { lineStyle: { color: '#000', width: 2 } },
					axisTick: { show: true, color: '#000', length: 9 },
					splitLine: { show: false },
					axisLabel: {
						show: true,
						showMaxLabel: false,
						fontFamily: 'LEMONMILK-Regular',
						margin: 12,
						fontSize: 10,
						interval: 0,
					},
					// min: xLimit.min,
					// max: xLimit.max,
					// 分割线数量固定
				},
				yAxis: {
					type: 'value',
					min: yLimit.min,
					max: yLimit.max,
					axisLine: { show: false, lineStyle: { color: '#ccc', width: 2 } },
					axisTick: { show: false, alignWithLabel: true },
					axisLabel: {
						formatter(value) { return `${Number(value).toFixed(2)}%` },
						fontFamily: 'LEMONMILK-Regular',
					},
					splitLine: {
						lineStyle: { color: '#000', width: 2 }
					},
					interval: 20,
				},
				series: data,
				grid: {
					top: 10,
					left: isMobile ? '19%' : '18%',
					right: '8%',
					// 展示图例时bottom
					// bottom: isMobile ? 70 : 50,
					bottom: 30,
					borderColor: '#000',
					borderWidth: 2,
					z: 1,
				},
				textStyle: {
					color: '#000',
					fontWeight: 400,
					fontSize: 13,
					lineHeight: 17
				},
			});
		}
		window.WOW?.sync();
	}, [])

	return (
		<div className="dat3-token-page">
			<Container>
				<div
					className="dat3-charts"
					style={{ width: '100%', height: `${text.token.chart.chartHeight}px` }}
					ref={lineRef}
				/>
				<div className="dat3-chart-items">
					{
						data.totals.map(item => {
							return (
								<p>
									<span style={{ backgroundColor: item.color }} />
									<span>{item.name}</span>
								</p>
							)
						})
					}
				</div>
				<div className="dat3-token-info">
					<header className="wow fadeInUp">{data.title}</header>
					<p className="wow fadeInUp" data-wow-delay={`${animation}s`}>{data.text}</p>
				</div>
			</Container>
			<Button
				onClick={switchPage}
				className="wow fadeInUp"
				data-wow-delay={`${(animation * 2).toFixed(1)}s`}
			>
				{data.btnText}
			</Button>
		</div>
	)
}

function TokenReward(props) {
  return (
    <div className="dat3-token-rewards-item wow fadeInUp" data-wow-delay={props.delay}>
      <img src={props.icon} alt="" />
      <div className="dat3-token-reward-description">
        <p>{props.name}</p>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

function TotalItem(props) {
	return (
		<div className="dat3-total-item wow fadeInUp" data-wow-delay={`${props.index * props.animation}s`}>
			<Button color={props.color}>{props.name}</Button>
			<p style={{ color: props.color }}>{props.value}</p>
		</div>
	)
}