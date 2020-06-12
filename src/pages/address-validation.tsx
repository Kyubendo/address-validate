import React, {ChangeEventHandler} from "react";
import { Page } from "./page";
import addressesRaw from '../data/addresses.json';

/**
 *
 * @param value
 */

const streetTypes: Array<[string, string]> = [
    ["вулиця", "вул."],
    ["провулок", "пров."],
    ["проспект", "просп."],
    ["площа", "пл."],
    ["квартал", "кв-л"],
    ["бульвар", "бульв."],
    ["мікрорайон", "м-р"],
];

const addresses = addressesRaw;
export function validateAddress(value: string, region:string, town:string): boolean {
    if (!Object.keys(addresses[region]).includes(town)) return false
    let convertedValue = value;
    for(let [long, short] of streetTypes) {
        convertedValue = convertedValue.replace(long, short);
        if (short.startsWith(convertedValue)||long.startsWith(convertedValue)) return true;
    }
    const [,streetName = convertedValue, house] = convertedValue.match(/^(.+)(?:\s([\d].*))$/u) || [];
    for (let address of Object.keys(addresses[region][town])) {
        if((address+" ").startsWith(streetName)) {
            const houses = addressesRaw[region][town][address][0];
            if(house) {
                for (let houseNumber of houses) {
                    if (houseNumber.toString().startsWith(house)) return true;
                }
            return false;
            }else return true;
        }
    }
    return false;
}


const Label: React.FC<{ value: string }> = ({ value }) => {
    // const isValid = validateAddress(value);
    // if (isValid) {
    //     return <label className="text-success">Valid</label>;
    // }
    return <label className="text-danger">Invalid</label>;
}

export const AddressValidation: Page = () => {
    const [ value, setValue ] = React.useState("");
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { value } = e.target;
        // if (!validateAddress(value)) {
        //     return;
        // }
        setValue(value);
    }
    return (
        <>
            <input type="text" value={value} onChange={handleChange}/>
            <Label value={value} />
        </>
    );
}

AddressValidation.path = "/address-validation";
AddressValidation.title = "Address validation";
