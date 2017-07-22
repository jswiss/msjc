<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss" scoped>
  /* Override Bulma theme defaults */
  $primary: #4c4c6e;
  

  $size-1: 3.5rem;

  @import "../node_modules/bulma/bulma.sass";

</style>
