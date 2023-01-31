/*
 * @Author: WangHao
 * @Date: 2023-01-07 11:20:42
 * @LastEditors: WangHao
 * @LastEditTime: 2023-01-28 17:18:44
 * @Description: 页面内配置内容
 */
import img_user_img from 'assets/images/img_user_img.png';

// 币方图标
import icon_eth2 from 'assets/images/icon_eth2.png';

// 导航栏
import icon_discord from 'assets/images/nav/icon-discord.png';
import icon_twitter from 'assets/images/nav/icon-twitter.png';
import icon_tokenomics from 'assets/images/nav/icon-tokenomics.png';
import icon_logo from 'assets/images/nav/icon-logo.png';
import icon_arrow from 'assets/images/nav/icon-arrow.png';


// 主页
import icon_home_logo from 'assets/images/home/icon-logo@2x.png';
import icon_logo_font from 'assets/images/home/icon-logo-font.png';
import img_home_bg from 'assets/images/home/img_home_bg.png';
import partner_yellow_logo from 'assets/images/home/icon-parnter-1.png';
import partner_ETH_logo from 'assets/images/home/icon-parnter-2.png';
import partner_logo_3 from 'assets/images/home/icon-parnter-3.png';

// 聊天页
import icon_chat_btn from 'assets/images/chat/icon-chat-btn.png';
import icon_coin from 'assets/images/chat/icon-coin.png';
import icon_chat_logo from 'assets/images/chat/icon-logo.png';
import icon_owner from 'assets/images/chat/icon-owner.png';

// 回复弹窗
import img_rewards_bg from 'assets/images/chat/img_rewards_bg.png';

// 信息展示
import img_img1 from 'assets/images/info/img_img1.png';
import img_img2 from 'assets/images/info/img_img2.png';
import img_img3 from 'assets/images/info/img_img3.png';
import img_img4 from 'assets/images/info/img_img4.png';

// 下载页
import img_nav_bg_1 from 'assets/images/img_nav_bg_1.png';
import img_nav_bg_2 from 'assets/images/img_nav_bg_2.png';img_download
import img_download from 'assets/images/roadmap/img_download.png';


const publicInfo = {
  // 动画基本间隔时长，单位：秒
  animation: 0.2,
}

export default {
  ...publicInfo,
  // 导航栏
  navPage: {
    logo: icon_logo,
    arrow: icon_arrow,
    navList: [
      { icon: icon_discord, name: 'DISCORD', url: 'https://discord.gg/yD447YwBve' },
      { icon: icon_twitter, name: 'TWITTER', url: 'https://twitter.com/chatdat3' },
      { icon: icon_tokenomics, name: 'TOKENOMICS', url: 'https://matchdao-web3.gitbook.io/dat3-lite-paper/' },
    ]
  },

  // 主页
  home: {
    icon_logo: icon_home_logo,
    icon_logo_font: icon_logo_font,
    bg: img_home_bg,
    partners: [
      { icon: partner_ETH_logo },
      { icon: partner_yellow_logo },
      { icon: partner_logo_3 },
    ],
    btnText: 'ENTER DAT3',
    description: 'Partner Organization',
  },

  // 聊天
  chat: {
    logo: { icon: icon_chat_logo, text: 'DAT3' },
    bg: img_home_bg,
    chat_btn: icon_chat_btn,
    inputText: 'What is your business model?',
    inputTip: 'SEND TO RECEIVE REWARDS',
    info: [
      {
        avatar: icon_chat_logo,
        role: 'other',
        text: 'Welcome! You can use DAT3 to provide paid consultation services to your potential clients. Advisory services can be in the legal, business, psychological, gaming or other fields.',
        extra: { icon: icon_coin, text: '+0.00006' },
      },
      {
        avatar: icon_owner,
        role: 'owner',
        text: 'What is your business model?',
        extra: { text: 'REWARDS CHECK' }
      },
      {
        avatar: icon_chat_logo,
        role: 'other',
        text: 'Service providers (SP) will receive 70% of the designated fees paid by service demanders (SD). The rest 30% will be charged by DAT3 to support service.         ',
      },
    ],
    btnText: 'OK，I want to learn more.',
  },
  
  // 回复弹窗
  replyWards: {
    head: { title: 'Reply rewards', mainTip: 'reply to get rewards within ', sideTip: '12hrs' },
    bg: img_rewards_bg,
    rewards: [
      { icon: icon_eth2, title: 'TALK TO EARN', text: '+0.00006', tip: null },
      { icon: icon_tokenomics, title: '$DAT3 DISTRIBUTE IN', text: '23:11:12 ', tip: null },
    ],
    // tips: { icon: icon_clock, text: '23:11:12 Auto-distribute DAT3' },
    btnText: 'GET IT',
  },

  // 搜索页面
  // search: {
  //   title: 'Did Search',
  //   searchText: 'DAT3',
  //   searchUsers: [
  //     { avatar: icon_search_user, name: 'DAT3', info: 'address：DAT3.eth' },
  //   ],
  //   coin: {
  //     icon: icon_tokenomics, text: '+DAT3',
  //   },
  //   btnText: 'View profile',
  // },

  // 用户展示页
  userInfo: {
    avatar: img_user_img,
    bg: { bgStart: '#FFFFFF', bgEnd: '#FFFFFF' },
    name: 'DAT3',
    status: 'online',
    scroll: [
      img_img1,
      img_img2,
      img_img3,
      img_img4
    ],
    scrollDelay: 5000,
    descriptions: [
      { title: 'ABOUT DAT3', content: 'DAT3 provides influencers or professionals with a tool to monetize their influence. This need has been long-standing but not well met. We hope to solve this problem by building the underlying blockchain communication protocol. DAT3 is our first attempt.' },
    ],
    btnText: 'TOKEN RELEASE CHART'
  },

  // 关注效果弹窗
  // watchEffect: {
  //   header: 'Social Protocol',
  //   image: gif_relationship,
  //   btnText: 'View DTA3 Reward'
  // },

  // Token释放页
  token: {
    chart: {
      // legend: ['Talk', 'Stake', 'Active', 'Team&Invester'],
      x: [2628000, 5256000, 7884000, 10512000, 13140000, 15768000, 18396000],
      xLimit: { min: 0, max: 20000000 },
      y: {
        talk: [35, 52.5, 61.25, 65.63, 67.81, 68.91, 69.45],
        team: [15, 22.5, 26.25, 28.13, 29.06, 29.53, 29.77],
        active: [10, 15, 17.5, 18.75, 19.38, 19.69, 19.84],
        stake: [5, 7.5, 8.75, 9.38, 9.69, 9.84, 9.92],
      },
      yLimit: { min: 0, max: 100 },
      color: {
        talk: '#18F2FE',
        active: '#A498EC',
        stake: '#F1747C',
        team: '#71F496',
      },
      // chartTitle: 'DAT3 Release Ratio & Block',
      chartHeight: 225
    },
    totals: [
      { name: 'Talk', color: '#18F2FE' },
      { name: 'Active', color: '#A498EC' },
      { name: 'Stake', color: '#F1747C' },
      { name: 'Team&Inverst', color: '#71F496' },
    ],
    title: 'Tokenomics',
    text: `The DAT3 token has an initial issue size of 0 and a total volume of less than 5,256,000.
    7,200 DAT3 will be released every 7,200 blocks.
    Relative liquidity is controlled through a "governance right = stake volume * time" scheme.
    Deflationary mechanism for tokens is guaranteed through a perpetual buyback of platform fee revenue and an NFT auction system.\n
    `,
    rewards: [
      { icon: icon_eth2, name: 'ETH Reward', content: '+0.002' },
      { icon: icon_tokenomics, name: 'DAT3 Reward', content: '+1000' },
    ],
    btnText: 'ROADMAP',
  },

  // 下载
  download: {
    header: 'RoadMap',
    roadMaps: [
      {
        name: '2023 Q1',
        bg: img_nav_bg_1,
        list: [
          {
            title: 'Products Upgrades:',
            list: [
              'DAT3 Andriod & Website v1.0 ',
              'Referral System',
              'Token Rewards & Stake',
            ],
          },
          {
            title: 'Community/Growth:',
            list: [
              'Internal Testing',
              'Vampire Attack',
            ],
          },
          {
            title: 'Other Build:',
            list: [
              'Fund Raising(Seed)',
              '$DAT3 - The governance token',
              'Contract Audit'
            ],
          },
        ],
      },
      {
        name: '2023 Q2',
        bg: img_nav_bg_2,
        list: [
          {
            title: 'Products Upgrades:',
            list: [
              'Proposals & Voting',
              'Analytic Dashboard',
              'Machine Learning Algorithms',
            ],
          },
          {
            title: 'Community/Growth:',
            list: [
              'Governance',
              'Auctions of DAT3 NFT',
            ],
          },
          {
            title: 'Other Build:',
            list: [
              'Multilingual',
              'Multichain',
            ],
          },
        ],
      },
    ],
    channels: {
      title: 'Download DApp to earn ETH & DAT3',
      logo: img_download,
      url: 'https://play.google.com/store/apps/details?id=com.dat3.social'
    },
  }
}