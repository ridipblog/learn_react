const intinialState = 10;
const changeNumber = (state = intinialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + action.payload;
        case "DECREMENT": return state - 1;
        default: return state;
    }
}

export default changeNumber;
