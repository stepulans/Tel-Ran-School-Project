
import s from './CategoryItem.module.css'

function CategoryItem({elem}){
    const baseURL = "http://localhost:3333";
    const imageURL = baseURL + elem.image;
    return(
        <div className={s.categoryItem}>
            <img className={s.categoryItemImg} src={imageURL} alt="category-img" />
            <p className={s.categoryItemTitle}>{elem.title}</p>
        </div>
    )
}
export default CategoryItem