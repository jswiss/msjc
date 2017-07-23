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

<style lang="sass">
  /* Override Bulma theme defaults */
  $primary: #4c4c6e
  

  $size-1: 10px

  @import "../node_modules/bulma/bulma.sass";

</style>
