export const state = () => ({
    year: new Date().getFullYear(),
    month: new Date().getMonth()+1,
    today: new Date().getDay(),
})
