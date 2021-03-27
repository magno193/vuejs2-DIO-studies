<template>
  <div>
    <span>Custom Input</span>
    <input type="text" @input="$emit('input', $event.target.value)" :value="value"/>
    <br>
    {{ value }}
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: String
  }
}
</script>