<template>
  <button @click="handleClick">
    Clicked Button {{ count }} times
  </button>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++;
    },
  },
}
</script>