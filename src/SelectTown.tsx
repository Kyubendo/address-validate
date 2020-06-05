import React from "react";
import addressesRaw from "./data/addresses.json";

interface SelectTownProps {
    region: string
    town: string
    onTownChange: (value: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectTown: React.FC<SelectTownProps> = ({region, town, onTownChange}) => {
    const towns = Object.keys(addressesRaw[region]);
    const townsOptions = [];
    for (let town of towns) {
        townsOptions.push(<option value={town}>{town}</option>)
    }
    return (
        <>
            <select value={town}
                    onChange={onTownChange}
                    id={'town'}>
                {townsOptions}
            </select>
        </>
    )
}
export default SelectTown
