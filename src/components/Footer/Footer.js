import "./footer.css";
import { TiSocialYoutube, TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";

function Footer() {
  return (
    <footer>
      <div className="container py-5">
        <div className="row d-flex justify-content-between">
            <div className="col-md-3 col-xs-12">
                <p className="h4 pt-2">Email</p>
                <p className="footerText">something@example.com</p>
                <p className="h4 pt-2">Address</p>
                <p className="footerText">2118 Thornridge Cir. Syracuse, Connec 35624</p>
            </div>
            <div className="col-md-3 col-xs-12">
                <p className="h4 pt-2">Quick Links</p>
                <p className="footerText">Mobile Cover</p>
                <p className="footerText">Mobile Accessories</p>
                <p className="footerText">Mobile Charger</p>
            </div>
            <div className="col-md-3 col-xs-12">
                <p className="h4 pt-2">Information</p>
                <p className="footerText">Pravicy Policy</p>
                <p className="footerText">Terms and Conditions</p>
                <p className="footerText">Contact Us</p>
            </div>
            <div className="col-md-3 col-xs-12">
                <p className="h4 pt-2">Follow us on</p>
                <div>
                <TiSocialYoutube className="socialIcons h1"/>
                <TiSocialFacebook className="socialIcons h1"/>
                <TiSocialTwitter className="socialIcons h1"/>
                <TiSocialLinkedin className="socialIcons h1"/>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
