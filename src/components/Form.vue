<template>
  <div id="form">
    <div class="field">
      <label for="name" class="label">Name</label>
      <div class="control">
        <input name="name" class="input" type="text" placeholder="enter a name">
      </div>
    </div>
    <div class="field">
      <label for="age" class="label">Age</label>
      <div class="control">
        <input name="age" type="text" value="" placeholder="e.g. 23...">
      </div>
    </div>
    <div class="field">
      <label for="cod" class="label">Gender</label>
      <div class="control">
        <label class="radio">
          <input type="radio" name="gender">
          Male
        </label>
        <label class="radio">
          <input type="radio" name="gender">
          Female
        </label>
        <label class="radio">
          <input type="radio" name="gender">
          Other
        </label>
        <label class="radio">
          <input type="radio" name="gender">
          N/A
        </label>
      </div>
    </div>
    <div class="field">
      <label for="cod" class="label">Cause of Death</label>
      <div class="control">
        <label class="radio">
          <input type="radio" name="cod">
          Shooting
        </label>
        <label class="radio">
          <input type="radio" name="cod">
          Beating
        </label>
        <label class="radio">
          <input type="radio" name="cod">
          Unwarranted Detention
        </label>
        <label class="radio">
          <input type="radio" name="cod">
          Unknown
        </label>
      </div>
    </div>
    <!--TODO: date here  -->
    <div class="field">
      <label for="date" class="label">Date</label>
      <div class="control">
        <vue-flatpickr :options="fpOptions" />
      </div>
    </div>
    <!--TODO: location here  -->
    <!--TODO: reformat this section  -->
    <div class="field">
      <label for="address" class="label">Address</label>
      <div class="control">
        <label for="address.street">Street</label>
        <input name="address.street" type="text" value="" placeholder="">
      </div>
      <div class="control">
        <label for="address.street">City</label>
        <input name="address.city" type="text" value="" placeholder="">
      </div>
      <div class="control">
        <label for="address.street">County</label>
        <input name="address.county" type="text" value="" placeholder="">
      </div>
    </div>
    <div class="field">
      <label for="description" class="label">Description</label>
      <div class="control">
        <textarea name="description" class="textarea" placeholder="Describe the incident"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
  import VueFlatpickr from 'vue-flatpickr';

  export default {
    name: 'Form',
    components: {
      VueFlatpickr,
    },
    data() {
      return {
        fpOptions: {
          utc: true,
          maxDate: Date.now(),
        },
      };
    },
  };
</script>

<style scoped>

</style>
