import React, {useState} from "react";
import {validateAddress} from "./pages"
import SelectRegion from "./SelectRegion"
import SelectTown from "./SelectTown";
import addressesRaw from "./data/addresses.json";
import SelectAddress from "./SelectAddress";

type State = {
    region: string;
    town: string;
}

type Action = {
    field: string;
    value: string;
}

type Reducer = React.Reducer<State, Action>;
type Dispatch = React.Dispatch<Action>;

const Values: {[k in keyof State]: Array<State[k]>} = {
    region: ['a','b','c'],
    town: ['1','2','3',],
}

const Select: React.FC<{
    dispatch: Dispatch;
    state: State;
    field: keyof State;
}> = ({field, dispatch, state}) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        dispatch({field, value});
    }
    return <select name={field} onChange={handleChange} value={state[field]}>
        {Values[field].map((value) => <option key={value}>{value}</option>)}
    </select>
}

const Address = () => {
    const [state, dispatch] = React.useReducer<Reducer>((prevState, action) => {
        return {
            ...prevState,
            [action.field]: action.value,
        };
    }, {region: '', town:'',});

    return (
        <div style={{width: "50%", margin: "0 auto"}}>
            <Select dispatch={dispatch} state={state} field="region" />
            <Select dispatch={dispatch} state={state} field="town" />
        </div>
    );
}

export default Address;
