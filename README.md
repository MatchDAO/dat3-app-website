# DAT3官网

<!-- DIRSTRUCTURE_START_MARKER --> t1
<pre>
Dat3/
├─ README.md .......................................... 项目说明文件 
├─ favicon.ico ........................................ 项目浏览器标签图标 
├─ package-lock.json .................................. 项目依赖版本锁定文件
├─ package.json ....................................... 项目依赖版本管理文件 
├─ dist/ .............................................. 项目打包后的部署资源包 
│  ├─ README.md ....................................... 
│  ├─ favicon.ico ..................................... 
│  ├─ css/ ............................................ 样式文件
│  ├─ img/ ............................................ 图片资源
│  └─ js/ ............................................. 代码资源
├─ scripts/ ........................................... webpack构建脚本 
└─ src/ ............................................... 源码
   ├─ assets/ ......................................... 静态资源
   │  ├─ font/ ........................................ 字体
   │  ├─ images/ ...................................... 图片(根据页面划分)
   │  │  ├─ chat/ ..................................... 
   │  │  ├─ home/ ..................................... 
   │  │  ├─ info/ ..................................... 
   │  │  ├─ nav/ ...................................... 
   │  │  └─ roadmap/ ..................................
   │  ├─ text/ ........................................ 页面文本
   ├─ components/ ..................................... 公共组件
   ├─ lib/ ............................................ 依赖库
   ├─ pages/ .......................................... 页面
   │  ├─ Chat/ ........................................ 聊天页面
   │  │  └─ views/ .................................... 
   │  │     ├─ ChatInfo/ .............................. 
   │  │     └─ ReplyRewards/ .......................... 聊天页弹窗页
   │  ├─ Download/ .................................... 下载页
   │  ├─ Home/ ........................................ 主页
   │  ├─ NavPage/ ..................................... 导航页
   │  ├─ Search/ ...................................... 搜索页
   │  ├─ Token/ ....................................... Token页
   │  └─ UserInfo/ .................................... 用户信息页
   │     └─ views/ .................................... 用户关系弹窗页
   │        └─ Relationship/ .......................... 
   ├─ providers/ ...................................... 
   ├─ styles/ ......................................... 公共样式
   └─ utils/ .......................................... 工具方法
</pre>
<!-- DIRSTRUCTURE_END_MARKER -->


## 源码环境安装
```
1. 当前电脑安装node.js，版本建议14.15.0 <= version < 15
2. 安装后在项目根目录终端执行命令：npm install 后，等待依赖包安装完成(需要联网，建议淘宝源)
3. 安装完成后，项目本地启动命令：npm run dev (启动后终端会提示本地服务地址)。项目版本打包命令：npm run build:prod
4. 打包完成后，根目录下生成dist资源包，需要将dist目录下的所有字体文件移至dist/css/ 下，同时需要将根目录下favicon.ico
   文件移至dist/ 下。
```

## 文案调整简述
为了方便微调页面文案，本地开发环境下，修改文案在目录：src/assets/text.index.js文件中。
部署资源包请修改dist/js/text.bundle.js文件。大致分布如下：
```
navPage      导航栏部分
home         首页部分
chat         聊天页部分
replyWards   聊天页回复弹窗
userInfo     用户信息页
token        token释放页
download     下载页
```

## 版本更新文档

### 0.0.13 (2023-01-28)
```
需求变更整体页面调整: 
1. 弹窗按钮没有更换为新Ui的样式
2 profile（about dat3），tokenomics这2个页面的按钮没有悬浮
3. 从后面的页面返回，tokenomics和profile这2个页面的按钮加载不出来
4. 首页底部应该没有圆角
```

### 0.0.12 (2023-01-28)
```
需求变更整体页面调整: 
1. 整个顶部导航栏会跟随页面滑动
2. get rewards 弹窗按钮错误（没更换新的UI）
3. 图标页面横轴只有3个时间点（错误），正确应该是有7个(横坐标数据展示、字体调小)
4. 图表页下面整段文案的颜色不对，段落分行不对
5. 所有页面底部直接置底，不留空，页面底部跟随设计稿来
6. 图表页面的下方大标题错误，应该是tokenomics，现在还是 my reward
7. 移动端部分文字字体大小调整
```

### 0.0.11 (2023-01-25)
```
1. 需求变更整体页面调整: 1.设计验收问题调整 2.走马灯增加拖拽交互
```

### 0.0.10 (2023-01-25)
```
1. 需求变更整体页面调整: 1.字体调整 2.聊天页按钮位置调整
```
### 0.0.9 (2023-01-21)
```
1. 需求变更整体页面调整: UI整体按照设计稿75%调小
```

### 0.0.8 (2023-01-21)
```
1. 需求变更整体页面调整: UI调整、效果交互
```

### 0.0.7 (2023-01-21)
```
1. 需求变更整体页面调整(持续迭代中)
```

### 0.0.6 (2023-01-17)
```
1. 修复ios移动端按钮位置错误的问题
```

### 0.0.5 (2023-01-16)
```
1. 折线图及文案调整
```

### 0.0.4 (2023-01-16)
```
1. 文案调整
2. 添加关系图
```

### 0.0.3 (2023-01-14)
```
1. 添加弹窗背景锯齿效果
2. 修复按钮背景锯齿效果
3. 优化动效
```
