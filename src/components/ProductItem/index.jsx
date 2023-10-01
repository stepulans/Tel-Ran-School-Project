import s from './ProductItem.module.css'

function ProductItem({elem}){
    const baseUrl = "http://localhost:3333"
    const imageURL = baseUrl + elem.image

    const discount = elem.discont_price && elem.price
    ? Math.round(((elem.price - elem.discont_price) / elem.price) * 100 * 100) / 100
    : null;

    return (
        <div className={s.productItem}>
            <div className={s.productImgContainer}>
                <img className={s.productItemImg} src={imageURL} alt="product-img" />
                <button className={s.productBtn}>Add to cart</button>
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
    );
}
export default ProductItem