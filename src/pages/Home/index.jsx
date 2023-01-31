/*
 * @Author: WangHao
 * @Date: 2023-01-04 15:36:36
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-21 14:30:10
 * @Description: 项目主页
 */
import React, { useEffect } from 'react';
import { Button, Container } from 'components';
import { useNavRoute } from 'providers/navRouteProvider';
import text from 'assets/text';
import './style.less';

export default function Home() {
	const navigate = useNavRoute();
	const { animation = 0.2 } = text;
	const { icon_logo, icon_logo_font, bg, partners = [], btnText = '', description } = text.home;
	const hasPartners = Array.isArray(partners);

	function switchPage() {
		navigate('/chat');
	}

	useEffect(() => {
		window.WOW?.sync();
	}, [])

	return (
		<div className="dat3-home-page" style={{ backgroundImage: `url(${bg})` }}>
			<div className="dat3-home-logos wow fadeInDown">
				<img src={icon_logo} alt="logo"/>
				<img src={icon_logo_font} alt="logo-font"/>
			</div>
			<div className="dat3-bottom">
				<Button
					className="wow fadeInUp"
					onClick={switchPage}
					data-wow-delay={`${animation}s`}
				>
					{btnText}
				</Button>
				<div className="dat3-partners-logos">
					<div className="dat3-partners-list">
						{
							hasPartners ? (
								partners.map((partner, index) => (
									<img
										key={`${index * animation}s`}
										className="wow fadeInUp"
										src={partner.icon}
										data-wow-delay={`${animation + index * animation}s`}
										alt="partner-logo"
									/>
								))
							) : null
						}
					</div>
					<p
						className="wow fadeInUp" data-wow-delay={`${(partners.length + 1) * animation}s`}
					>{description}</p>
				</div>
			</div>
		</div>
	)
}
