<template>
    <div class="section">
        <h1>Group</h1>

        <ul>
            <li v-for="group in groups">
                <nuxt-link :to="`/workrecords/groups/${group.group_id}`">{{group.group_name}}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
import ROUTES from '~/routes/api'

export default {
    computed: {
        groups() {
            return this.$store.getters.getGroups
        },
    },
    async fetch({store}) {
        const payload = {
            uri: ROUTES.GET.MY_GROUPS
        }
        await store.dispatch('fetchMyGroups', payload)
    },
}
</script>
