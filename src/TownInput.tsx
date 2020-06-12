import React, {useEffect, useState} from "react";
import addressesRaw from "./data/addresses.json";
import {Dispatch, SelectState} from "./SelectReducer";

const TownInput: React.FC<{
    region: string
    dispatch: Dispatch;
    state: SelectState;
    field: keyof SelectState;
    clearFunc: () => void;
}> = (props) => {
    const [townState, setState] = useState({
        allTowns: Object.keys(addressesRaw[props.region]),
        shortLongTowns: [['']],
        curTowns: ['']
    })
    useEffect(() => {
        const towns = Object.keys(addressesRaw[props.region])
        setState(townState => ({...townState, allTowns: towns, curTowns: towns}))
        props.dispatch({field: 'town', value: ''})
        let shortLongTowns:string[][] = [];
        for (let town of towns) {
            const shortTown = town.replace(/^.+?\s/, '')
            shortLongTowns.push([shortTown, town]);
        }
        setState(townState => ({...townState, shortLongTowns: shortLongTowns}))
    }, [props.region])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        let curTowns:string[] = []
        for (let [shortTown, longTown] of townState.shortLongTowns) {
            shortTown.startsWith(value) && curTowns.push(longTown)
            longTown.startsWith(value) && curTowns.push(longTown)
        }
        if (curTowns.length > 0) {
            props.dispatch({field: 'town', value: value})
            setState(townState => ({...townState, curTowns: curTowns}))
            props.clearFunc()
        }
    }

    return (
        <>
            <input type={'text'} value={props.state.town} onChange={handleChange}/>
            <div>
                {townState.curTowns.slice(0, 5).map((value: string) => <p onClick={() => {
                    props.dispatch({field: 'town', value: value})
                    props.clearFunc();
                }}>{value}</p>)}
            </div>
        </>
    )
}

export default TownInput