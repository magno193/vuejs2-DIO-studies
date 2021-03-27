<template>
  <div id="app">
    <Button/>
    <ButtonString />
    <ButtonXTemplate/>
    <ButtonInline inline-template>
      <button @click="handleClick">
        Click ButtonInline {{count}} times
      </button>
    </ButtonInline>
    <ButtonRender />
    <ButtonJSX />
  </div>
</template>

<script>
import Button from './Button.vue';
export default {
  name: 'App',
  components: { Button }
}
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