import { Link, useLocation } from 'react-router-dom'
import s from './Header.module.css'
import SaleBanner from './SalesBanner'


function Header(){
    // ${navbarOpen ? s.open : ''}`
    // const toggleNavbar = () => {
    //     setNavbarOpen(!navbarOpen);
    //   };
    //   onClick={toggleNavbar}
    const location = useLocation()
    const isHomePage = location.pathname === '/'
    return(
        <nav>
            <div className={s.navContainer}>
                <div className={s.logoDiv}>
                    <img className={s.logoIcon} src="./assets/logo.png" alt="logo" />
                    <button className={s.catalogBtn}>Catalog</button>
                </div>
            
                <div className={s.navbar_right}>
                    <ul className={s.navbar_links}>
                        <Link to={'/'}><li>Main Page</li></Link>
                        <Link to={'/allProducts'}><li>All products</li></Link>
                        <Link to={'/allSales'}><li>All sales</li></Link>
                    </ul>
                    
                    <div className={s.navbar_mobile}>
                        <div className={s.navbar_togle}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        
                        <ul className={`${s.navbar}`}>
                            <Link to={'/'}><li>Main Page</li></Link>
                            <Link to={'/allProducts'}><li>All products</li></Link>
                            <Link to={'/allSales'}><li>All sales</li></Link>
                        </ul>
                    </div>
                    
                    <Link to={'/cart'}>
                        <div className={s.cartBtn}>
                            <img className={s.cartIcon} src="./assets/shopping_cart.png" alt="cart" />
                            <span className={s.cartProductCount}>3</span>
                        </div>
                    </Link>
                </div>
            </div>
            {isHomePage && <SaleBanner/>}
        </nav>
    )
}
export default Header