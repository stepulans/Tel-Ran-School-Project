import s from './ProductModalPage.module.css'
import ProductList from '../../components/ProductList'
import { useLocation} from 'react-router-dom';
import { useState } from 'react';
function ProductModal({pageTitle}){
    let title;
    if (pageTitle === 'All Sales') {
        title = 'All Sales';
    } else if (pageTitle === 'All Products') {
        title = 'All Products';
    } else {
        title = pageTitle;
    }

  const sortingOptions = [
    { value: 'default', label: 'Default' },
    { value: 'price-asc', label: 'Price (Low to High)' },
    { value: 'price-desc', label: 'Price (High to Low)' },
    { value: 'name-asc', label: 'Name (A to Z)' },
    { value: 'name-desc', label: 'Name (Z to A)' },
    { value: 'date-asc', label: 'Date (Old to New)' },
    { value: 'date-desc', label: 'Date (New to Old)' },
  ];

  const location = useLocation()
  const isAllSalesPage = location.pathname === '/allSales';

  const [showDiscounted, setShowDiscounted] = useState(false)
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOption, setSortOption] = useState('');

    return(
        <div className={s.modalPage}>
            <h2 className={s.modalPageTitle}>{pageTitle}</h2>
            <div className={s.modalPageFiltration}>
                <div className={s.modalPageFiltrationPrice}>
                    <label>Price</label>
                    <input type="text" placeholder='from' value={minPrice} onChange={(e) => setMinPrice(e.target.value)}/>
                    <input type="text" placeholder='to' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}/>
                </div>
                {!isAllSalesPage && <div className={s.modalPageFiltrationCheckbox}>
                    <label> Discounted items</label>
                    <input className={s.checkBox}
                            type="checkbox" 
                            name="discounted items" 
                            checked={showDiscounted}
                            onChange={() => setShowDiscounted(!showDiscounted)} />
                </div>}
                
                <div className={s.modalPageFiltrationSorted}>
                    <label>Sorted</label>
                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                    {sortingOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                    {option.label}
                    </option>
          ))}
        </select>
                </div>
            </div>
            <ProductList showDiscounted={showDiscounted} minPrice={minPrice} maxPrice={maxPrice} sortOption={sortOption}/>
        </div>
    )
}
export default ProductModal