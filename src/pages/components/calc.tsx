import { useState,useEffect } from "react";

export const Calc = () => {
    const culcMoney = (hourlyWage:number, hour:number, minutes:number ) => {
        const salary = (hourlyWage * hour) + (hourlyWage / 60) * minutes
        console.log(salary)
        return salary
      }
    const budgetToTime = (hourlyWage:number , budgetData:number) :string=> {
      const time = budgetData / hourlyWage || 0
      const hour = Math.trunc(time)
      const minutesTime = ( time - hour ) * 60
      const minutes = Math.trunc(minutesTime) || 0
      const second = (minutesTime - minutes) * 60 || 0
      if (hour === 0) {
        if ( minutes === 0 ) {
          return second + "秒"
        } 
        else if (second === 0 ) {
          return minutes  + "分"
        }
        return minutes + "分" + second + "秒"
      } else if ( minutes === 0 ) {
        if ( second === 0 ) {
          return hour + "時間"
        }
        return hour + "時間" + second + "秒"
      } else if ( second === 0 ) {
        if (minutes === 0) {
          return hour + "時間"
        }
        return hour + "時間" + minutes + "分"
      } else {
        return hour + "時間" + minutes + "分" + second + "秒"
      }
    }
      const [salaryData ,setSaralyData ] = useState<number>(0);
      const [hourlyWageData, setHourlyWageData]= useState<number>(0);
      const [hourData,setHourData] = useState<number>(0);
      const [minutesData,setMinutesData] = useState<number>(0);
      const [changeTrunc,setChangeTrunc] = useState<boolean>(true)
      const [buttonTitle,setButtonTitle] = useState<String>("");
      const [dayData, setDayData] = useState<number>(0);
      const [sumSalary,setSumSalary] = useState<number>(0);
      const [minSalary, setMinSaraly ] = useState<number>(0);
      const [secondSalary, setSecondSalary] = useState<number>(0);
      const [budget, setBudget] = useState<number>(0);
      const [budgetTime, setBudgetTime] = useState<string>("");
    
      useEffect (() => {
        if(changeTrunc === true) {
          setButtonTitle("小数点非表示")
          setSaralyData(Math.trunc(culcMoney(hourlyWageData,hourData,minutesData)))
          setSumSalary(Math.trunc(salaryData * dayData))
          setMinSaraly(Math.trunc(hourlyWageData / 60))
          setSecondSalary(Math.trunc(minSalary / 60))
        } else if (changeTrunc === false) {
          setButtonTitle("小数点表示")
          setSaralyData(culcMoney(hourlyWageData,hourData,minutesData))
          setSumSalary(salaryData * dayData)
          setMinSaraly(hourlyWageData / 60)
          setSecondSalary(minSalary / 60)
        }
        setBudgetTime(budgetToTime(hourlyWageData,budget))
      },[budget, changeTrunc, dayData, hourData, hourlyWageData, minSalary, minutesData, salaryData])
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
      <input type="number" className='inputData' placeholder='予算' onChange={(e) => setBudget(e.target.value as unknown as number)}/>
      <br />
      <button type='button' className='button' onClick={() => setChangeTrunc(current => !current)}>{buttonTitle}</button>
      <h1 className="salary">日給{salaryData}円</h1>
      <h1 className="salary">合計{sumSalary}円</h1>
      <h1 className="salary">分給{minSalary}円</h1>
      <h1 className="salary">秒給{secondSalary}円</h1>
      <h1 className="salary">{budget}円は{budgetTime}の給料</h1>
      </>
    );
  };
  