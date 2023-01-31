import React, { Component } from 'react';
import utils from 'utils';
import './Carousel.less';

/*
 * 轮播组件
 * @prototype slideImgs 轮播图的数组
 * @prototype isSpots 是否显示指示点
 */
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    const isMobile = utils.isMobile();
    // 初始化轮播节点(第一个节点为最后一张图，最后节点为第一张图，共imgs.length+2个节点)
    const w = isMobile ? (
      document.body.clientWidth || document.documentElement.clientWidth
    ) : (
      document.querySelector(props.parentNodeName)?.clientWidth || props.screenWidth
    );
    const { isSpots, slideImgs } = props;
    this.imgs = [];
    this.timerInfo = {
      func: '', // 定时器标示
      delay: props.delay || 5000, // 定时时长
      slideItemWidth: w, // 方向
      pos: 1, // 起始位置
      spotPos: 0, //
      isSpots: false, // 是否显示点
      initTouchPos: {
        x: 0,
      },
      transformDistance: 0,
      minMove: 50, // 拖拽生效距离
      isCarousel: true, // 是否滚动
    };
    // 是否显示spots
    this.timerInfo.isSpots = isSpots !== undefined ? !!isSpots : false;
    this.timerInfo.isCarousel = slideImgs && slideImgs.length > 1;
    // 处理轮播图
    const len = slideImgs.length;
    this.imgs = slideImgs;
    this.items = this.imgs.map((ele, index) => {
      const k = index + 1;
      return <li key={k}><img src={ele} alt="slide-img" /></li>;
    });
    this.items.unshift(<li key={0}><img src={this.imgs[this.imgs.length - 1]} alt="slide-img" /></li>);
    this.items.push(<li key={len + 1}><img src={this.imgs[0]} alt="slide-img" /></li>);
    this.state = {
      translate: {
        transform: `translate3d(${-w}px, 0px, 0px)`,
        transitionDuration: '300ms',
      },
      spotPos: 0,
    };

    this.evnets = {
      start: isMobile ? 'touchstart' : 'mousedown',
      move: isMobile ? 'touchmove' : 'mousemove',
      end: isMobile ? 'touchend' : 'mouseup',
    };
    this.isMobile = isMobile;

    this.timerOperate = this.timerOperate.bind(this);
    this.bindTouchStart = this.bindTouchStart.bind(this);
    this.bindTouchMove = this.bindTouchMove.bind(this);
    this.bindTouchEnd = this.bindTouchEnd.bind(this);
    this.resetSpotPos = this.resetSpotPos.bind(this);
  }
  componentDidMount() {
    this.slider = document.querySelector('#slideItems');
    if (this.timerInfo.isCarousel) {
      // 轮播数组
      this.timerInfo.func = setTimeout(this.timerOperate, this.timerInfo.delay);
      // 轮播图拖动的侦听
      this.slider.addEventListener(this.evnets.start, this.bindTouchStart);
    }
  }
  componentWillUnmount() {
    if (this.timerInfo.isCarousel) {
      this.timerInfo.func && window.clearTimeout(this.timerInfo.func);
      // 轮播图拖动的侦听
      this.slider.removeEventListener(this.evnets.start, this.bindTouchStart);
      this.slider.removeEventListener(this.evnets.move, this.bindTouchMove);
    }
  }

  timerOperate() {
    const {
      timerInfo, slider, items, timerOperate,
    } = this;
    const newPos = ++timerInfo.pos;
    const newLeft = -newPos * timerInfo.slideItemWidth;

    slider.style.transitionDuration = '300ms';
    slider.style.transform = `translate3d(${newLeft}px,0,0)`;
    this.resetSpotPos();

    if (timerInfo.pos === items.length - 1) {
      setTimeout(() => {
        timerInfo.pos = 1;

        slider.style.transitionDuration = '0ms';
        slider.style.transform = `translate3d(${-timerInfo.slideItemWidth}px, 0, 0)`;
      }, 300);
    }

    timerInfo.func = setTimeout(timerOperate, timerInfo.delay);
  }
  resetSpotPos() {
    const pos = this.timerInfo.pos;
    if (pos === 0) {
      this.timerInfo.spotPos = this.imgs.length - 1;
    } else if (pos === this.items.length - 1) {
      this.timerInfo.spotPos = 0;
    } else {
      this.timerInfo.spotPos = pos - 1;
    }
    this.setState({ spotPos: this.timerInfo.spotPos });
  }
  bindTouchStart(evt) {
    clearTimeout(this.timerInfo.func);
    this.timerInfo.initTouchPos = {
      x: this.isMobile ? evt.touches[0].pageX : evt.pageX,
    };
    this.slider.style.transitionDuration = '0ms';
    this.slider.addEventListener(this.evnets.move, this.bindTouchMove);
    this.slider.addEventListener(this.evnets.end, this.bindTouchEnd);
  }
  bindTouchMove(evt) {
    evt.preventDefault();
    const newX = this.isMobile ? evt.touches[0].pageX : evt.pageX;
    const dis = this.timerInfo.initTouchPos.x - newX;
    const newTransformX = -this.timerInfo.pos * this.timerInfo.slideItemWidth - dis;
    this.timerInfo.transformDistance = dis;
    this.slider.style.transform = `translate3d(${newTransformX}px,0,0)`;
  }
  bindTouchEnd() {
    // 拖动距离小，则还原位置
    const dis = this.timerInfo.transformDistance;

    if (Math.abs(dis) > this.timerInfo.minMove) {
      dis > 0 ? this.timerInfo.pos++ : this.timerInfo.pos--;
    }
    this.slider.style.transitionDuration = '100ms';
    this.slider.style.transform = `translate3d(${-this.timerInfo.slideItemWidth * this.timerInfo.pos}px,0,0)`;
    this.resetSpotPos();

    setTimeout(() => {
      this.timerInfo.initTouchPos = { x: 0, y: 0 };
      this.timerInfo.transformDistance = 0;

      // 初始位置和末尾位置时，在动画完成后要切换到最后或开头
      if (this.timerInfo.pos === 0) {
        this.timerInfo.pos = this.items.length - 2;
      } else if (this.timerInfo.pos === this.items.length - 1) {
        this.timerInfo.pos = 1;
      }

      this.slider.style.transitionDuration = '0ms';
      this.slider.style.transform = `translate3d(${-this.timerInfo.slideItemWidth * this.timerInfo.pos}px,0,0)`;
      this.timerInfo.func = setTimeout(this.timerOperate, this.timerInfo.delay);
    }, 200);

    this.slider.removeEventListener(this.evnets.move, this.bindTouchMove);
    this.slider.removeEventListener(this.evnets.end, this.bindTouchEnd);
  }

  render() {
    const { spotPos, translate } = this.state;
    return (
      <div className="wrap-carousel">
        <ol
          // ref={s => this.slider = s}
          id="slideItems"
          className="wrap-slide-items"
          style={translate}
        >
          {this.items}
        </ol>
        {
          this.timerInfo.isSpots ? (
            <ol className="wrap-slide-pots">
              {
                this.imgs.map((ele, index) => <li key={index} className={spotPos === index ? 'active' : ''} data-pot={index} />)
              }
            </ol>
          ) : ''
        }
      </div>
    );
  }
}
