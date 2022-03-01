import "./FourthDiv.css";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

function FourthDiv() {
  return (
    <div className="container pb-5">
      <p
        style={{ color: "green" }}
        className="container w-100 d-flex justify-content-center"
      >
        Explore
      </p>
      <h4 className="container w-100 d-flex justify-content-center mb-5">
        Our Featured Products
      </h4>
      <FeaturedProducts/>
    </div>
  );
}

export default FourthDiv;
