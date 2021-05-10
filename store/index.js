export const state = () => ({
    userID: null,
})

export const mutations = {
    SET_USERID(state, userID) {
        state.userID = userID
    },
}


//this.$store.state.userID