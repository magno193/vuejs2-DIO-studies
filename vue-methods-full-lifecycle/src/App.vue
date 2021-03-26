<template>
  <div id="app">
    <Title v-if="shouldAppear"/>
    <code>
      First, all the children components are mounted, like the example component <b>Title</b>.
      Then the <b>App</b> element is mounted.
    </code>
    <hr width="100%">
    <button @click="count++">Click</button>
    {{ count }}
    <code><b>beforeUpdate</b> and <b>update</b> watches the change of <b>elements</b> in the <b>DOM</b>.</code>
    <code>To monitor variables you should utilize <b>watch</b> or <b>computed</b></code>
    <hr width="100%">
    <button @click="shouldAppear = false">Destroy</button>
    <code>
      Activates <b>beforeUpdate</b> and <b>update</b> in <b>APP</b>
      and <b>beforeDestroy</b> and <b>destroyed</b> in <b>Title</b> once.
    </code>
    <code>The component Title is destroyed using the <b>v-if</b></code>
  </div>
</template>

<script>
import Title from './Title.vue';
export default {
  name: 'App',
  components: {
    Title,
  },
  data() {
    return {
      message: 'Hello Vue',
      count: 0,
      shouldAppear: true,
    }
  },
  beforeCreate(){
    console.log('beforeCreate App');
    console.log(this.message);
    // data() not created yet
  },
  created() {
    console.log('created App');
    console.log(this.message);
    // This is where you should call APIs
  },
  beforeMount() {
    console.log('beforeMount App')
    console.log(this.$el);
    // $el doesn't exist yet
  },
  mounted() {
    console.log('Mounted App')
    console.log(this.$el);
  },
  beforeUpdate() {
    console.log('Before update App');
    console.log(this.count);
  },
  updated() {
    console.log('Updated App');
    console.log(this.count);
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
