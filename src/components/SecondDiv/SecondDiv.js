import phone from "./phone.png";
import "./secdiv.css";

function SecondDiv() {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xs-12">
          <img id="phone" src={phone} alt="Alt"/>
        </div>
        <div className="col-sm-12 col-md-6 col-xs-12 align-self-center">
          <p style={{ color: "green" }}>Our Mission</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="btn btn-dark">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default SecondDiv;
