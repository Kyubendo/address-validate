import addresses from '../data/addresses.json'

type Streets = {
    [streets:string]: Array<[number|string]>
}
type Towns = {
    [towns: string]: Streets
}
export type Addresses = {
    [regions: string] : Towns
}

const addressesRaw:Addresses = addresses;
export default addressesRaw;

