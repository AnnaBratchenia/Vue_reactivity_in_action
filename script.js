const app = Vue.createApp({
  data() {
    return {
      result: 0,
      message: "",
    };
  },

  computed: {
    fullMessage() {
      if (this.result === 0) {
        return (this.message = " ");
      }
      if (this.result === 37) {
        return (this.message = this.result);
      }
      if (this.result < 37) {
        return (this.message = "Not there yet");
      }
      if (this.result > 37) {
        return (this.message = "Too much");
      }
    },
  },
  watch: {
    fullMessage(value) {
      const that = this;
      setTimeout(function () {
        that.result = 0;
        console.log(that.result);
      }, 5000);
    },
  },

  methods: {
    addFive() {
      this.result = this.result + 5;
      console.log(this.result);
    },
    addOne() {
      this.result = this.result + 1;
      console.log(this.result);
    },
  },
});
app.mount(".container");
