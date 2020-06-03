import { validateAddress } from "./address-validation";
import addressesRaw from "../data/addresses.json";


const region = "Харківська";
const town = 'м. Харків'

const  addresses = (addressesRaw as any)[region][town];



describe("Address Validation", () => {

    // const re = /^.*-.*\s/
    // let arr:any = [];
    // //console.log(addresses)
    // for (let address of Object.keys(addresses)){
    //     if (re.test(address)){
    //         if (!arr.includes(address.match(re)![0])) arr.push(address);
    //     }
    // }
    // console.log(arr)
    // for (let address of Object.keys(addresses)) {
    //     console.log(address)
    // }

    const formats: Array<{
        name: string,
        examples: string[],
    }> = [
            {
                name: "Актюбінська",
                examples: ['вулиця Актюбі', 'вул. Актюбінська', 'вулиця Актюбінська 11', 'вулиця Актюбінська 11А', 'вулиця Танкопія 3/2']
            },

    ];

    const formatsWrong: Array<{
        name: string,
        examples: string[],
    }> = [
        {
            name: "Актюбінська",
            examples: ['вулицяАктюбі', 'вулиця Актюбінська11', 'вулиця Актюбінська1А', 'вулиця Актюбінська 325', 'вулиця 123']
        },
    ];

    for (let i = 0; i<formats.length; i++){
        for (let j = 0; j<formats[i].examples.length; j++){
            it(`format = ${formats[i].name}, value =${formats[i].examples[j]}`, () => {
                const res = validateAddress(formats[i].examples[j]);
                expect(res).toEqual(true);
            })
        }
    }
    for (let i = 0; i<formatsWrong.length; i++){
        for (let j = 0; j<formatsWrong[i].examples.length; j++){
            it(`WRONG VALUE -- format = ${formatsWrong[i].name}, value =${formatsWrong[i].examples[j]}`, () => {
                const res = validateAddress(formatsWrong[i].examples[j]);
                expect(res).toEqual(false);
            })
        }
    }


});
