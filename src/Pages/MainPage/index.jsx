import s from './MainPage.module.css'
import SaleBanner from './components/SaleBanner'

function MainPage(){
    return(
        <div className={s.mainPage}>
            <SaleBanner/>
        </div>
    )
}
export default MainPage