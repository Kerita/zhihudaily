<template>
	<div>
		<iframe :src="url" width="100%" height="{{height}}"  frameborder="0"></iframe>
	</div>
</template>

<script>
export default {
  data () {
    return {
      questionid: '',
      answerid: '',
      url: '',
      height: ''
    }
  },
  ready () {
    this.questionid = this.$route.params.questionid
    this.answerid = this.$route.params.answerid
    document.title = this.$route.params.title
    this.url = 'https://www.zhihu.com/question/' + this.questionid + '/answer/' + this.answerid
    // 让iframe的高度比屏幕宽度多18px
    // 让iframe向上移动18px隐藏知乎日报app下载链接
    this.height = document.documentElement.clientHeight + 20
  }
}
</script>

<style scoped>
body{
  background: white;
}
iframe{
  position: relative;
  top: -40px;
}
</style>
