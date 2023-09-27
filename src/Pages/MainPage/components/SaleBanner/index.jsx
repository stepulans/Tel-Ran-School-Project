import s from './SaleBaner.module.css'

function SaleBanner(){
    return(
        <div className={s.saleBanner}>
            <div className={s.salesInfo}>
                <h2>Sale</h2>
                <h3>New season</h3>
                <button className={s.saleBtn}>Sale</button>
            </div>
            <div>
                <img className={s.saleBannerImg} src="./assets/bannerImg.png" alt="bannerImg" />
            </div>
        </div>
    )
}
export default SaleBanner