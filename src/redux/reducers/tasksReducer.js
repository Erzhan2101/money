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
            return {...state,
                tasks: [...state.tasks, action.payload],
                initialAmount: state.currentBalance - action.payload.price,
                currentBalance: state.currentBalance - action.payload.price,
                costs: state.costs + action.payload.price
            }
        default:
            return state
    }
}