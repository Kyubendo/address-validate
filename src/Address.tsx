import React, {useReducer} from "react";
import {validateAddress} from "./pages"
import addressesRaw from "./data/addresses.json";
import SelectRegion from "./SelectRegion";
import {selectReducer} from "./SelectReducer";
import {valueReducer} from "./ValueReducer";
import TownInput from "./TownInput";

const Address = () => {
    const [stateValue, dispatchValue] = useReducer(valueReducer, {value: ''});
    const [stateSelect, dispatchSelect] = useReducer(selectReducer, {region: 'Харківська', town: '', arr: addressesRaw});
    return (
        <div style={{width: "50%", margin: "0 auto"}}>
            <SelectRegion dispatch={dispatchSelect} state={stateSelect}
                          clearFunc={() => dispatchValue({type: 'clear', newValue: ''})}/>
            <br/>
            <TownInput dispatch={dispatchSelect} state={stateSelect} field="town" region={stateSelect.region}
                       clearFunc={() => dispatchValue({type: 'clear', newValue: ''})}/>
            <br/>
            <input value={stateValue.value} type={'text'} onChange={
                (e) => validateAddress(e.target.value, stateSelect.region, stateSelect.town) && dispatchValue({
                    type: 'change',
                    newValue: e.target.value
                })}
            />
        </div>
    );
}

export default Address;
