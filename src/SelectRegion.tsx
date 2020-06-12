import React from "react";
import {Dispatch, SelectState} from "./SelectReducer";

const SelectRegion: React.FC<{
    dispatch: Dispatch;
    state: SelectState;
    clearFunc: () => void;
}> = ({dispatch, state, clearFunc}) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        clearFunc();
        dispatch({field: 'region', value});
        dispatch({field: 'town', value: ''});
    }

    return <select name={'region'} onChange={handleChange} value={(state['region'] as string)}>
        {Object.keys(state.arr).map((value) => <option key={value}>{value}</option>)}
    </select>
}

export default SelectRegion