var app = new Vue({
  el: '#app',
  data: {
    color: 'blue',
    align: 'center',
    size: '3rem'
  },
  methods: {
    setAlign: function(align) {
      this.align = align;
    },
    setColor: function(color) {
      this.color = color;
    }
  }
})
