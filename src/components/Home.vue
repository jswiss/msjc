<template>
  <div>
    <div class="pad"></div>
    <map-content></map-content>
  </div>
</template>

<script>
  import MapContent from './MapContent';

  export default {
    name: 'Home',
    components: {
      MapContent,
    },
  };
</script>

<style scoped>
  .pad {
    margin-top: 3%;
  }
</style>
