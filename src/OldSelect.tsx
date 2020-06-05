import React from "react";
import addressesRaw from "./data/addresses.json";

type Props = {
    region: string;
    town: string;
    onRegionChange: (region: string) => void;
    onTownChange: (town: string) => void;
}

class OldSelect extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
        this.handleChangeRegion = this.handleChangeRegion.bind(this)
        this.handleChangeTown = this.handleChangeTown.bind(this)
    }

    handleChangeRegion(e: React.ChangeEvent<HTMLSelectElement>) {
        const region = e.target.value
        this.props.onRegionChange(region)
        this.props.onTownChange(Object.keys(addressesRaw[region])[0]);
    }

    handleChangeTown(e: React.ChangeEvent<HTMLSelectElement>) {
        this.props.onTownChange(e.target.value)
    }


    render() {
        const regions = addressesRaw;
        const regionsOptions = [];
        for (let region of Object.keys(regions)) {
            regionsOptions.push(<option value={region}>{region}</option>)
        }

        const towns = addressesRaw[this.props.region];
        const townsOptions = []
        for (let town of Object.keys(towns)) {
            townsOptions.push(<option value={town}>{town}</option>)
        }
        return (
            <>
                <select value={this.props.region}
                        onChange={this.handleChangeRegion}
                        id={'regions'}>
                    {regionsOptions}
                </select>
                <br/>
                <select value={this.props.town}
                        onChange={this.handleChangeTown}
                        id={'towns'}>
                    {townsOptions}
                </select>
            </>
        )
    }
}

export default OldSelect;
