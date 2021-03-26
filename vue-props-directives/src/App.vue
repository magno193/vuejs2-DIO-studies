<template>
  <div id="app">
    <Title :title="'Directives'" :type="4" attrib="passed"/>
    <Title :title="'v-show and v-if'" :isSub="true" attrib="not passed"/>
    <button @click="toggle">Toggle</button>
    <span v-show="show"><samp>v-show</samp> directive</span>
    <span v-if="show"><samp>v-if</samp> directive</span>
    <p v-else><samp>v-if</samp> destroys the element, <samp>v-show</samp> hides the element</p>
    <hr width="100%">
    <Title :title="'v-bind'" :isSub="true" />
    <p><samp>v-bind:</samp> or <samp>:</samp></p>
    <a v-bind:href="url" target="_blank">URL</a>
    <span :class="dynamicClass">with dynamic class</span>
    <span :class="{
      orange: show,
      blue: !show
    }">with dynamic class and conditional</span>
    <hr width="100%">
    <Title :title="'Props'" />
    <p>example syntax: <code>props: { title: { type: String, required: false, default: 'Default Title' }}</code></p>
  </div>
</template>

<script>
import Title from './components/Title.vue';
export default {
  name: 'App',
  data(){
    return{
      show: true,
      url: 'https://www.google.com',
      dynamicClass: 'red',
      red: 'red',
      blue: 'orange'
    }
  },
  methods: {
    toggle(){
      this.show = !this.show;
    }
  },
  components:{Title}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
hr {
  margin: 5px 0;
}
.red,.blue,.orange {
  font-size: 0.85rem;
}
.red {
  color: #ff000080;
}
.blue {
  color: #0000ff80;
}
.orange {
  color:#ff7d0080;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
