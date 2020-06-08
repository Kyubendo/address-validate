import React, {useReducer, useState} from "react";
import {AddressReducer} from "./AddressReducer";



interface SelectAddressProps {
    place: string
    onStateChange: (value: React.ChangeEvent<HTMLSelectElement>) => void
    action: string
    region: string
}

const SelectAddress: React.FC<SelectAddressProps> = ({place, onStateChange, action, region}) => {
    const [placeList, dispatchPlaceList] = useReducer(AddressReducer, {});

    // if (action=='REGION_CHANGE'){
    //     dispatchPlaceList({type:'REGION_CHANGE'})
    // }else {
    //     dispatchPlaceList({type:'TOWN_CHANGE', region})
    // }
    //
    // const selectOptions = [];
    // for (let place of placeList) {
    //     selectOptions.push(<option value={place}>{place}</option>)
    // }
    return (
        <>
            <select value={place}
                    onChange={onStateChange}>
                {/*{selectOptions}*/}
            </select>
        </>
    )
}
export default SelectAddress




