<template>
  <div class="pad">
    <div class="incidents">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Date</th>
            <th>Cause of Death</th>
            <th>Description</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in incidents">
            <td>{{item.name}}</td>
            <td>{{item.age}}</td>
            <td>{{item.gender}}</td>
            <td>{{item.date}}</td>
            <td>{{item.cod}}</td>
            <td>{{item.description}}</td>
            <td>{{item.location}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'IncidentsList',
    computed: mapState([
      'incidents',
    ]),
  };
</script>

<style scoped>
  .pad {
    margin-top: 3%;
  }
</style>
