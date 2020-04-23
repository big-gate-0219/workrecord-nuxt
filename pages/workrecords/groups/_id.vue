<template>
  <div class="section">
    <div class="container">
      <div class="field is-size-3 has-text-centered">{{group.group_name}}</div>
      <div class="field is-size-4 has-text-right">{{currentDate}}</div>
    </div>

    <div class="table-container">
      <table class="table is-striped is-hoverable">
        <thead>
          <tr>
            <th>メンバー</th>
            <th>始業時間</th>
            <th>終業時間</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="userWorkrecord in groupUsersWorkrecords">
            <td>{{userWorkrecord.User.userName}}</td>
            <td>{{userWorkrecord.WorkRecord.start_of_work}}</td>
            <td>{{userWorkrecord.WorkRecord.end_of_work}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ROUTES from "~/routes/api";

export default {
  computed: {
    currentDate() {
      return this.$store.getters.getDate;
    },
    group() {
      return this.$store.getters.getGroup;
    },
    groupUsersWorkrecords() {
      return this.$store.getters.getGroupUsersWorkrecord;
    }
  },

  async fetch({ store, route }) {
    await store.dispatch("fetchGroupUsersWorkrecord", {
      uri: ROUTES.GET.GROUP_USERS_WORKRECORD.replace(
        ":group_id",
        route.params.id
      )
    });
  }
};
</script>
