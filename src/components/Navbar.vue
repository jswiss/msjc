<template lang="html">
  <nav class="nav has-shadow" >
    <div class="nav-left">
      <router-link class="nav-item" to="/">
        <img src="../assets/msjc-logo.png" alt="Mathare Social Justice Centre">
      </router-link>
      <router-link class="nav-item is-brand" to="/">
        Mathare Social Justice Centre
      </router-link>
      <router-link class="nav-item is-tab" to="/list">
        <i class="fa fa-user"></i>Incidents
      </router-link>
      <router-link class="nav-item is-tab" to="/about">
        <i class="fa fa-info-circle"></i>About
      </router-link>
    </div>
    <div class="nav-right">
      <router-link class="nav-item is-tab" to="/login">
        <i class="fa fa-sign-in"></i>Login
      </router-link>
      <router-link class="nav-item is-tab" to="/form">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </nav>
</template>
<script type="text/javascript">

export default {
  name: 'navbar',
};
</script>

<style scoped>
  .is-tab {
    text-indent: 10px;
  }

  .is-brand {
    font-weight: bold;
  }

.nav { 
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
  margin-bottom: 40px;
}

.report {
  font-weight: bold;
}
</style>
