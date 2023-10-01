import { useDispatch, useSelector } from 'react-redux'
import s from './ProductList.module.css'
import { useEffect } from 'react'
import { fetchDiscountedProducts, fetchProducts } from '../../asyncActions/product'
import ProductItem from '../ProductItem'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

function ProductList({showDiscounted, minPrice, maxPrice, sortOption}){
    let productList = useSelector((store) => store.productList)
    const dispatch = useDispatch()
    const location = useLocation();
    const isMainPage = location.pathname === '/';
    const AllSales = location.pathname === '/allSales'
    
    
    useEffect(() => {
        if (AllSales) {
          dispatch(fetchDiscountedProducts());
        } else {
          dispatch(fetchProducts());
        }
      }, [dispatch, AllSales]);

      const filterProductsByPrice = (product) => {
        if (minPrice && parseFloat(product.price) < parseFloat(minPrice)) {
          return false;
        }
        if (maxPrice && parseFloat(product.price) > parseFloat(maxPrice)) {
          return false;
        }
        return true;
      };

    const sortProducts = (a, b) => {
        if (sortOption === 'price-asc') {
          return a.price - b.price;
        } else if (sortOption === 'price-desc') {
          return b.price - a.price;
        } else if (sortOption === 'name-asc') {
          return a.title.localeCompare(b.title);
        } else if (sortOption === 'name-desc') {
          return b.title.localeCompare(a.title);
        } else if (sortOption === 'date-asc') {
          return new Date(a.createdAt) - new Date(b.createdAt);
        } else if (sortOption === 'date-desc') {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
        return 0;
      };


    const filteredProducts = showDiscounted
      ? productList.filter(
          (elem) => elem.discont_price && filterProductsByPrice(elem)
        )
      : productList.filter((elem) => filterProductsByPrice(elem));
  
    filteredProducts.sort(sortProducts);

    return(
        <div className={s.productListContainer}>
            {isMainPage
                ? filteredProducts.slice(0, 3).map(elem => (
                    <Link key={elem.id} to={`/productdetails/${elem.id}`}>
                        <ProductItem key={elem.id} elem={elem} />
                    </Link>
                    ))
                : filteredProducts.map(elem => (
                    <Link key={elem.id} to={`/productdetails/${elem.id}`}>
                        <ProductItem key={elem.id} elem={elem} />
                    </Link>
                    ))}
         </div>
    )
}
export default ProductList