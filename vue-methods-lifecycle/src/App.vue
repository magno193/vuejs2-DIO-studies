<template>
  <div id="app">
    <button @click="objectCount.x++">Click</button>
    <br>
    <span>{{count}} {{objectCount}}</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0,
      objectCount:{
        x: 0
      }
    }
  },
  methods: {
    handleClick() {
      this.count++;
      this.objectCount.x++
    }
  },
  mounted(){
    this.$set(this.objectCount, 'y', 1);
    this.objectCount.z = 3;
    this.objectCount = {...this.objectCount, ...{a: 4, b: 5}}
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
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
