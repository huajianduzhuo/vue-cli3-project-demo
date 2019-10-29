// const path = require('path')
// const SkeletonPlugin = require('page-skeleton-webpack-plugin').SkeletonPlugin

module.exports = {
  /**
   * page-skeleton-webpack-plugin
   * 不好用，放弃
   */
  configureWebpack: {
    /* plugins: [
      new SkeletonPlugin({
        pathname: path.resolve(__dirname, `./shell`),
        staticDir: path.resolve(__dirname, './dist'),
        routes: ['/', '/inputtip', '/list'],
        loading: 'chiaroscuro',
        svg: {
          color: '#EFEFEF',
          shape: 'circle',
          shapeOpposite: ['.Rating-gray_1kpffd5_0 svg']
        },
        image: {
          shape: 'rect', // `rect` | `circle`
          color: '#EFEFEF',
          shapeOpposite: ['.mint-swipe-items-wrap img']
        },
        pseudo: {
          color: '#EFEFEF', // or transparent
          shape: 'circle', // circle | rect
          shapeOpposite: ['.delivery-icon-hollow_3q8_B5r_0', '.index-premium_39rl0v9']
        },
        button: {
          color: '#EFEFEF',
          excludes: ['.mint-swipe-items-wrap a']
        },
        defer: 5000,
        excludes: [],
        remove: [],
        hide: ['.index-dashedline_7B79b3W', '.Rating-actived_GBtiHkB_0'],
        grayBlock: ['#header'],
        cssUnit: 'rem',
        headless: true,
        // minify: false,
        noInfo: false
      })
    ] */
  }
}
