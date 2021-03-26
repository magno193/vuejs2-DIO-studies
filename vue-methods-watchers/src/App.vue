<template>
  <div id="app">
    <input type="text" v-model="text">
    <span><strong>Text: </strong>{{ text }}</span>
    <hr width="100%">
    <span><strong>Api: </strong>{{ apiResponse }}</span>
    <code>With watch you can get the new and the old value and manipulate width multiple handlers</code>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      apiResponse: 'Start',
      text: ''
    }
  },
  methods: {
    simulateApi(response) {
      return new Promise(() => {
        setTimeout(() => {
          this.apiResponse = response;
        }, 1000);
      });
    },
    async fetchApi(value) {
      await this.simulateApi(value);
    },
  },
  watch: {
    text: {
      immediate: true,
      handler(val, old){
        console.log(val, old)
        if (val > 500) {
          this.fetchApi('> 500')
        } else {
          this.fetchApi('< 500')
        }
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
