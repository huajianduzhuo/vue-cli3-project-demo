const path = require('path')
const SkeletonPlugin = require('page-skeleton-webpack-plugin').SkeletonPlugin

module.exports = {
  configureWebpack: {
    plugins: [
      new SkeletonPlugin({
        pathname: path.resolve(__dirname, `./shell`),
        staticDir: path.resolve(__dirname, './dist'),
        routes: ['/', '/inputtip', 'list'],
        port: '7890',
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
        cookies: [{
          name: 'SID',
          value: 'a495vvmEPEE4DZi083dr8yR3EAPYqW40HaWA',
          url: 'https://h5.ele.me'
        }, {
          name: 'USERID',
          value: '273745271',
          url: 'https://h5.ele.me'
        }],
        noInfo: false
      })
    ]
  }
}
