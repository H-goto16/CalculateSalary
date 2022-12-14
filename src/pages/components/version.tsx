import reactIcon from '../../images/react.png';
import tsIcon from '../../images/Typescript.png';

export const Version = () => {
    return (
        <>
            <hr />
            <div className="centerVer">
                <div className="verContainer">
                    <h3 className="verTitle">Version 4.0</h3>
                    <p className="detailVer">計算機構の修正</p>
                    <br />
                    <h3 className="verTitle">Version 4.0 Beta</h3>
                    <p className="detailVer">機能の追加、見た目の変更</p>
                    <br />
                    <h3 className="verTitle">Version 3.9</h3>
                    <p className="detailVer">レスポンシブデザイン</p>
                    <br />
                    <h3 className="verTitle">Version 3.8</h3>
                    <p className="detailVer">レイアウト変更</p>
                    <br />
                    <h3 className="verTitle">Version 3.7</h3>
                    <p className="detailVer">軽量化</p>
                    <br />
                    <h3 className="verTitle">Version 3.6</h3>
                    <p className="detailVer">修正</p>
                    <br />
                    <h3 className="verTitle">Version 3.5</h3>
                    <p className="detailVer">apple touch icon 更新</p>
                    <br />
                    <h3 className="verTitle">Version 3.4</h3>
                    <p className="detailVer">favicon更新</p>
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
                </div>
            </div>
            <a href="mailto:h.goto.engineer@gmail.com?subject=問い合わせ" className='mail'>バグや要望はこちら h.goto.engineer@gmail.com</a>
            <div className="imageContainer">
                <p className="iconText">Powered by React / TypeScript</p>
                <img src={reactIcon} alt="" className='icon' />
                <img src={tsIcon} alt="" className='icon' />
                <hr />
                <p className='githubLink'>
                    <a href="https://github.com/H-goto16/CalculateSalary">GitHub SourceCode</a>
                </p>
                <br />
            </div>
        </>
    )
}

