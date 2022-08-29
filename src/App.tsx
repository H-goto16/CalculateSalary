import { BrowserRouter, Link, Routes,Route } from 'react-router-dom';
import { Calc } from './calc';
import { AIncome } from "./AnnualIncome"
import { Version } from './version';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <h1 className='title'>給料計算アプリ</h1>
        <h3 className='version'>version 2.1</h3>
        <h4 className='warn'>小数点を表示した場合、浮動小数点演算のため誤差が生じる恐れがあります。</h4>
        <Link className='link' to="/">時給から計算</Link>
        <Link className='link' to="/calcHourlyWage">年収から計算</Link>
          <div className="main">
          <Routes>
            <Route path="/" element={<Calc/>}/>
            <Route path="/calcHourlyWage" element={<AIncome/>}/>
            <Route path="/version" element={<Version/>}/>
          </Routes>
        </div>
        <Link className='versionLink' to="/version">バージョン履歴</Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
