import React, {useEffect, useState} from "react";
import addressesRaw from "./data/addresses.json";


const TownInput: React.FC<{ region: string }> = (props) => {
    const [value, setValue] = useState('');                                         //CHANGE STATES
    const [allTowns, setAllTowns] = useState(Object.keys(addressesRaw[props.region]))
    const [shortLongTowns, setShortLongTowns] = useState([['']])
    const [curTowns, setCurTowns] = useState(allTowns);
    console.log('render')
    useEffect(() => {
        const towns = Object.keys(addressesRaw[props.region])
        setAllTowns(towns)
        setCurTowns(towns)
        setValue('')
        let shortLongTowns = [];
        for (let town of towns) {
            const longTown = town;
            const shortTown = town.replace(/^.+?\s/, '')
            shortLongTowns.push([shortTown, longTown]);
        }
        setShortLongTowns(shortLongTowns);
    }, [props.region])

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        let curTowns = []
        for (let [shortTown, longTown] of shortLongTowns) {
            shortTown.startsWith(value)&&curTowns.push(longTown)
            longTown.startsWith(value)&&curTowns.push(longTown)
        }
        if(curTowns.length>0) {
            setValue(value)
            setCurTowns(curTowns)
        }
    }

    return (
        <>
            <br/>
            <input type={'text'} value={value} onChange={handleChange}/>
            <div>
                {curTowns.slice(0,5).map((value:string)=><p onClick={()=>setValue(value)}>{value}</p>)}
            </div>
        </>
    )
}

export default TownInput