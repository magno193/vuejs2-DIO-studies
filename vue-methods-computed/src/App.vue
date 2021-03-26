<template>
  <div id="app">
    <span>{{ count }}</span>
    <button @click="increment(2, $event)">Click</button>
    <hr width="100%">
    <span><strong>Method: </strong>{{ fullName() }} {{ fullName() }}</span>
    <span><strong>Computed: </strong>{{ fullNameComputed }} {{ fullNameComputed }}</span>
    <code>Computed is reactive, but only renders again when the data inside changes, good for better performance</code>
    <hr width="100%">
    <span><strong>Computed GetSet: </strong>{{ nameGetSet }}</span>
    <button @click="nameGetSet = 'John Doe'">Change name</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0,
      firstName: 'Alex',
      lastName: 'Magno',
    }
  },
  computed: {
    fullNameComputed() {
      const random = Math.random().toFixed(2);
      return `${this.firstName} ${this.lastName}: ${random}`;
    },
    nameGetSet: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
        const [first, last] = value.split(' ')
        this.firstName = first;
        this.lastName = last;
      }
    }
  },
  methods: {
    increment(value){
      if (!value, event) {
        value = 1;
      }
      this.count += value;
    },
    fullName(){
      const random = Math.random().toFixed(2);
      return `${this.firstName} ${this.lastName}: ${random}`;
    },
  },
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
