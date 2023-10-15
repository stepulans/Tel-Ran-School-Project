import Map from '../Map'
import s from './Footer.module.css'
function Footer(){
    return(
        <div className={s.footer}>
            <div className={s.infoArea}>
                <div className={s.contact}>
                    <h2>Contact</h2>
                    <h3>+49 999 999 99 99</h3>
                    <div className={s.socNetIcons}>
                        <div className={s.insta}>
                            <a href="https://www.instagram.com/startainstitute/"><img src="./assets/instagram.png" alt="insta" /></a>
                            <label>Instagram</label>
                        </div>
                        <div className={s.whatsapp}>
                            <a href="#"><img src="./assets/whatsapp.png" alt="whatsapp" /></a>
                            <label>WhatsApp</label>
                        </div>
                    </div>
                </div>
                <div className={s.address}>
                    <h3>Address</h3>
                    <a href="https://tel-ran.de/">Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</a>
                    <label>Working Hours:</label>
                    <h5>24 hours a day</h5>
                </div>
            </div>
            <Map/>
        </div>
    )
}
export default Footer