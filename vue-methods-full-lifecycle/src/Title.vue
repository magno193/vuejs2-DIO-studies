<template>
  <h1>Title</h1>
</template>

<script>
export default {
  name:"Title",
  data() {
    return{}
  },
  beforeCreate(){
    console.log('beforeCreate Title');
    console.log(this.message);
    // data() not created yet
  },
  created() {
    console.log('created Title');
    console.log(this.message);
    // This is where you should call APIs
  },
  beforeMount() {
    console.log('beforeMount Title')
    console.log(this.$el);
    // $el doesn't exist yet
  },
  mounted() {
    console.log('Mounted Title')
    console.log(this.$el);
  },
  beforeDestroy(){
    console.log('beforeDestroy Title')
  },
  destroyed(){
    console.log('destroyed Title')
  }
}
</script>
