import { useState,useEffect } from "react";

export const Calc = () => {
    const culcMoney = (hourlyWage:number, hour:number, minutes:number ) => {
        const salary = (hourlyWage * hour) + (hourlyWage / 60) * minutes
        console.log(salary)
        return salary
      }
      const [salaryData ,setSaralyData ] = useState<number>(0);
      const [hourlyWageData, setHourlyWageData]= useState<number>(0);
      const [hourData,setHourData] = useState<number>(0);
      const [minutesData,setMinutesData] = useState<number>(0);
      const [changeTrunc,setChangeTrunc] = useState<boolean>(true)
      const [buttonTitle,setButtonTitle] = useState<String>("");
      const [dayData, setDayData] = useState<number>(0);
      const [sumSalary,setSumSalary] = useState<number>(0)
    
      useEffect (() => {
        if(changeTrunc === true) {
          setButtonTitle("小数点非表示")
          setSaralyData(Math.trunc(culcMoney(hourlyWageData,hourData,minutesData)))
          setSumSalary(Math.trunc(salaryData * dayData))
        } else if (changeTrunc === false) {
          setButtonTitle("小数点表示")
          setSaralyData(culcMoney(hourlyWageData,hourData,minutesData))
          setSumSalary(salaryData * dayData)
        }
        
      },[changeTrunc, dayData, hourData, hourlyWageData, minutesData, salaryData])
    return (
      <>
      <input type="number" className='inputData' placeholder='時給' onChange={(e) => setHourlyWageData(e.target.value as unknown as number)}/>
      <br/>
      <input type="number" className='inputData' placeholder='時間'onChange={(e) => setHourData(e.target.value as unknown as number)}/>
      <br/>
      <input type="number" className='inputData' placeholder='分' onChange={(e) => setMinutesData(e.target.value as unknown as number)}/>
      <br />
      <input type="number" className='inputData' placeholder='日' onChange={(e) => setDayData(e.target.value as unknown as number)}/>
      <br />
      <button type='button' className='button' onClick={() => setChangeTrunc(current => !current)}>{buttonTitle}</button>
      <h1 className="salary">日給{salaryData}円</h1>
      <h1 className="salary">合計{sumSalary}円</h1>
      </>
    );
  };
  