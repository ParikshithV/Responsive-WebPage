import img2 from "./Frame 3.png";
import img3 from "./Frame 4.png";
import img4 from "./Frame 5.png";
import img5 from "./Frame 6.png";
import img6 from "./Frame 7.png";
import img7 from "./Frame 8.png";

function Carousel() {
  return (
    <div className="d-flex py-5 align-items-center">
      <div className="w-100 justify-content-center">
        <div
          id="carouselExampleIndicators"
          className="carousel slide w-25 m-auto"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img4} class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
        <p className="h2" style={{maxWidth: '500px'}} >Our Partners</p>
      <div className="w-100 justify-content-center">
        <div
          id="carouselExampleIndicators"
          className="carousel slide w-25 m-auto"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img5} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img6} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img7} class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
