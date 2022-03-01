import "./ThirdDiv.css";
import img1 from "./backCover.png";
import img2 from "./airpods.png";
import img3 from "./charger.png";

function ThirdDiv() {
  return (
    <div className="container my-5">
      <h4 className="container d-flex justify-content-center">
        Shop By Categories
      </h4>
      <div className="row d-flex justify-content-around">
        <div id="azure" className="smallContainer d-flex justify-content-around align-items-center">
          <div className="w-50">
            <h6>Eco friendly mobile cover</h6>
            <button className="btn btn-dark btn-sm">Shop Now</button>
          </div>
          <div>
            <img src={img1} className="imgProp bigimg mb-3" alt="alt" />
          </div>
        </div>
        <div id="bisque" className="smallContainer d-flex justify-content-around align-items-center">
          <div className="w-50">
            <h6>Mobile Accessories</h6>
            <button className="btn btn-dark btn-sm">Shop Now</button>
          </div>
          <div>
            <img src={img2} className="imgProp bigimg mb-3" alt="alt" />
          </div>
        </div>
        <div id="darksalmon" className="smallContainer d-flex justify-content-around align-items-center">
          <div className="w-50">
            <h6>Mobile Charger</h6>
            <button className="btn btn-dark btn-sm">Shop Now</button>
          </div>
          <div>
            <img src={img3} className="imgProp bigimg mb-3" alt="alt" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdDiv;
