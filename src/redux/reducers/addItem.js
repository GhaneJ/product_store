const addItem = [];

const addItems = (state = addItem, action) => {
    if (action.type === "ADDITEM") {
        return [...state, action.payload]
    } else if (action.type === "DELITEM") {
        return state = state.filter((x) => {
            return x.id !== action.payload.id
        })
    } else return state;
}

export default addItems;