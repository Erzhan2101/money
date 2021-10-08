const initialState = {
    tasks: [],
    initialAmount: 400,
    costs: 0,
    currentBalance: 400,
    sort: 'asc'
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COST':
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                initialAmount: state.currentBalance - action.payload.price,
                currentBalance: state.currentBalance - action.payload.price,
                costs: state.costs + action.payload.price
            }
        case 'SORT_TASKS':
            state.tasks.sort((a, b) => {
                return state.sort === "asc" ? a.price - b.price : b.price - a.price
            })
            return {...state, tasks: [...state.tasks], sort: state.sort === 'asc' ? 'desc' : 'asc'}
        case 'DELETE_ITEM':
            const deleteItem = state.tasks[action.payload]
            return {
                ...state,
                tasks: state.tasks.filter((el, idx) => idx !== action.payload),
                currentBalance: state.currentBalance + +deleteItem.price,
                costs: state.costs - +deleteItem.price
            }
        case "RESET_ALL":
            return initialState
        default:
            return state
    }
}