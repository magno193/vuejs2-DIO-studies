<template>
  <section id="app">
    <h3>Example one <samp>@click</samp></h3>
    <article class="flex-row">
      <button @click="count++">count++</button>
      <span>{{ count }}</span>
    </article>
    <article class="flex-row">
      <button @click="increment">increment</button>
      <span>{{ count2 }}</span>
    </article>
    <article class="flex-row">
      <button @click="incrementArgs(2)">incrementArgs(2)</button>
      <span>{{ count3 }}</span>
    </article>
    <hr width="80%">

    <h3>Example two <samp>"$event"</samp></h3>
    <article class="flex-column">
      <samp><b>@input</b></samp>
      <input type="text" @input="text = $event.target.value">
      <span>{{ text }}</span>
    </article>
    <article class="flex-column">
      <samp><b>@change</b></samp>
      <input type="text" @change="text2 = $event.target.value">
      <span>{{ text2 }}</span>
    </article>
    <article class="flex-column">
      <samp><b>@keyup</b></samp>
      <input type="text" @keyup="text3 = $event.target.value">
      <span>{{ text3 }}</span>
    </article>
    <hr width="80%">

    <h3>Example three <samp>modifiers</samp></h3>
    <article class="flex-column">
      <samp><b>@keyup.enter + increment method</b></samp>
      <input type="text" @keyup.enter="enterIncrement">
      <span>{{ count4 }}</span>
    </article>
    <article class="flex-row">
      <samp><b>@click.ctrl + increment method</b></samp>
      <button @click.ctrl="enterIncrement">Hold Ctrl</button>
      <span>{{ count4 }}</span>
    </article>
    <hr width="80%">

    <h3>Example four <samp>custom events + $emit</samp></h3>
    <samp><b>@custom-event + increment method + component $emit</b></samp>
    <div class="flex-row">
      <ListItem @custom-event="emitIncrement" />
      <span>{{count5}}</span>
    </div>
    <samp><b>@custom-event with payload</b></samp>
    <div class="flex-row">
      <ListItem @custom-event="emitIncrementPayload"/>
      <span>{{count5}}</span>
    </div>
  </section>
</template>

<script>
import ListItem from './components/ListItem.vue';
export default {
  name: 'App',
  data() {
    return {
      count: 0,
      count2: 0,
      count3: 0,
      count4: 0,
      count5: 0,
      text: 'text wil change on input',
      text2: 'text wil change on tab/enter',
      text3: 'text wil change on keyup',
    }
  },
  methods: {
    increment() {
      this.count2++;
    },
    incrementArgs(quantity) {
      this.count3 += quantity;
    },
    enterIncrement() {
      this.count4++;
    },
    emitIncrement(){
      this.count5++;
    },
    emitIncrementPayload(value){
      !value ? this.count5++ : this.count5 += value;
    },
  },
  components:{ ListItem }
};
</script>

<style>
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
.flex-row, .flex-column {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  border-bottom: #2c3e50 solid 2px;
  margin-bottom: 5px;
  padding-bottom: 5px;
}
.flex-column {
  flex-direction: column;
}
</style>
