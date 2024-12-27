import './App.css'
import logo from "./assets/icons/pngwing.com.png"
import facebook from "./assets/icons/icons8-facebook-новый-144.png"
import instagram from "./assets/icons/icons8-instagram-144.png"
import youtube from "./assets/icons/icons8-youtube-144.png"
import linkedin from "./assets/icons/icons8-линкедин-144.png"
import heart from "./assets/icons/icons8-червы-100.png"
import star from "./assets/icons/star.png"
import video from "./assets/videos/Титаник (1997) «Titanic» - Трейлер (Trailer) - Что посмотреть_ (1080p, h264).mp4"
import header_banner from "./assets/background.jpg"
import img_film from "./assets/ImageFılm.jpg"

function App() {

  return (
    <>
      <header>
        <a className="header__logo-flex" href="./index.html">
          <img src={logo} alt="logo" />
          <div className="header__logo-flex_sitename">
            <p>REACT</p>
            <p>CINEMA</p>
          </div>
        </a>
        <ul className="header__navbar-flex">
          <a href="./index.html">Home</a>
          <a href="./favorites.html">Favorites</a>
          <a href="#categoryes">Movies</a>
          <a href="#categoryes">FAQ</a>
          <a href="#categoryes">Help</a>
        </ul>
        <div className="header__auth-flex">
          <div className="favorites__movies">
            <img src={heart} alt="heart" />
            <p>0</p>
          </div>
          <a href="./favorites.html">Account</a>
        </div>
      </header>
      <div className="header__banner">
        <div>
          <p>REACT CINEMA</p>
          <p>Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling. </p>
          <div>
            <a href="#movies">Movies</a>
            <button>Favorites</button>
          </div>
        </div>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <img src={header_banner} alt="header_banner" />
      </div>
      <div className="container">
        <div className="filter">
          <div id="categoryes" className="filter__categoryes anchor">
            <div className="filter__categoryes-flex">
              <div onClick="changeActiveCategorySort(this)" className="filter__categoryes-item active-category">
                <p>Popular</p>
                <span></span>
              </div>
              <div onClick="changeActiveCategorySort(this)" className="filter__categoryes-item">
                <p>Novelty</p>
                <span></span>
              </div>
              <div onClick="changeActiveCategorySort(this)" className="filter__categoryes-item">
                <p>Featured</p>
                <span></span>
              </div>
              <div onClick="changeActiveCategorySort(this)" className="filter__categoryes-item">
                <p>Short films</p>
                <span></span>
              </div>
            </div>
            <span></span>
          </div>
          <div className="filter__buttons">
            <button>Movies</button>
            <button>Cinema</button>
            <button>Adventure</button>
            <button>Comedy</button>
            <button>Fantasy</button>
            <button>History</button>
            <button>Cartoon</button>
            <button>Detective</button>
            <button>Mysticism</button>
            <button>Drama</button>
          </div>
          <div className="filter__search">
            <input type="text" placeholder="Search..." />
            <button>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div id="movies" className="movies anchor">
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
        </div>
        <div className="movies__scroll">
          <button><i className="fa-solid fa-arrow-down"></i></button>
        </div>
      </div>
      <footer>
        <div className="footer__padding">
          <div className="site__info">
            <p>REACT CINEMA</p>
            <div>
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={youtube} alt="youtube" />
              <img src={linkedin} alt="linkedin" />
            </div>
          </div>
          <div className="footer__hrefs">
            <div>
              <p>Main</p>
              <p>Topic</p>
              <p>Topic</p>
              <p>Topic</p>
            </div>
            <div>
              <p>FAQ</p>
              <p>Topic</p>
              <p>Topic</p>
              <p>Topic</p>
            </div>
            <div>
              <p>Reports</p>
              <p>Topic</p>
              <p>Topic</p>
              <p>Topic</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
