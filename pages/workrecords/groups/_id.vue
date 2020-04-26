<template>
  <div class="section">
    <div class="container">
      <div class="field">
        <button class="button is-info" @click="openAddMemberWindow">Add Member</button>
      </div>
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

    <div class="modal" v-bind:class="{'is-active': isUserAddedModalActive}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            メンバー登録
            <button
              class="delete"
              aria-label="close"
              id="close"
              @click="closeAddMemberWindow"
            ></button>
          </p>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label for="userId" class="label">User ID</label>
            <div class="control">
              <input
                type="text"
                class="input is-info"
                placeholder="User ID"
                id="userId"
                v-model="query_use_id"
                v-on:keyup="changeQueryUserID"
              />
            </div>
          </div>

          <div class="table-container">
            <table class="table is striped is-hoverable">
              <thead>
                <tr>
                  <th></th>
                  <th>User ID</th>
                  <th>User name</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in accounts">
                  <th>
                    <input type="radio" v-model="selected_user_id" :value="user.ID" />
                  </th>
                  <th>{{user.userId}}</th>
                  <th>{{user.userName}}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="addGroupMember">追加</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import ROUTES from "~/routes/api";

export default {
  data() {
    return {
      isUserAddedModalActive: false,
      query_use_id: "",
      selected_user_id: ""
    };
  },
  computed: {
    currentDate() {
      return this.$store.getters.getDate;
    },
    group() {
      return this.$store.getters.getGroup;
    },
    groupUsersWorkrecords() {
      return this.$store.getters.getGroupUsersWorkrecord;
    },
    accounts() {
      return this.$store.getters.getAccounts;
    }
  },

  async fetch({ store, route }) {
    await store.dispatch("fetchGroupUsersWorkrecord", {
      uri: ROUTES.GET.GROUP_USERS_WORKRECORD.replace(
        ":group_id",
        route.params.id
      )
    });
  },

  methods: {
    openAddMemberWindow() {
      this.isUserAddedModalActive = true;
    },
    closeAddMemberWindow() {
      this.isUserAddedModalActive = false;
    },
    changeQueryUserID(event) {
      const payload = {
        uri: ROUTES.GET.ACCOUNTS,
        params: {
          q: event.target.value
        }
      };
      this.$store.dispatch("fetchAccounts", payload);
    },
    addGroupMember() {
      console.log(this.selected_user_id)
    }
  }
};
</script>
