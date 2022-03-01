import "./header.css";
import image from "./image.png";

function Header() {
  return (
    <div className="container-fluid d-flex justify-content-center w-100" id="blkbx">
      <div className="row" id="header">
        <div id="headbtn" className="col-12 col-md-6 col-sm-12 px-5 align-self-center">
          <p id="onblk" className="h1">Buy Your Own Eco Friendly iPhone Case</p>
          <button className="btn btn-success mt-2">Shop Now</button>
        </div>
        <div className="maxht col-6 col-xs-12 py-3">
          <img src={image} alt="alt" className="img-fluid" id="phoneimg"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
