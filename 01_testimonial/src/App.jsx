import "./App.css";
import teddy from "./assets/images/teddy.png";
import ReactStars from "react-rating-stars-component";
import quotes from "./assets/images/quotes.png";

function App() {
  return (
    <>
      <div className="container">
        <div className="inner-cont">
          <div className="top">
            <h2>CLIENT</h2>
            <h1>TESTIMONIALS</h1>
          </div>
          <div className="bottom">
            <span>L</span>
            <div className="inner">
              <img src={teddy} alt={"img"} />
              <h3>CUSTOMER NAME</h3>
              <div className="rating-cont">
                <ReactStars
                  count={5}
                  // onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ff5100"
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                assumenda minima nam explicabo temporibus inventore facere,
                autem exercitationem
              </p>

              <div className="quote-cont">
                <img src={quotes} alt={`'`} />
              </div>
            </div>
            <span>R</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
