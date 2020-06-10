import React from "react";
import {Dispatch, SelectState} from "./SelectReducer";



const Select: React.FC<{
    dispatch: Dispatch;
    state: SelectState;
    field: keyof SelectState;
    clearFunc: () => void;
}> = ({field, dispatch, state, clearFunc}) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        clearFunc();
        if (field === 'region'){
            dispatch({field, value});
            dispatch({field: 'town', value: Object.keys(state.arr[value])[0]})
        }
        else dispatch({field, value});
    }

    return <select name={field} onChange={handleChange} value={(state[field] as string)}>
        {field === "town"?
            Object.keys(state.arr[state.region]).map((value) => <option key={value}>{value}</option>)
            : Object.keys(state.arr).map((value) => <option key={value}>{value}</option>)}
    </select>
}

export default Select