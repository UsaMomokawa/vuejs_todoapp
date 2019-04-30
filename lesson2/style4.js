var app = new Vue({
  el: '#app',
  data: {
    helloStyle: {
      color: 'blue',
      textAlign: 'center',
      fontSize: '3rem'
    },
    newStyle: {
      backgroundColor: 'yellow',
      fontSize: '5rem'
    }
  },
  methods: {
    setAlign: function(align) {
      this.helloStyle.textAlign = align;
    },
  }
})
