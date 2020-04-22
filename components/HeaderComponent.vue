<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <nuxt-link class="navbar-item subtitle is-4" to="/">Workrecord</nuxt-link>
        </div>

        <div class="navbar-menu">

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons" v-if="isLoggedIn">
                        <a href="#" class="button is light" @click.prevent="logout">Log out</a>
                    </div>
                    <div class="buttons" v-else>
                        <nuxt-link class="button is-primary" to="/signup">
                            <strong>Sign up</strong>
                        </nuxt-link>
                        <nuxt-link class="button is-light" to="/login">
                            <strong>Log in</strong>
                        </nuxt-link>
                    </div>
                </div>
            </div>

        </div>
    </nav>
</template>

<script>
export default {
    computed: {
        isLoggedIn() {
            return !!this.$store.getters.isLoggedIn
        }
    },

    methods: {
        logout() {
            this.$store.dispatch('logout')
        }
    }
}
</script>