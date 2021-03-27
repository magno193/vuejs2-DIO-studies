<template>
  <li>Listed: {{number}} {{label}} {{isCompleted}}</li>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['number', 'label', 'isCompleted']
}
</script>