import { useEffect, useLayoutEffect, useState } from "react";
import { DatePickerAbsolute} from "../DatePickerAbsolute"
import styles from './dateRange.module.scss'

export const DateRange = (props : {startDate: Date, endDate: Date, changeStart: (date: Date) => void, changeEnd: (date: Date) => void}) => {
    const MIN_DATE = new Date(2000, 1, 1);
    const MAX_DATE = new Date(2100, 1, 1);

    const [startDate, setStartDate] = useState(() => new Date());
    const [endDate, setEndDate] = useState(() => new Date());

    useLayoutEffect(()=>{
        setStartDate(props.startDate)
        setEndDate(props.endDate)
    }, [])

    const funcStartDate = (date: Date) => {
        setStartDate(date);
        props.changeStart(date)
    };

    const funcEndDate = (date: Date) => {
        setEndDate(date);
        props.changeEnd(date)
    };

    return (
        <div className={styles.wrapper}>
            <div key={0}>
                <DatePickerAbsolute
                    value={startDate}
                    onChange={funcStartDate}
                    min={MIN_DATE}
                    max={endDate}
                />
            </div>

            <div key={1}>
                <DatePickerAbsolute
                    value={endDate}
                    onChange={funcEndDate}
                    min={startDate}
                    max={MAX_DATE}
                />
            </div>

        </div>
    )

}