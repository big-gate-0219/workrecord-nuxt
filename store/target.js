export const state = () => ({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    today: new Date().getDay(),
})

export const mutations = {
    changeCalendar(state, add) {
        if (state.month + add > 12) {
            state.year += add
            state.month = 1
        } else if (state.month + add < 1) {
            state.year += add
            state.month = 12
        } else {
            state.month += add
        }
    },
    reset(state) {
        state.year =  new Date().getFullYear()
        state.month = new Date().getMonth() + 1
        state.today = new Date().getDay()
    }
}