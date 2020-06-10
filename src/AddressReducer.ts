import React, {Reducer} from "react";
import addressesRaw from "./data/addresses.json";


type Action = {
    type: "REGION_CHANGE";
} | {
    type: "TOWN_CHANGE",
    region: string;
}


export const AddressReducer: Reducer<{}, Action> = ({}, action:Action) => {
    let arr = []
    switch (action.type) {
        case 'REGION_CHANGE': arr =  Object.keys(addressesRaw);
            return arr;
        case 'TOWN_CHANGE': arr = Object.keys(addressesRaw[action.region]);
            return arr;
    }
}



