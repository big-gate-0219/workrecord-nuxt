import Vue from 'vue'
import { createRequestClient } from '~/store/request-client';
import * as MessageUtility from '~/store/message-utility'

export const state = () => ({
    field_error_messages: {},
})

export const actions = {
    async login({ commit }, payload) {
        const client = createRequestClient(this.$axios, this.$cookies, this)
        const res = await client.post(payload.uri, payload.params)
        if (res.isSuccess()) {
            this.$cookies.set('jwt_token', res.data.token)
            commit('mutateToken', res.data.token)
            this.app.router.push('/workrecords/register')
            return
        } else if(res.isRequestError()) {
            const fields = ["user_id", "password"]
            commit('mutateClearFieldErrorMessage')
            for (const err of res.data.errors) {
                if (fields.includes(err.field)) {
                    const message = MessageUtility.createFieldErrorMessage(err.type, err.field)
                    commit('mutateFieldErrorMessage', {field: err.field, message: message})
                }
            }
            return
        }
    },
}

export const mutations = {
    mutateClearFieldErrorMessage(state) {
        state.field_error_messages = {}
    },
    mutateFieldErrorMessage(state, payload) {
        Vue.set(state.field_error_messages, payload.field, payload.message)
    },
}

export const getters = {
    getUserIdErrorMessage(state) {
        return state.field_error_messages['user_id']
    },
    getPasswordErrorMessage(state) {
        return state.field_error_messages['password']
    },
}