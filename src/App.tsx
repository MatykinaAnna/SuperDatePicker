import { DateRange } from './components/DateRange/dateRange';


import './App.css';
import { DatePickerAbsolute } from './components/DatePickerAbsolute';
import { useState } from 'react';

function App() {
  
  const startDate = new Date()
  const endDate = new Date()

  const funcStartDate = (date: Date) => {
  };

  const funcEndDate = (date: Date) => {
  };

  const MIN_DATE = new Date(2000, 1, 1);
  const MAX_DATE = new Date(2100, 1, 1);
  const [date, setDate] = useState(() => new Date());

  return (
    <div>
      <DateRange {...{
          startDate: startDate,
          endDate: endDate, 
          changeStart: funcStartDate,
          changeEnd: funcEndDate,
        }}/>
    </div>
  );
}

export default App;
