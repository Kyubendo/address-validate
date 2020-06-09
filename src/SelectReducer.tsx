import {Addresses} from "./data/addresses.json";
import React from "react";

export type SelectState = {
    region: string;
    town: string;
    arr: Addresses;
}

type SelectAction = {
    field: string;
    value: string;
}

type Reducer = React.Reducer<SelectState, SelectAction>;
export type Dispatch = React.Dispatch<SelectAction>;
export const selectReducer: Reducer = (prevState, action) => {
    return {
        ...prevState,
        [action.field]: action.value,
    };
}