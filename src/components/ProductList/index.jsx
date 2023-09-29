import { useDispatch, useSelector } from 'react-redux'
import s from './ProductList.module.css'
import { useEffect } from 'react'
import { fetchProducts } from '../../asyncActions/product'
import { HOME_SALE_LIST } from '../../store/productListReducer'
import ProductItem from '../ProductItem'
import { useLocation } from 'react-router-dom'

function ProductList(){
    let productList = useSelector((store) => store.productList)
    const dispatch = useDispatch()
    const location = useLocation();
    const isMainPage = location.pathname === '/';
    useEffect(() =>{
        dispatch(fetchProducts())
        dispatch(HOME_SALE_LIST())
    }, [dispatch])

    return(
        <div className={s.productListContainer}>
            {isMainPage ? productList.map(elem => (<ProductItem key={elem.id} elem={elem}/>)).slice(0, 3) :
            productList.map(elem => (<ProductItem key={elem.id} elem={elem}/>))}
            
        </div>
    )
}
export default ProductList