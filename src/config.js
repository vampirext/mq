export default {

  // 正常模式的tab title配置
  tabTitles: [
    {
      title: '日记',
      icon: '../configs/tooth1.png',
      activeIcon: '../configs/tooth2.png'
    },
    {
      title: '预约',
      icon: '../configs/appointment1.png',
      activeIcon: '../configs/appointment2.png'
    },
    {
      title: '案例',
      icon: '../configs/case1.png',
      activeIcon: '../configs/case2.png',
      //badge: 5
    },
    {
      title: '我的',
      icon: '../configs/me1.png',
      activeIcon: '../configs/me2.png',
      //dot: true
    }
  ],
  tabStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#3D3D3D',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    iconWidth: 70,
    iconHeight: 70,
    width: 160,
    height: 120,
    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10
  },

  // 使用 iconFont 模式的tab title配置
  tabIconFontTitles: [
    {
      title: '日记',
      codePoint: '\ue667'
    },
    {
      title: '预约',
      codePoint: '\ue6e1'
    },
    {
      title: '案例',
      codePoint: '\ue6e0',
      //badge: 5
    },
    {
      title: '我的',
      codePoint: '\ue6e2',
      //dot: true
    }
  ],
  tabIconFontStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#3D3D3D',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    width: 160,
    height: 120,
    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10,
    iconFontSize: 50,
    iconFontMarginBottom: 8,
    iconFontColor: '#333333',
    activeIconFontColor: 'blue',
    //iconFontUrl: '//at.alicdn.com/t/font_668071_lxmigpq0965el8fr.ttf'
    /**
     * 1.Android或者iOS 访问本地图片或者字体,在weex中统一以' local://'为前缀
     * 2.'/'在android下如果加载的是字体对应的就是assets目录,若果加载的图片就从
     *    drawable 目录, 所以iconfont.ttf放置在src/assets目录下的话,字体的url
     *    加载方式应该为('local:///iconfont.ttf')
     */
    iconFontUrl: 'local:///navigation.ttf'
  }
}