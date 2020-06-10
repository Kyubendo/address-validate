import React, {useReducer} from "react";
import {validateAddress} from "./pages"
import addressesRaw from "./data/addresses.json";
import Select from "./Select";
import {selectReducer} from "./SelectReducer";
import {valueReducer} from "./ValueReducer";
import TownInput from "./TownInput";

const Address = () => {
    const [stateValue, dispatchValue] = useReducer(valueReducer, {value: ''});
    const [stateSelect, dispatchSelect] = useReducer(selectReducer, {region: 'Харківська', town: 'м. Харків', arr: addressesRaw});

    return (
        <div style={{width: "50%", margin: "0 auto"}}>
            <Select dispatch={dispatchSelect} state={stateSelect} field="region"
                    clearFunc={() => dispatchValue({type: 'clear', newValue: ''})}/>
            <br/>
            <Select dispatch={dispatchSelect} state={stateSelect} field="town"
                    clearFunc={() => dispatchValue({type: 'clear', newValue: ''})}/>
            <TownInput region={stateSelect.region}/>
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
