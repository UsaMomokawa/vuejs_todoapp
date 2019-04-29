var app = new Vue({
  el: '#app',
  data: {
    msg1: 'はじめてのVue.js',
    msg2: 'Vue.js'
  },
  methods: {
    enterShop: function(){
      this.msg1 = 'てやんでぃ',
      this.msg2 = '居酒屋'
    }
  }
});
