import React, {useState} from "react";
import {validateAddress} from "./pages"
import SelectRegion from "./SelectRegion"
import SelectTown from "./SelectTown";
import addressesRaw from "./data/addresses.json";

const Address = () => {
    const [region, setRegion] = useState("Харківська")
    const [town, setTown] = useState("м. Харків")
    const [value, setValue] = useState('')

    return (
        <div style={{width: "50%", margin: "0 auto"}}>
            <SelectRegion region={region} onRegionChange={(e) => {
                setRegion(e.target.value)
                setTown(Object.keys(addressesRaw[e.target.value])[0])
                setValue('')
            }}/>
            <br/>
            <SelectTown region={region} town={town} onTownChange={(e) => {
                setTown(e.target.value)
                setValue('')
            }}/>
            <br/>
            <input value={value} type={'text'} onChange={
                (e) => validateAddress(e.target.value, region, town) && setValue(e.target.value)}
            />
        </div>
    );
}

export default Address;
