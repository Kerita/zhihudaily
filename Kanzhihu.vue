<template>
  <div>

      <group>
        <cell v-for="answer in answers" :title="answer.authorname"  :link="answer.url" :inline-desc="answer.title">
          <img :src="answer.avatar" width="100px" height="80px" onerror="javascript:this.src='http://ob0818c80.bkt.clouddn.com/'+Math.round(Math.random()*26+1)+'.jpg'">
        </cell>
      </group>
  </div>
</template>

<script>
import Group from 'vux/dist/components/group'
import Cell from 'vux/dist/components/cell'
import Scroller from 'vux/dist/components/scroller'
export default {
  components: {
    Group,
    Cell,
    Scroller
  },
  data () {
    return {
      answers: [],
      date: '',
      type: ['yesterday', 'recent', 'archive'],
      url: 'getdata.php?method=getpostanswers&date='
    }
  },
  ready () {
    document.title = '知乎精选'
    this.date = this.$route.params.date
    this.$http.get(this.url + this.date + '&type=' + this.type[0]).then((response) => {
      let data = response.json()
      this.answers = data.answers
      var avatar = ''
      for (var i = 0; i < this.answers.length; i++) {
        avatar = this.answers[i].avatar
        this.answers[i].avatar = 'http://zhihudata.kanzhihu.com/avatar' + avatar.substring(7)
        this.answers[i].url = 'https://www.zhihu.com/question/' + this.answers[i].questionid + '/answer/' + this.answers[i].answerid
      }
    }, (response) => {
    })
  },
  methods: {
    load () {
      console.log('test')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
