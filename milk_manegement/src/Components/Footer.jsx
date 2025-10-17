import React from "react";
import "../StyleSection/Footer.css"; // Make sure the path is correct

const Footer = ({ setCurrentPage }) => {
  return (
    <center>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Logo & Addresses */}
          <div className="footer-col">
            <div className="footer-logo">
              <span>🥛</span>
              <h3>WHITE CRAFT</h3>
            </div>
            <div className="footer-address">
              <p className="footer-title">Corporate Office:</p>
              H-109, H Block, Sector 63, Noida, Uttar Pradesh 201301
              <p>H-109, H Block, Sector 63,<br/>sahaswan budaun,<br/>Noida, Uttar Pradesh 201301</p>
              {/* <p className="footer-title mt-4">Manufacturing & Packaging Address:</p>
              <p>Khewat No.- 1165, Mini Khata No.- 1237,<br/>Village Khewra, Rai, Sonipat,<br/>Haryana - 131001</p> */}
            </div>
          </div>

          {/* Column 2: Categories */}
          <div className="footer-col">
            <h4>Categories</h4>
            <ul>
              <li><button onClick={() => setCurrentPage('products')}>Dairy</button></li>
              <li><button>Desi Ghee</button></li>
              <li><button>Bakery</button></li>
              <li><button>Breakfast</button></li>
              <li><button>Fresh Fruits & Veggies</button></li>
              <li><button>Grocery</button></li>
              <li><button>Cold Pressed Oil</button></li>
              <li><button>Dry Fruits</button></li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="footer-col">
            <h4>Useful Links</h4>
            <ul>
              <li><button>Privacy Policy</button></li>
              <li><button>Terms & Conditions</button></li>
              <li><button>Refund Policy</button></li>
              <li><button>Shipping Policy</button></li>
              <li><button>WHITE CRAFT Reviews</button></li>
            </ul>
          </div>

          {/* Column 4: App & Social */}
          <div className="footer-col">
            <h4>Download App</h4>
            <div className="footer-apps">
              <div className="app-btn">
                <p className="small-text">GET IT ON</p>
                <p className="bold-text">Google Play</p>
              </div>
              <div className="app-btn">
                <p className="small-text">Download on the</p>
                <p className="bold-text">App Store</p>
              </div>
            </div>

            <h4>Connect with us</h4>
            <div className="footer-socials">
              <a href="#">f</a>
              <a href="#">in</a>
              <a href="#">▶</a>
              <a href="#">📷</a>
            </div>

            <h4>Contact us</h4>
            <div className="footer-contact">
              <p>furqanullah3677@gmail.com</p>
              <p>+91 99273 35197</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025, by whitecraft.com | All rights reserved | WHITE CRAFT Dairy Farms Private Limited</p>
          <p className="footer-owner">Owned & Managed by <strong>Mr.Furqan ullah khan </strong></p>


        </div>
      </div>
      
    </footer>
    </center>
  );
};

export default Footer;
