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
    <Title :title="'v-for'" :isSub="true" />
    <b><pre>Array iteration</pre></b>
    <ul>
      <li v-for="(item, index) in todos" :key="index" >
        <samp><em>[{{index}}] {{ item }}</em></samp>
      </li>
    </ul>
    <b><pre>Object iteration</pre></b>
    <ul>
      <li v-for="(value, key, index) in todosObj" :key="key" >
        <samp><em>[{{index}}] {{ key }}:{{ value }}</em></samp>
      </li>
    </ul>
    <b><pre>Number iteration</pre></b>
    <ul>
      <li v-for="(number, index) in 5" :key="number" >
        <samp><em>[{{index}}] {{number * 2}}</em></samp>
      </li>
    </ul>
    <b><pre>Object[] iteration</pre></b>
    <ul>
      <li v-for="(todo, index) in todoCompleted" :key="todo.id">
        <samp><em>[{{index}}] {{todo}}</em></samp>
      </li>
    </ul>
    <b><pre>Object[] iteration with filtered computed</pre></b>
    <ul>
      <li v-for="(todo, index) in filteredTodos" :key="todo.id">
        <samp><em>[{{index}}] {{todo}}</em></samp>
      </li>
    </ul>
    <b><pre>Component iteration (numbered props)</pre></b>
    <ul>
      <ListItem v-for="(number) in 3" :key="number" :number="number"/>
    </ul>
    <b><pre>Component iteration (v-bind)</pre></b>
    <ul>
      <ListItem v-for="(todo) in todoCompleted" :key="todo.id" v-bind="todo"/>
    </ul>
    <hr width="100%">
    <Title :title="'Props'" />
    <p>example syntax: <code>props: { title: { type: String, required: false, default: 'Default Title' }}</code></p>
  </div>
</template>

<script>
import Title from './components/Title.vue';
import ListItem from './components/ListItem.vue';
export default {
  name: 'App',
  data(){
    return{
      show: true,
      url: 'https://br.vuejs.org/',
      dynamicClass: 'red',
      red: 'red',
      blue: 'orange',
      todos: ['Item 1', 'Item 2', 'Item 3'],
      todosObj: {
        key1: 'Item 1',
        key2: 'Item 2',
        key3: 'Item 3',
      },
      todoCompleted: [
        {id: 1, label: 'Item 1', isCompleted: false},
        {id: 2, label: 'Item 2', isCompleted: true},
        {id: 3, label: 'Item 3', isCompleted: true},
        {id: 4, label: 'Item 4', isCompleted: false},
      ],
    }
  },
  computed: {
    filteredTodos() {
      return this.todoCompleted.filter(todo => todo.isCompleted)
    }
  },
  methods: {
    toggle(){
      this.show = !this.show;
    }
  },
  components:{Title, ListItem}
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
ul {
  list-style-type: none;
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
