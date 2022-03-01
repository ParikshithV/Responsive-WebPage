import logo from "./logo.png";
import { MdSearch } from "react-icons/md";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <img
            className="navbar-brand px-5"
            style={{ maxHeight: "35px" }}
            src={logo}
            alt="alt"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-md-center text-left d-flex justify-content-center w-100 mr-5">
              <li className="nav-item px-5">
                <a className="nav-link active" aria-current="page" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item px-5">
                <a className="nav-link" href="/#">
                  About Us
                </a>
              </li>
              <li className="nav-item px-5 dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item px-5">
                <a className="nav-link" href="/#">
                  Special Offer
                </a>
              </li>
              <li className="nav-item px-5">
                <a className="nav-link" href="/#">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="d-flex mr-5">
              <MdSearch className="h4" />
              <AiFillHeart className="h4" />
              <AiOutlineShoppingCart className="h4" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
