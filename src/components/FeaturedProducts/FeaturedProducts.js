import img1 from "./backcover.png";
import img2 from "./blueairpods.png";
import img3 from "./cablepack.png";
import img4 from "./backcover.png";
import { FaShoppingCart } from "react-icons/fa";

function FeaturedProducts() {
  return (
    <div className="row d-flex justify-content-center">
      <div className="verticalContainer">
        <div className="d-flex justify-content-center">
          <img className="imgProp" src={img1} alt="alt" />
        </div>
        <div id="drkbkgnd" className="pt-3 d-flex justify-content-around px-2">
          <div className="align-items-start w-75">
            <p className="mb-0 h6">iPhone X</p>
            <p>
              <small>
                $49.0 <s> $60.0</s>
              </small>
            </p>
          </div>
          <div>
            <button className="rndBtns">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>

      <div className="verticalContainer">
        <div className="d-flex justify-content-center">
          <img className="imgProp" src={img2} alt="alt" />
        </div>
        <div id="drkbkgnd" className="pt-3 d-flex justify-content-around px-2">
          <div className="align-items-start w-75">
            <p className="mb-0 h6">AirPods Case</p>
            <p>
              <small>
                $49.0 <s> $60.0</s>
              </small>
            </p>
          </div>
          <div>
            <button className="rndBtns">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>

      <div className="verticalContainer">
        <div className="d-flex justify-content-center">
          <img className="imgProp" src={img3} alt="alt" />
        </div>
        <div id="drkbkgnd" className="pt-3 d-flex justify-content-around px-2">
          <div className="align-items-start w-75">
            <p className="mb-0 h6">Cable Pack</p>
            <p>
              <small>
                $49.0 <s> $60.0</s>
              </small>
            </p>
          </div>
          <div>
            <button className="rndBtns">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>

      <div className="verticalContainer">
        <div className="d-flex justify-content-center">
          <img className="imgProp" src={img4} alt="alt" />
        </div>
        <div id="drkbkgnd" className="pt-3 d-flex justify-content-around px-2">
          <div className="align-items-start w-75">
            <p className="mb-0 h6">iPhone Cover</p>
            <p>
              <small>
                $49.0 <s> $60.0</s>
              </small>
            </p>
          </div>
          <div>
            <button className="rndBtns">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
