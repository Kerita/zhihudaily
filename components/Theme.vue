<template>
  <div>
      <swiper height="200px" :show-dots="false">
        <swiper-item>
            <img  :src="index" height="100%" width="100%" >
            <div class="theme-text">
              <!-- 主题名称 -->
              <p>{{$route.params.name}}</p>
              <!-- 主题描述 -->
              <p class="theme-desc">{{$route.params.description}}</p>
            </div>
        </swiper-item>
      </swiper>
      <!-- 列表内容 -->
      <group>
        <cell v-for="story in stories" :title="story.title"  v-link="{ path : '/newsdetail/'+story.id+'/'+story.title}">
          <img :src="urls[getIndex(stories,story)]" width="100px" height="60px" style="padding-left:10px;padding-top:10px">
        </cell>
      </group>
  </div>
</template>

<script>
import SwiperItem from 'vux/dist/components/swiper-item'
import Swiper from 'vux/dist/components/swiper'
import Group from 'vux/dist/components/group'
import Cell from 'vux/dist/components/cell'

export default {
  components: {
    Swiper,
    SwiperItem,
    Group,
    Cell
  },
  data () {
    return {
      stories: [],
      index: '',
      url: 'getdata.php?method=getTheme&id=',
      urls: []
    }
  },
  methods: {
    // 获取元素位于在数组中索引
    getIndex (stories, story) {
      return Array.indexOf(stories, story)
    }
  },
  ready () {
    document.title = this.$route.params.name
    this.index = 'http://ob0818c80.bkt.clouddn.com/theme' + this.$route.params.index + '.jpg'
    for (var i = 0; i < 20; i++) {
      this.urls[i] = 'http://ob0818c80.bkt.clouddn.com/' + i + '.jpg'
    }
    this.$http.get(this.url + this.$route.params.id).then((response) => {
      let data = response.json()
      console.log(data)
      this.stories = data.stories
      this.stories.shift()
    }, (response) => {
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.theme-text{
  padding:0 15px;
  position: relative;
  top:-85px;
  font-size: 1.2em;
  color:white;
  font-weight: bold;
}
.theme-desc{
  font-size: 0.8em;
  color: #FAFAFA;
}
</style>
