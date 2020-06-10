import React from "react";

type ValueState = {
    value: string
}
type ValueAction = {
    type: string
    newValue: string
}


type ValueReducer = React.Reducer<ValueState, ValueAction>

export const valueReducer: ValueReducer = (prevState, action) => {
    if (action.type == 'clear') {
        return {
            ...prevState,
            value: '',
        }
    } else if (action.type == 'change') {
        return {
            ...prevState,
            value: action.newValue
        }
    }
    return {
        ...prevState
    }
}