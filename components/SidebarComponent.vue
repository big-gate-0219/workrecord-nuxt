<template>
    <div class="column is-2">
        <div class="section">
            <aside class="menu">
                <ul class="menu-list">
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li v-if="isLoggedIn"><nuxt-link to="/workrecords">Workrecord</nuxt-link></li>
                    <li v-if="isLoggedIn"><nuxt-link to="/groups">Group</nuxt-link></li>
                </ul>
            </aside>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        isLoggedIn() {
            return !!this.$store.getters.isLoggedIn
        }
    }
}
</script>