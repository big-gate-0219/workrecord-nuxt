<template>
  <div class="section">
    <div class="columns">
      <div class="column is-6">
        <div class="container">
          <h1>Sign up</h1>

          <div class="field" v-show="hasErrorMessages">
            <div class="help is-danger" v-for="err in getErrorMessages">{{ err }}</div>
          </div>

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
            <div class="help is-danger" v-show="hasUserIdErrorMessage">{{ getUserIdErrorMessage}}</div>
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
            <div
              class="help is-danger"
              v-show="hasUserNameErrorMessage"
            >{{ getUserNameErrorMessage}}</div>
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
            <div class="help is-danger" v-show="hasEmailErrorMessage">{{ getEmailErrorMessage}}</div>
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
            <div
              class="help is-danger"
              v-show="hasPasswordErrorMessage"
            >{{ getPasswordErrorMessage}}</div>
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
import ROUTES from "~/routes/api";

export default {
  data() {
    return {
      userId: "",
      userName: "",
      email: "",
      password: ""
    };
  },

  computed: {
    hasUserIdErrorMessage() {
      return !!this.$store.getters["signup/getFieldErrorMessage"]("userId");
    },
    getUserIdErrorMessage() {
      return this.$store.getters["signup/getFieldErrorMessage"]("userId");
    },
    hasUserNameErrorMessage() {
      return !!this.$store.getters["signup/getFieldErrorMessage"]("userName");
    },
    getUserNameErrorMessage() {
      return this.$store.getters["signup/getFieldErrorMessage"]("userName");
    },
    hasEmailErrorMessage() {
      return !!this.$store.getters["signup/getFieldErrorMessage"]("email");
    },
    getEmailErrorMessage() {
      return this.$store.getters["signup/getFieldErrorMessage"]("email");
    },
    hasPasswordErrorMessage() {
      return !!this.$store.getters["signup/getFieldErrorMessage"]("password");
    },
    getPasswordErrorMessage() {
      return this.$store.getters["signup/getFieldErrorMessage"]("password");
    },
    hasErrorMessages() {
      return this.$store.getters["signup/getErrorMessages"].length != 0;
    },
    getErrorMessages() {
      return this.$store.getters["signup/getErrorMessages"];
    }
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
      this.$store.dispatch("signup/signup", payload);
    }
  }
};
</script>

<style>
</style>