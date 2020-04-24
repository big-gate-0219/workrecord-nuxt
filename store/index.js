import {createRequestClient} from '~/store/request-client';

export const state = () => ({
    token: '',
    date: '',
    workrecords: [],
    group: '',
    groups: [],
    groupUsers:[],
    groupUsersWorkrecords:[],
})

export const actions = {
    async signup({commit}, payload) {
        const client = createRequestClient(this.$axios, this.$cookies, this)
        const res = await client.post(payload.uri, payload.params)
        this.app.router.push("/login")
    },
    async login({commit}, payload) {
        const client = createRequestClient(this.$axios, this.$cookies, this)
        const res = await client.post(payload.uri, payload.params)
        this.$cookies.set('jwt_token', res.token)
        commit('mutateToken', res.token)
        this.app.router.push('/workrecords')
    },
    async logout({commit}) {
        commit('mutateToken', null)
        this.$cookies.remove('jwt_token')
        this.app.router.push('/')
    },
    async fetchMyWorkrecords({commit}, payload) {
        const client = createRequestClient(this.$axios, this.$cookies, this)
        const res = await client.get(payload.uri)
        commit('mutateMyWorkrecords', res)
    },
    async registerNewGroup({commit}, payload) {
        const client = createRequestClient(this.$axios, this.$cookies, this)
        const res = await client.post(payload.uri, payload.params)
        this.app.router.push("/groups")
    },
    async fetchMyGroups({commit}, payload) {
        const client = createRequestClient(this.$axios, this.$cookies, this)
        const res = await client.get(payload.uri)
        commit('mutateMyGroups', res)
    },
    async fetchGroupUsers({commit}, payload) {
        const client = createRequestClient(this.$axios, this.$cookies, this)
        const res = await client.get(payload.uri)
        commit('mutateGroupUsers', res)
    },
    async fetchGroupUsersWorkrecord({commit}, payload) {
        const client = createRequestClient(this.$axios, this.$cookies, this)
        const res = await client.get(payload.uri)
        commit('mutateGroupUsersWorkrecord', res)
    },
    async setToken({commit}, payload) {
        this.$cookies.set('jwt_token', payload)
        commit('mutateToken', payload)
    },

}

export const mutations = {
    mutateToken(state, payload) {
        state.token = payload
    },
    mutateMyWorkrecords(state, payload) {
        state.workrecords = payload.WorkRecords ? payload.WorkRecords : []
    },
    mutateMyGroups(state, payload) {
        state.groups = payload.Groups ? payload.Groups : []
    },
    mutateGroupUsers(state, payload) {
        state.groupUsers = payload.users ? payload.users : []
    },
    mutateGroupUsersWorkrecord(state, payload) {
        state.date = payload.date
        state.group = payload.group
        state.groupUsersWorkrecords = payload.user_workrecords ? payload.user_workrecords : []
    },
}

export const getters = {
    isLoggedIn(state) {
        return !!state.token
    },
    getDate(state) {
        return state.date
    },
    getWorkrecords(state) {
        return state.workrecords
    },
    getGroups(state) {
        return state.groups
    },
    getGroupUsers(state) {
        return state.groupUsers
    },
    getGroupUsersWorkrecord(state) {
        return state.groupUsersWorkrecords
    },
    getGroup(state) {
        return state.group
    },
}
