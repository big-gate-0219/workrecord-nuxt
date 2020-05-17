<template>
    <div class="section">
        <div class="columns">
            <div class="column is-6">
                <div class="field" v-show="hasErrorMessages">
                    <div class="help is-danger" v-for="err in getErrorMessages">
                        {{ err }}
                    </div>
                </div>
                <div class="field">
                    <label for="user-id" class="label">User ID</label>
                    <div class="control">
                        <input id="user_id" v-model="userId" class="input is-info" type="text" placeholder="User id" value="">
                    </div>
                    <div class="help is-danger" v-show="hasUserIdErrorMessage">
                        {{ getUserIdErrorMessage }}
                    </div>
                </div>

                <div class="field">
                    <label class="label" for="password">Password</label>
                    <div class="control">
                        <input id="password" v-model="password" class="input is-info" type="password" placeholder="User id">
                    </div>
                    <div class="help is-danger" v-show="hasPasswordErrorMessage">
                        {{ getPasswordErrorMessage }}
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link" @click="login">Log in</button>
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
            password: "",
        }
    },

  computed: {
      hasUserIdErrorMessage() {
          return !!this.$store.getters['login/getUserIdErrorMessage']
      },
      getUserIdErrorMessage() {
          return this.$store.getters['login/getUserIdErrorMessage']
      },
      hasPasswordErrorMessage() {
          return !!this.$store.getters['login/getPasswordErrorMessage']
      },
      getPasswordErrorMessage() {
          return this.$store.getters['login/getPasswordErrorMessage']
      },
      hasErrorMessages() {
          return this.$store.getters['login/getErrorMessages'].length != 0
      },
      getErrorMessages() {
          return this.$store.getters['login/getErrorMessages']
      },

    },

    methods: {
        login() {
            const payload = {
                uri: ROUTES.POST.LOGIN,
                params: {
                    user_id: this.userId,
                    password: this.password,
                }
            }
            this.$store.dispatch('login/login', payload)
        },
    }
}
</script>
