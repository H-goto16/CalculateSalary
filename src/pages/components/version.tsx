import reactIcon from '../../images/react.png';
import tsIcon from '../../images/Typescript.png';

export const Version = () => {
    return (
        <>  
            <hr />
            <h3 className="verTitle">Version 3.5</h3>
            <p className="detailVer">軽微な修正</p>
            <br />
            <h3 className="verTitle">Version 3.4</h3>
            <p className="detailVer">軽微な修正</p>
            <br />
            <h3 className="verTitle">Version 3.3</h3>
            <p className="detailVer">軽微な修正</p>
            <br />
            <h3 className="verTitle">Version 3.2</h3>
            <p className="detailVer">リダイレクト設定</p>
            <br />
            <h3 className="verTitle">Version 3.1</h3>
            <p className="detailVer">バグ修正</p>
            <br />
            <h3 className="verTitle">Version 3</h3>
            <p className="detailVer">機能の追加</p>
            <br />
            <h3 className="verTitle">Version 2.1</h3>
            <p className="detailVer">演算処理の修正</p>
            <br />
            <h3 className="verTitle">Version 2</h3>
            <p className="detailVer">機能の追加、見た目の変更</p>
            <br />
            <h3 className="verTitle">Version 1.5</h3>
            <p className="detailVer">演算処理の修正</p>
            <br />
            <h3 className="verTitle">Version 1</h3>
            <p className="detailVer">初リリース</p>
            <hr />
        <a href="mailto:h.goto.engineer@gmail.com?subject=問い合わせ" className='mail'>バグや要望はこちら h.goto.engineer@gmail.com</a>
        <div className="imageContainer">
          <p className="iconText">Powered by React / TypeScript</p>
          <img src={reactIcon} alt="" className='icon' />
          <img src={tsIcon} alt="" className='icon' />
        <hr />
        <p  className='githubLink'>
            <a href="https://github.com/H-goto16/CalculateSalary">GitHub SourceCode</a>
        </p>
        <br />
        </div>
        </>
    )
}

