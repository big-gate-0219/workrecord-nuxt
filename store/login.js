import { createRequestClient } from '~/store/request-client';
import * as MessageUtility from '~/store/message-utility'

export const state = () => ({
    user_id_error_message: "",
    password_error_message: "",
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
            let err
            if (err = getError(res.data.errors, "user_id")) {
                const message = MessageUtility.createFieldErrorMessage(err.type, err.field)
                commit('mutateUserIdErrorMessage', message)
            } else {
                commit('mutateUserIdErrorMessage', '')
            }

            if (err = getError(res.data.errors, "password")) {
                const message = MessageUtility.createFieldErrorMessage(err.type, err.field)
                commit('mutatePasswordErrorMessage', message)
            } else {
                commit('mutatePasswordErrorMessage', '')
            }
            return
        }
    },
}

function getError(errors, field) {
    for (var err of errors) {
        if (err.field === field) {
            return err
        }
    }
    return null
}

export const mutations = {
    mutateUserIdErrorMessage(state, payload) {
        state.user_id_error_message = payload
    },
    mutatePasswordErrorMessage(state, payload) {
        state.password_error_message = payload
    },
}

export const getters = {
    hasUserIdErrorMessage(state) {
        return !!state.user_id_error_message
    },
    getUserIdErrorMessage(state) {
        return state.user_id_error_message
    },
    hasPasswordErrorMessage(state) {
        return !!state.password_error_message
    },
    getPasswordErrorMessage(state) {
        return state.password_error_message
    },
}