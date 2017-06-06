# zhihudaily

> 一个简单粗糙的知乎日报。当初学Vue练手用的，代码粗糙，而且也没有更新到Vue2.x版本，不建议clone去学习，可以去vue-awesome项目找其他实例。

>基于Vue.js+Vux，写的时间是去年（2016年）7月末八月初，Vue.js还是Vue还是1.x，Vux还是0.x。时过境迁，他们都已经到2.x了。

>今天（2017年6月6日）把东西从github重新下载下来，发现当初依赖的安装不太正确，有些依赖当时采用全局安装，导致不知道当初的依赖版本，开始跑的时候要一张出现错误。

>折腾一下之后，把所有依赖搞定，现在重新上传。唯一遗憾是跨域请求知乎日报数据需要在php服务器上跑getData.php这个文件。手动没有php环境，记得应该是构建之后（npm run build），把getDate.php放进dist文件夹，然后一起丢到php服务器，有空弄一下。


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
