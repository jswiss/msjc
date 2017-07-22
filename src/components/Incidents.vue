<template lang="html">
  <div id="incidents">
    <div class="columns">
      <div class="column is-half">
        <div class="notification">
          Incident List
        </div>
        <incidents-list />
      </div>
    </div>
  </div>
</template>

<script>
import IncidentsList from '../components/IncidentsList';

export default {
  name: 'Incidents',
  components: {
    IncidentsList,
  },
  // eslint-disable-next-line
  mounted: function () {
    this.$store.dispatch('LOAD_INCIDENT_LIST');
  },
};
</script>

<style scoped>

</style>
