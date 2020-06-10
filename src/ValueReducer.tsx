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
    switch (action.type) {
        case 'clear': return {
            ...prevState,
            value: '',
        }
        case 'change': return {
                ...prevState,
                value: action.newValue
        }
        default: return {
            ...prevState,
            value: action.newValue
        }
    }
}