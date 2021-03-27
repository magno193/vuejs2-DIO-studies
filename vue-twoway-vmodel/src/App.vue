<template>
  <div id="app">
    <div class="f-column w-300">
      <pre>With event</pre>
      <input type="text" @input="text=$event.target.value" :value="text"/>
      {{ text }}
    </div>
    <div class="f-column w-300">
      <pre>With v-model</pre>
      <input type="text" v-model="text2"/>
      {{ text2 }}
    </div>
    <div class="f-column w-300">
      <pre>With v-model.number</pre>
      <input type="text" v-model.number="text3"/>
      {{ text3 }}
    </div>
    <div class="f-column w-300">
      <pre>With custom input</pre>
      <Input v-model="text4"/>
    </div>
  </div>
</template>

<script>
import Input from './components/Input.vue';
export default {
  name: 'App',
  data() {
    return {
      text: '',
      text2: '',
      text3: '',
      text4: ''
    };
  },
  components: { Input }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
pre{
  font-size: 1rem;
  font-weight: bold;
  margin: 5px 0;
}
.w-300{
  max-width: 300px;
  margin: 0 auto;
}
.f-column{
  display: flex;
  flex-direction: column;
}
</style>
