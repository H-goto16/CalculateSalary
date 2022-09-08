import { useState,useEffect } from "react";

export const AIncome = () => {
    const [AIncome, setAIncome] = useState<number>(0)
    const [hourData, setHourData] = useState<number>(0)
    const [dateData,setDateData] = useState<number>(0)
    const [changeTrunc,setChangeTrunc] = useState<boolean>(true)
    const [buttonTitle,setButtonTitle] = useState<String>("");
    const [calcReturn, setCalcReturn] = useState<number>(0);
    const [daySalary,setDaySalary] = useState<number>(0);
    const [monthSalary, setMonthSalary] = useState<number>(0);

    useEffect(() => {
        const hourlyWage = ( AIncome * 10000 ) / ( hourData * dateData )
        if (changeTrunc === true) {
            setButtonTitle("小数点を非表示")
            setCalcReturn(Math.trunc(hourlyWage) || 0)
            setDaySalary(Math.trunc(AIncome * 10000 / dateData) || 0)
            setMonthSalary(Math.trunc(AIncome * 10000 / 12) || 0)
        } else if (changeTrunc === false ) {
            setButtonTitle("小数点を表示")
            setCalcReturn(hourlyWage || 0)
            setDaySalary(((AIncome * 10000) / 365) || 0)
            setMonthSalary(((AIncome * 10000) / 12) || 0)
        }
    },[AIncome, calcReturn, changeTrunc, dateData, hourData])


    return (
        <>
            <input type="number" className='inputData' placeholder='目標の年収(万円)' onChange={(e) => setAIncome(e.target.value as unknown as number)}/>
            <br/>
            <input type="number" className='inputData' placeholder='一日の労働時間'onChange={(e) => setHourData(e.target.value as unknown as number)}/>
            <br/>
            <input type="number" className='inputData' placeholder='年間勤務日数' onChange={(e) => setDateData(e.target.value as unknown as number)}/>
            <p className="subTitle">完全週休2日制 祝日休みの場合{365-120}日勤務</p>
            <button type='button' className='button' onClick={() => setChangeTrunc(current => !current)}>{buttonTitle}</button>
            <h1 className="salary">時給{calcReturn}円</h1>
            <h1 className="salary">日給{daySalary}円</h1>
            <h1 className="salary">月給{monthSalary}円</h1>
        </>
    )
}