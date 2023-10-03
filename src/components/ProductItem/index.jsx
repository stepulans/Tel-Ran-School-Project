import { useDispatch } from 'react-redux';
import s from './ProductItem.module.css'
import { addToCartAction } from '../../store/cartReducer';
import { Link } from 'react-router-dom';


function ProductItem({elem}){
    const baseUrl = "http://localhost:3333"
    const imageURL = baseUrl + elem.image

    const discount = elem.discont_price && elem.price
    ? Math.round(((elem.price - elem.discont_price) / elem.price) * 100 * 100) / 100
    : null;

    const dispatch = useDispatch()

    const handleAddToCart = (e) => {
        e.preventDefault()
        dispatch(addToCartAction(elem.id, elem))
    }
    return (
        <Link key={elem.id} to={`/productdetails/${elem.id}`}>
        <div className={s.productItem}>
            <div className={s.productImgContainer}>
                <img className={s.productItemImg} src={imageURL} alt="product-img" />
                <button onClick={handleAddToCart} className={s.productBtn}>Add to cart</button>
            </div>
            
            <div className={s.priceDiv}>
                {elem.discont_price && (
                    <p className={s.actualPrice}>{elem.discont_price}$</p>
                )}
                {(!elem.discont_price && elem.price) ? (
                    <p className={s.actualPrice}>{elem.price}$</p>
                ) : (
                    <p className={s.priceWithoutDiscount}>{elem.price}$</p>
                )}
                {discount && (
                    <p className={s.discount}>-{discount}%</p>
                )}
            </div>
            <p className={s.productItemTitle}>{elem.title}</p>
        </div>
        </Link>
    );
}
export default ProductItem