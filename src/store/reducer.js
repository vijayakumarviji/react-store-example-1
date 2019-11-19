function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: action.payload.count
            }
        case 'DECREMENT':
            return {
                count: action.payload.count
            }
        default:
            return {
                count: 0
            }
    }
}

export default reducer;