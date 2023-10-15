import { Link, useLocation } from 'react-router-dom'
import s from './Header.module.css'
import SaleBanner from './SalesBanner'
import { useSelector } from 'react-redux'
import { selectCartItemCount } from '../../store/cartReducer'
import { useState } from 'react'


function Header(){
    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };
    const [navbarOpen, setNavbarOpen] = useState(false);
    const location = useLocation()
    const isHomePage = location.pathname === '/'
    const cartItemCount = useSelector(selectCartItemCount)
    return(
        <nav>
            <div className={s.navContainer}>
                <div className={s.logoDiv}>
                    <Link to={'/'}><img className={s.logoIcon} src="./assets/logo.png" alt="logo" /></Link>
                    <Link to={'/categories'}><button className={s.catalogBtn}>Catalog</button></Link>
                    
                </div>
            
                <div className={s.navbar_right}>
                    <ul className={s.navbar_links}>
                        <Link to={'/'}><li>Main Page</li></Link>
                        <Link to={'/allProducts'}><li>All products</li></Link>
                        <Link to={'/allSales'}><li>All sales</li></Link>
                    </ul>
                    
                    <div className={s.navbar_mobile} onClick={toggleNavbar}>
                        <div className={s.navbar_togle}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        
                        <ul className={`${s.navbar} ${navbarOpen ? s.open : ''}` }>
                            <Link to={'/'}><li>Main Page</li></Link>
                            <Link to={'/allProducts'}><li>All products</li></Link>
                            <Link to={'/allSales'}><li>All sales</li></Link>
                        </ul>
                    </div>
                    
                    <Link to={'/cart'}>
                        <div className={s.cartBtn}>
                            <img className={s.cartIcon} src="./assets/shopping_cart.png" alt="cart" />
                            <span className={s.cartProductCount}>{cartItemCount}</span>
                        </div>
                    </Link>
                </div>
            </div>
            {isHomePage && <SaleBanner/>}
        </nav>
    )
}
export default Header