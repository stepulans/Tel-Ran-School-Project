import { useDispatch, useSelector } from 'react-redux'
import s from './ProductList.module.css'
import { useEffect } from 'react'
import { fetchProducts } from '../../asyncActions/product'
import ProductItem from '../ProductItem'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

function ProductList(){
    let productList = useSelector((store) => store.productList)
    const dispatch = useDispatch()
    const location = useLocation();
    const isMainPage = location.pathname === '/';
    useEffect(() =>{
        dispatch(fetchProducts())
    }, [dispatch])

    return(
        <div className={s.productListContainer}>
            {isMainPage
                ? productList.slice(0, 3).map(elem => (
                    <Link key={elem.id} to={`/productdetails/${elem.id}`}>
                        <ProductItem key={elem.id} elem={elem} />
                    </Link>
                    ))
                : productList.map(elem => (
                    <Link key={elem.id} to={`/productdetails/${elem.id}`}>
                        <ProductItem key={elem.id} elem={elem} />
                    </Link>
                    ))}
         </div>
    )
}
export default ProductList