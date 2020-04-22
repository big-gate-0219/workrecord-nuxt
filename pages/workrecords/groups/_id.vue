<template>
  <div class="section">

        <div class="container">
            <div class="columns">
                <div class="column is-2">
                    <div class="control">
                        <nuxt-link to="/groups/" class="button is-info">Back</nuxt-link>
                    </div>
                </div>
                <div class="column is-7 is-size-3 has-text-centered">
                    グループ名
                </div>
                <div class="column is-3 is-size-4 has-text-right">
                    2020-04-22
                </div>
            </div>
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
import ROUTES from '~/routes/api'

export default {
    computed: {
        // groupUsers() {
        //     return this.$store.getters.getGroupUsers
        // },
        groupUsersWorkrecords() {
            return this.$store.getters.getGroupUsersWorkrecord
        }
    },

    async fetch({store, route}) {
        // await store.dispatch(
        //     'fetchGroupUsers',
        //     {
        //         uri: ROUTES.GET.GROUP_USERS.replace(':group_id', route.params.id)
        //     }
        // )
        await store.dispatch(
            'fetchGroupUsersWorkrecord',
            {
                uri: ROUTES.GET.GROUP_USERS_WORKRECORD.replace(':group_id', route.params.id)
            }
        )
    }

}
</script>
