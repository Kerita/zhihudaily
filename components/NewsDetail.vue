<template>
	<div>
		<iframe :src="url" width="100%" height="{{height}}"  frameborder="0"></iframe>
	</div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      url: '',
      height: ''
    }
  },
  ready () {
    this.id = this.$route.params.id
    document.title = this.$route.params.title
    this.url = 'http://daily.zhihu.com/story/' + this.id
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
