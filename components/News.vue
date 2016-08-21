<template>
<div>
<!-- 未完成部分 -->
<!--   <group>
    <cell title="下拉加载往期日报">
      <span>当前日期：{{date}}</span>
    </cell>
  </group> -->
      <!-- 图片轮播 -->
      <swiper height="250px" auto>
        <swiper-item v-for="story in top_stories">
        <!-- 出现404错误时，js加载备份图片 -->
            <img  :src="story.image" width="100%" height="78%" :link="story.id" onerror="javascript:this.src='http://ob0818c80.bkt.clouddn.com/'+Math.round(Math.random()*20+1)+'.jpg'" v-link="{path:'/newsdetail/'+story.id+'/'+story.title}">
            <!-- 图片标题 -->
            <p style="padding:0 15px;" v-link="{path: '/newsdetail/'+story.id+'/'+story.title}">{{story.title}}</p>
        </swiper-item>
      </swiper>

      <!-- 列表内容 -->
      <group>
        <cell v-for="story in stories" :title="story.title"  v-link="{ path : '/newsdetail/'+story.id+'/'+story.title}">
          <!-- 出现404错误时，js动态加载图片 -->
          <img :src="urls[getIndex(stories,story)]" width="100px" height="60px" style="padding-left:10px;padding-top:10px" onerror="javascript:this.src='http://ob0818c80.bkt.clouddn.com/'+Math.round(Math.random()*20+1)+'.jpg'">
        </cell>
      </group>

  <!-- 下拉刷新成功时的提示 -->
  <toast :show.sync="show" :time="3000">给个彩蛋，知乎找我，id—Kerita</toast>

</div>
</template>


<script>
import Swiper from 'vux/dist/components/swiper'
import SwiperItem from 'vux/dist/components/swiper-item'
import Cell from 'vux/dist/components/cell'
import Group from 'vux/dist/components/group'
import Scroller from 'vux/dist/components/scroller'
import Toast from 'vux/dist/components/toast'
import date from '../lib/date.js'
import cookie from '../lib/cookie.js'

export default{
  components: {
    Swiper,
    SwiperItem,
    Cell,
    Group,
    Scroller,
    Toast
  },
  data () {
    return {
      top_stories: [],
      stories: [],
      url: '',
      urls: [],
      date: '',
      show: false
    }
  },
  methods: {
    joinUrl () {
      if (this.top_stories[0].image) {
        for (let i = 0; i < this.top_stories.length; i++) {
          let url = this.top_stories[i].image
          url = url.substring(7).replace('/', '_')
          this.top_stories[i].image = 'http://zhihudaily.ahorn.me/static/img/croped/http-__' + url
        }
      }
    },
    getImageUrl () {
      let url = ''
      this.url = []
      for (let i = 0; i < this.stories.length; i++) {
        let id = this.stories[i].id
        this.$http.get('getdata.php?method=getImageUrl&id=' + id).then((response) => {
          let data = response.json()
          data = data['image']
          url = 'http://zhihudaily.ahorn.me/static/img/croped/http-__' + data.substring(7).replace('/', '_')
          this.urls.push(url)
        },
        (response) => {
          console.log('Request url error in News.vue')
        })
      }
    },
    getIndex (stories, story) {
      return Array.indexOf(stories, story)
    },
    load () {
      if (this.date === date.get()) {
        // this.url = 'index.php/index/getdata/getNewsList?type=latest'
        this.url = 'getdata.php?method=getNewsList&type=latest'
      } else {
        // this.url = 'index.php/index/getdata/getNewsList?type=before&date=' + this.date
        this.url = 'getdata.php?method=getNewsList&type=before&date=' + this.date
      }
      this.$http.get(this.url).then((response) => {
        let data = response.json()
        if (data.top_stories) {
          this.top_stories = data.top_stories
          this.joinUrl()
        } else {
          // 显示Toast
          this.show = true
        }
        this.stories = data.stories
        this.getImageUrl()
      },
      (response) => {
        console.log('Request story data error in News.vue!')
      })
    },
    getDate (oldDate) {
      let year = oldDate.getFullYear()
      let month = oldDate.getMonth() + 1
      let day = oldDate.getDate()

      if (month < 10) {
        month = '0' + month
      }

      if (day < 10) {
        day = '0' + day
      }

      this.date = year + month + day
    },
    getYesterday () {
      let date = this.date
      let year = date.substr(0, 4)
      let month = date.substr(4, 2)
      let day = date.substr(6, 2)

      let temp = (new Date()).setFullYear(+year, +month - 1, +day)
      let yesterday = new Date(temp - 24 * 3600 * 1000)
      this.getDate(yesterday)
    },
    loadYesterday (uuid) {
      console.log('出现bug，取消了下拉刷新功能')
      // this.getYesterday()
      setTimeout(() => {
        this.$broadcast('pulldown:reset', uuid)
        // window.location.href = '#!/news/' + this.date
      }, 2000)
    }
  },
  ready () {
    if (!cookie.get('toast')) {
      this.show = true
      cookie.set('toast', 'true', 'd10000')
    }
    document.title = '知乎日报'
    this.date = this.$route.params.date
    this.load()
  }
}
</script>
<style type="text/css">
@import '~vux/dist/vux.css'
</style>
