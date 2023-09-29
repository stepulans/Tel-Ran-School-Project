import s from './ProductItem.module.css'

function ProductItem({elem}){
    const baseUrl = "http://localhost:3333"
    const imageURL = baseUrl + elem.image

    const discount = elem.discont_price && elem.price
    ? (((elem.price - elem.discont_price) / elem.price) * 100).toFixed(2)
    : null;

    return (
        <div className={s.productItem}>
            <img className={s.productItemImg} src={imageURL} alt="product-img" />
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
                    <p className={s.discount}>{discount}%</p>
                )}
            </div>
            <p className={s.productItemTitle}>{elem.title}</p>
        </div>
    );
}
export default ProductItem