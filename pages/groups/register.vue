<template>
  <div class="section">
    <div class="columns">
      <div class="column is-6">
        <div class="container">
          <h1>Register new group</h1>

          <div class="field">
            <label for="group-name" class="label">Group name</label>
            <div class="control">
              <input
                id="group-name"
                v-model="groupName"
                class="input is-info"
                type="text"
                placeholder="Group name"
              />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-info" @click="registerGroup">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ROUTES from "~/routes/api";

export default {
  date() {
    return {
      groupName: ""
    };
  },
  methods: {
    registerGroup() {
      const payload = {
        uri: ROUTES.POST.REGISTER_NEW_GROUP,
        params: {
          group_name: this.groupName
        }
      };
      this.$store.dispatch("registerNewGroup", payload);
    }
  }
};
</script>

<style>
</style>