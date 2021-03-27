<template>
  <li @click="$emit('custom-event', 5)">Click me</li>
</template>

<script>
export default {
  name: 'ListItem',
}
</script>
<style scoped>
li{
  cursor: pointer;
  font-weight: bold;
  user-select: none;
  margin-top: 5px;
}
</style>