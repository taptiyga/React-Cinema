import star from "../../assets/icons/star.png"
import img_film from "../../assets/ImageFılm.jpg"
function MoviesCard() {
    return (
        <a className="movies__card" href="./movie.html">
            <div className="movies__card-rating">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
            </div>
            <img src={img_film} alt="img_film" />
        </a>
    )
}
export default MoviesCard