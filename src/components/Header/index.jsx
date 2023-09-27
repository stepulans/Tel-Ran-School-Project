import { Link } from 'react-router-dom'
import s from './Header.module.css'


function Header(){
    // ${navbarOpen ? s.open : ''}`
    // const toggleNavbar = () => {
    //     setNavbarOpen(!navbarOpen);
    //   };
    //   onClick={toggleNavbar}

    return(
        <nav>
            <div className={s.navContainer}>
                <div className={s.logoDiv}>
                <img className={s.logoIcon} src="./assets/logo.png" alt="logo" />
                <button className={s.catalogBtn}>Catalog</button>
            </div>
            <div className={s.navbar_links}>
                <Link to={'/'}><h3 className={s.firstH3}>Main Page</h3></Link>
                <Link to={'/allProducts'}><h3>All products</h3></Link>
                <Link to={'/allSales'}><h3>All sales</h3></Link>
            </div>
            <div className={s.navbar_mobile}>
                    <div className={s.navbar_togle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`${s.navbar}`}>
                        <Link to={'/'}><h3>Main Page</h3></Link>
                        <Link to={'/allProducts'}><h3>All products</h3></Link>
                        <Link to={'/allSales'}><h3>All sales</h3></Link>
                    </div>
            </div>
            <Link to={'/cart'}><div className={s.cartBtn}>
                <img className={s.cartIcon} src="./assets/shopping_cart.png" alt="cart" />
                <span className={s.cartProductCount}>3</span>
            </div></Link>
            
            </div>
            
        </nav>
    )
}
export default Header