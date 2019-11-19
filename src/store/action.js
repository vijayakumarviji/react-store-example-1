export const increment = (props) => {
    return {
        type: 'INCREMENT',
        payload : {
            count: props.count + 1
        }
    }
}

export const decrement = (props) => {
    return {
        type: 'DECREMENT',
        payload : {
            count: props.count - 1
        }
    }
}