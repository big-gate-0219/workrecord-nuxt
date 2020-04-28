export const state = () => ({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
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
    addDay(state, add) {
        let wkDate = new Date(state.year, state.month - 1, state.day, 0, 0, 0, 0)
        wkDate.setDate(wkDate.getDate() + add)
        state.year = wkDate.getFullYear()
        state.month = wkDate.getMonth() + 1
        state.day = wkDate.getDate()

    },
    reset(state) {
        state.year = new Date().getFullYear()
        state.month = new Date().getMonth() + 1
        state.day = new Date().getDate()
    }
}