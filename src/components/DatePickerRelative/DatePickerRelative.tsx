import { useState, useRef } from "react"


import { valueTime } from "../DatePickerAbsolute/utils"

export default function DatePickerRelative({selectedValue,
                                            onChange}:
                                            {selectedValue: Date,
                                                onChange: (value: Date) => void}) {

    const [valueDirection, setValueDirection] = useState('Last')
    const [valueValueTime, setValueValueTime] = useState<{
                                                                name: string;
                                                                numSec: number;
                                                            }>(valueTime[0])

    const [valNameTime, setValNameTime] = useState(valueTime[0].name)                                                            

    function toApplay(){
        if (inputRef && inputRef.current !== null){
            let currentValue = inputRef.current.value
            console.log({valueDirection, valueValueTime, currentValue})
            let date = new Date(selectedValue)

            let znack = 1
            let seconds = valueValueTime.numSec * Number(currentValue)
            if (valueDirection == 'ago'){
                znack = znack * (-1)
            }

            const ms = date.getTime();
            const ms2 = ms + (seconds * 1000) * znack
            const d2 = new Date(ms2);

            onChange(d2)
        }
    }

    const array = ['ago', 'from now']

    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <div>
            <select value={valueDirection}
                onChange={(e) =>
                    setValueDirection(e.target.value)
                } 
            >
                {array.map((item, index)=>{
                    return <option key={index} value={item}>{item}</option>
                })}
                
            </select>

            <input ref={inputRef} defaultValue={0} type="number"  />

            <select value={valNameTime}
                onChange={(e) => {
                    setValNameTime(e.target.value)
                    if (e.target.value !== valueValueTime.name){
                        let velTime = valueTime.find((item)=>{
                            return item.name == e.target.value
                        })
                        setValueValueTime(velTime!)
                    }
                }} 
            >  
                {valueTime.map((item, index)=>{
                    return (
                        <option key={index} value={item.name}>{item.name}</option>
                    )
                })}
            </select>

            <button onClick={toApplay}>Applay</button>
        </div>
    )
    
}