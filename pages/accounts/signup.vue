<template>
  <div class="section">
    <div class="columns">
      <div class="column is-6">
        <div class="container">
          <h1>Sign up</h1>

          <div class="field">
            <label for="user-id" class="label">User ID</label>
            <div class="control">
              <input
                id="user-id"
                v-model="userId"
                class="input is-info"
                type="text"
                placeholder="User ID"
              />
            </div>
          </div>

          <div class="field">
            <label for="user-name" class="label">User Name</label>
            <div class="control">
              <input
                id="user-name"
                v-model="userName"
                class="input is-info"
                type="text"
                placeholder="User name"
              />
            </div>
          </div>

          <div class="field">
            <label for="email" class="label">Email</label>
            <div class="control">
              <input
                id="email"
                v-model="email"
                class="input is-info"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>

          <div class="field">
            <label for="password" class="label">Password</label>
            <div class="control">
              <input
                id="password"
                v-model="password"
                class="input is-info"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-primary" @click="signup">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ROUTES from '~/routes/api'

export default {
  data() {
    return {
      userId: "",
      userName: "",
      email: "",
      password: ""
    };
  },
  methods: {
    signup() {
      const payload = {
        uri: ROUTES.POST.SIGN_UP,
        params: {
          userId: this.userId,
          email: this.email,
          userName: this.userName,
          password: this.password
        }
      };
      this.$store.dispatch('signup', payload);
    }
  }
};
</script>

<style>
</style>