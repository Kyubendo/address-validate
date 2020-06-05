import React from "react";
import addressesRaw from "./data/addresses.json";

interface SelectRegionProps {
    place: string
    town: string;
    onStateChange: (value: React.ChangeEvent<HTMLSelectElement>) => void
    action: { type:string, place:string }
}


const SelectReducer: React.FC<SelectRegionProps> = ({place, onStateChange, action}) => {
    let placeList:string[] = [];
    switch (action.type) {
        case 'REGION_CHANGE': placeList = Object.keys(addressesRaw);


    }
    ;
    const selectOptions = [];
    for (let place of placeList) {
        selectOptions.push(<option value={place}>{place}</option>)
    }
    return (
        <>
            <select value={place}
                    onChange={onStateChange}
                    id={'regions'}>
                {selectOptions}
            </select>
        </>
    )
}
export default SelectReducer
