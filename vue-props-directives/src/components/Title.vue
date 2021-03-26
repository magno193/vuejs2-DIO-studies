<template>
  <h2 v-bind="$attrs" v-if="isSub === false">{{ title }}</h2>
  <h4 v-else>{{ title }}</h4>
</template>
<script>
export default {
  name: 'Title',
  inheritAttrs: false,
  props: {
    title: String,
    isSub: {
      type: Boolean,
      default: false
    },
    type: {
      type: Number,
      validator(value = 1 | 2 | 3 | 4) {
        return [1, 2, 3, 4].includes(value);
      }
    }
  }
}
</script>