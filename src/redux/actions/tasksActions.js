export const addTasks = (data) => {
    return {type: 'ADD_COST', payload:data}
}

export const resetAll = () =>{
    return {type:"RESET_ALL"}
}

export const removeFromCart = (idx) => {
    return {type:'DELETE_ITEM' , payload: idx}
}
