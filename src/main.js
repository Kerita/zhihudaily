import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import date from './lib/date.js'

Vue.use(VueResource)
Vue.http.options.emulateJSON = true
Vue.use(Router)

var router = new Router()

router.map({
  '/news/:date': {
    name: 'news',
    component: function (resolve) {
      require(['./components/News.vue'], resolve)
    }
  },
  '/themes': {
    name: 'themes',
    component: function (resolve) {
      require(['./components/Themes.vue'], resolve)
    }
  },
  '/kanzhihu/:date': {
    name: 'kanzhihu',
    component: function (resolve) {
      require(['./components/Kanzhihu.vue'], resolve)
    }
  },
  '/newsdetail/:id/:title': {
    name: 'newsdetail',
    component: function (resolve) {
      require(['./components/NewsDetail.vue'], resolve)
    }
  },
  '/theme/:id/:index/:name/:description': {
    name: 'theme',
    component: function (resolve) {
      require(['./components/Theme.vue'], resolve)
    }
  },
  '/answer/:questionid/:answerid/:title': {
    name: 'answer',
    component: function (resolve) {
      require(['./components/Answer.vue'], resolve)
    }
  }
})

var today = date.get()
router.redirect({
  '*': '/news/' + today
})
router.start(App, 'app')
