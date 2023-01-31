/*
 * @Author: WangHao
 * @Date: 2023-01-08 14:37:47
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-25 13:03:42
 * @Description: 下载引导页
 */
import React, { useState, useMemo, useEffect, useRef } from 'react';
import text from 'assets/text';
import './style.less';

export default function Download() {
	const { animation = 0.2 } = text;
	const source = text.download || {};
	const { roadMaps, channels = {} } = source;
	const hasRoadMap = Array.isArray(roadMaps) && roadMaps.length;
	const navList = useMemo(() => {
		const list = [];
		if (hasRoadMap) {
			roadMaps.forEach(roadMap => {
				list.push({ label: roadMap.name, value: roadMap.name })
			})
		}
		return list;
	}, []);
	const [roadMap, setRoadMap] = useState(hasRoadMap ? roadMaps[0].list : []);
	const [currentNav, setCurrentNav] = useState(navList.length ? navList[0].value : '');
	const bgRef = useRef(hasRoadMap ? (roadMaps[0].bg || null) : null)

	const infoLen = useMemo(() => {
		let len = 0;
		if (Array.isArray(roadMap) && roadMap.length) {
			len = Array.isArray(roadMap.list) ? roadMap.list.length : 0;
		}
		return len;
	}, [roadMap]);

	const downloadStart = infoLen * animation + animation;
	const downloadHead = downloadStart + animation;
	const downloadLogo = downloadHead + animation;

	function changeNav(evt) {
		const value = evt.target?.dataset?.value;
		if (value && value !== currentNav) {
			let item = null;
			for (const roadMap of roadMaps) {
				if (roadMap.name === value) {
					item = roadMap;
				}
			}
			setCurrentNav(value);
			item && (bgRef.current = item.bg || null);
			item && setRoadMap(item.list);
		}
	}

	useEffect(() => {
		window.WOW?.sync();
	}, [currentNav])

	return (
		<div className="dat3-download-page">
			{
				navList.length ? (
					<div className="dat3-road-map-container">
						<div
							className="dat3-road-map-nav wow fadeInUp"
							data-wow-delay={`${animation}s`}
							style={{ backgroundImage: `url(${bgRef.current})` }}
						>
							<ul onClick={changeNav}>
								{
									navList.map(nav => (
										<li
											className={currentNav === nav.value ? 'active' : ''}
											key={nav.value}
											data-value={nav.value}
										>
											{nav.label}
										</li>
									))
								}
							</ul>
						</div>
						{
							source.header ? (
								<header className="wow fadeInUp">{source.header}</header>
							) : null
						}
						<div className="dat3-road-map-info">
							<RoadMapList animation={animation} nav={currentNav} list={roadMap} />
						</div>
					</div>
				) : null
			}
			<div
				className="dat3-download-container wow fadeInUp"
				data-wow-delay={`${downloadStart}s`}
			>
				<a href={channels.url} target="blank">
					<img src={channels.logo} alt="download" />
				</a>
			</div>
		</div>
	)
}

function RoadMapList(props) {
	return (
		<div className="dat3-road-map-list">
			{
				Array.isArray(props.list) && props.list.length ? (
					props.list.map((item, index) => (
						<RoadMapItem
							animation={props.animation}
							key={`${item.title}${props.nav}`}
							index={index} {...item}
						/>
					))
				) : null
			}
		</div>
	)
}

function RoadMapItem(props) {
	return (
		<div className="dat3-road-map-item wow fadeInUp" data-wow-delay={`${props.index * props.animation}s`}>
			<header>{props.title}</header>
			{
				Array.isArray(props.list) && props.list.length ? (
					props.list.map(text => <p key={text}><i /> {text}</p>)
				) : null
			}
		</div>
	)
}