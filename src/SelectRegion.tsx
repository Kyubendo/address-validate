import React from "react";
import addressesRaw from "./data/addresses.json";

interface SelectRegionProps {
    region: string
    onRegionChange: (value: React.ChangeEvent<HTMLSelectElement>) => void
}


const SelectRegion: React.FC<SelectRegionProps> = ({region, onRegionChange}) => {
    const regions = Object.keys(addressesRaw);
    const regionsOptions = [];
    for (let region of regions) {
        regionsOptions.push(<option value={region}>{region}</option>)
    }
    return (
        <>
            <select value={region}
                    onChange={onRegionChange}
                    id={'regions'}>
                {regionsOptions}
            </select>
        </>
    )
}
export default SelectRegion
