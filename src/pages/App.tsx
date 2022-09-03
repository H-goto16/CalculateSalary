import { BrowserRouter, Link, Routes,Route } from 'react-router-dom';
import { Calc } from './components/calc';
import { AIncome } from "./components/AnnualIncome"
import { Msaraly } from './components/Msaraly';
import { Version } from './components/version';
import '../pages/styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <h1 className='title'>給料計算アプリ</h1>
        <h3 className='version'>version 3.2</h3>
        <h4 className='warn'>小数点を表示した場合、浮動小数点演算のため誤差が生じる恐れがあります。</h4>
        <Link className='link' to="/">時給から計算</Link>
        <Link className='link' to="/calcHourlyWage">年収から計算</Link>
        <Link className='link' to="/calcMonthlyWage">月収から計算</Link>
          <div className="main">
          <Routes>
            <Route path="/" element={<Calc/>}/>
            <Route path="/calcHourlyWage" element={<AIncome/>}/>
            <Route path="/calcMonthlyWage" element={<Msaraly/>}/>
            <Route path="/version" element={<Version/>}/>
          </Routes>
        </div>
        <Link className='versionLink' to="/version">バージョン履歴</Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
