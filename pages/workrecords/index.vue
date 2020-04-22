<template>
    <div class="section">

        <div class="container">
            <div class="field is-grouped is-grouped-centered">
                <div class="control">
                    <button class="button is-primary is-large" @click="startWork">始業</button>
                </div>
                <div class="control">
                    <button class="button is-info is-large" @click="endWork">終業</button>
                </div>
            </div>
        </div>

        <div class="table-container">
        <table class="table is-striped is-hoverable">
            <thead>
                <tr>
                    <th>日付</th>
                    <th>始業時間</th>
                    <th>終業時間</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="day in lastday" :key="day">
                    <td>{{year}}/{{paddingLeft2(month)}}/{{paddingLeft2(day)}}（{{getDayOfWeek(day)}}）</td>
                    <td>{{getWorkrecord(day).start_of_work}}</td>
                    <td>{{getWorkrecord(day).end_of_work}}</td>
                    <td></td>
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
        workrecords() {
            return this.$store.getters.getWorkrecords
        },
        year() {
            return this.$store.state.target.year
        },
        month() {
            return this.$store.state.target.month
        },
        lastday () {
            return new Date(this.$store.state.target.year, this.$store.state.target.month, 0).getDate()
        }

    },

    async fetch({store}) {
        const payload = {
            uri: ROUTES.GET.MY_WORKRECORD
        }
        await store.dispatch('fetchMyWorkrecords', payload)
    },

    methods :{
        async startWork() {
            const res = await this.$axios.$post(ROUTES.POST.START_WORK)

            const payload = {
                uri: ROUTES.GET.MY_WORKRECORD
            }
            await this.$store.dispatch('fetchMyWorkrecords', payload)
        },
        async endWork() {
            const res = await this.$axios.$post(ROUTES.POST.END_WORK)

            const payload = {
                uri: ROUTES.GET.MY_WORKRECORD
            }
            await this.$store.dispatch('fetchMyWorkrecords', payload)
        },

        paddingLeft2(value) {
            return ("0" + value).slice(-2)
        },
        getDayOfWeek(day) {
            const week = ["日", "月", "火", "水", "木", "金", "土"]
            const year = this.$store.state.target.year
            const month = this.$store.state.target.month
            const firstOfWeek = new Date(year, month-1, 1).getDay()-1 
            return week[(firstOfWeek + day) %7]
        },
        getWorkrecord(day) {
            const workrecords = this.$store.state.workrecords
            const year = this.$store.state.target.year
            const month = this.$store.state.target.month
            const key = year + "-" + ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2)
            for (const idx in workrecords) {
                const workrecord = workrecords[idx]
                if (workrecord.date === key) {
                    return workrecord
                }
            }
            return {date: key, start_of_work:"", end_of_work: ""}
        }

    }

}
</script>