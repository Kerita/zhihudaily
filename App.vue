<template>
<div>

      <tab :line-width=2 active-color='#008bed'>

          <tab-item :selected="tab_title_1 === tab_title" @click="tab_title=tab_title_1" v-link="{path : '/news/'+date}">
             {{tab_title_1}}
          </tab-item>

          <tab-item :selected="tab_title_2 === tab_title" @click="tab_title=tab_title_2" v-link="{ name: 'themes'}">
              {{tab_title_2}}
          </tab-item>

          <tab-item :selected="tab_title_3 === tab_title" @click="tab_title=tab_title_3" v-link="{ path: '/kanzhihu/'+date}">
              {{tab_title_3}}
          </tab-item>
      </tab>

      <!-- 如果这句的话就没办法把内容显示出来，它的作用是什么呢 -->
      <router-view
          transition="fade"
          transition-mode="out-in"
          keep-alive></router-view>

</div>
</template>

<script>
import Tab from 'vux/dist/components/tab'
import TabItem from 'vux/dist/components/tab-item'
import date from './lib/date.js'
export default {
  components: {
    Tab,
    TabItem
  },
  data () {
    return {
      tab_title: '今日新闻',
      tab_title_1: '知乎日报',
      tab_title_2: '主题日报',
      tab_title_3: '知乎精选',
      date: date.get()
    }
  },
  ready () {
  }
}
</script>

<style>
@import '~vux/dist/vux.css'
</style>
<style type="text/css">
html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

body {
    line-height: 1.6;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}

* {
    margin: 0;
    padding: 0;
}

a img {
    border: 0;
}

a {
    text-decoration: none;
}
</style>

