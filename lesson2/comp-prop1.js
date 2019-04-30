var app = new Vue({
  el: '#app',
  data: {
    hankei: 3
  },
  computed: {
    menseki: function() {
      return (Math.PI * this.hankei * this.hankei).toFixed(1);
    }
  }
})
