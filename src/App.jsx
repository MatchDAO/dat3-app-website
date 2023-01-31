/*
 * @Author: WangHao
 * @Date: 2023-01-04 15:27:08
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-28 16:54:02
 * @Description: 项目主入口
 */
// 库&插件
import React from 'react';
import { Route, Routes, BrowserRouter, MemoryRouter } from 'react-router-dom';
import 'lib-flexible';

import NavPage from './pages/NavPage/NavPage';
import Home from './pages/Home';
import Chat from './pages/Chat/Chat';
import Search from './pages/Search';
import UserInfo from './pages/UserInfo';
import Token from './pages/Token';
import Download from './pages/Download';

export default function AppRouter() {
	return (
		<MemoryRouter>
			<Routes>
				<Route path="/" element={<NavPage />}>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/chat" element={<Chat />} />
					<Route path="/search" element={<Search />} />
					<Route path="/userInfo" element={<UserInfo />} />
					<Route path="/token" element={<Token />} />
					<Route path="/download" element={<Download />} />
					<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</MemoryRouter>
	)
}


// const Routes = (() => {
//   return (
//     <TransitionGroup>
//       <CSSTransition classNames="fade" timeout={{ exit:300, enter:500 }}>
//         {/* <Router location={location}> */}
// 					<Route path="/" element={<NavPage />}>
// 						<Route path="/" element={<Home />} />
// 						<Route path="/home" element={<Home />} />
// 						<Route path="/chat" element={<Chat />} />
// 						<Route path="/search" element={<Search />} />
// 						<Route path="/userInfo" element={<UserInfo />} />
// 						<Route path="/token" element={<Token />} />
// 						<Route path="/download" element={<Download />} />
// 						<Route path="*" element={<Home />} />
// 					</Route>
//         {/* </Router> */}
//       </CSSTransition>
//     </TransitionGroup>
//   );
// });