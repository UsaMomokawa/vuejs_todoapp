var app = new Vue({
  el: '#app',
  data: {
    helloStyle: {
      color: 'blue',
      textAlign: 'center',
      fontSize: '3rem'
    }
  },
  methods: {
    setAlign: function(align) {
      this.helloStyle.textAlign = align;
    },
  }
})
