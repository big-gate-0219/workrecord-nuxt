import Vue from 'vue'
import { createRequestClient } from '~/store/request-client';
import * as MessageUtility from '~/store/message-utility'

export const state = () => ({
    error_messages: [],
    field_error_messages: {},
})

export const actions = {
    async signup({ commit }, payload) {
        const client = createRequestClient(this.$axios, this.$cookies, this)
        const res = await client.post(payload.uri, payload.params)
        if (res.isSuccess()) {
            this.app.router.push("/login")
            return
        } else if (res.isRequestError()) {
            console.log(res.data.errors)

            const fields = ["userId", "email", "userName", "password"]
            const error_messages = []
            commit('mutateClearFieldErrorMessage')
            for (const err of res.data.errors) {
                if (fields.includes(err.field)) {
                    const message = MessageUtility.createFieldErrorMessage(err.type, err.field, err.param)
                    commit('mutateFieldErrorMessage', {field: err.field, message: message})
                } else {
                    const message = MessageUtility.createErrorMessage(err.type)
                    error_messages.push(message)
                }
            }
            commit('mutateErrorMessages',error_messages)
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
    mutateErrorMessages(state, payload) {
        state.error_messages = payload
    },
}

export const getters = {
    getErrorMessages(state) {
        return state.error_messages
    },
    getFieldErrorMessage: (state) => (field) => {
        return state.field_error_messages[field]
    }
}