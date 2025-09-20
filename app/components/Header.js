import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className="first-header">
        <div className="one">
          <a className="link">FAQs</a>
          <span>|</span>
          <a className="link">Help</a>
          <span>|</span>
          <a className="link">Support</a>
        </div>
        <div className="icons">
          <TiSocialFacebook className="social" />
          <TiSocialInstagram className="social" />
          <TiSocialPinterestCircular className="social" />
          <TiSocialYoutube className="social" />
        </div>
      </div>

      <nav>
        <div className="title">
          <h1>
            <span>E</span>Shopper
          </h1>
        </div>
        <div className="search">
          <input placeholder="search for products..." />
          <span>
            <IoIosSearch className="search-icon" />
          </span>
        </div>
        <div className="shop-icons">
          <FaHeart className="right-icon" />
          <FaShoppingCart className="right-icon" />
        </div>
      </nav>
    </>
  );
}
