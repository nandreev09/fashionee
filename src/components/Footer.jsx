import logoImg from "../assets/icons/logo.svg";
import sendImg from "../assets/icons/send.svg";
import visaIcon from "../assets/icons/visa.svg";
import masterCardIcon from "../assets/icons/master-card.svg";
import paypalIcon from "../assets/icons/paypal.svg";
import payoneerIcon from "../assets/icons/payoneer.svg";
import vectorObjTwo from "../assets/icons/vector-object-two.svg";
import vectorObjThree from "../assets/icons/vector-object-three.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="border-top"></div>
      <div className="block">
        <div className="footer-block">
          <div className="column">
            <div className="fashionee-logo">
              <img className="logo" src={logoImg} alt="" />
              <div className="footer-text">
                Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt
                nostrud excepteur voluptate.
              </div>
              <div className="border-bottom"></div>
            </div>
            <div className="socials">
              <div className="find-us">Find us here:</div>
              <div className="social-list">
                <div className="social">FB</div>
                <div className="space-line"></div>
                <div className="social">TW</div>
                <div className="space-line"></div>
                <div className="social">INS</div>
                <div className="space-line"></div>
                <div className="social">PT</div>
              </div>
            </div>
          </div>
          <div className="about">
            <div className="column-title">About</div>
            <ul className="footer-column">
              <li className="footer-li">About us</li>
              <li className="footer-li">Collections</li>
              <li className="footer-li">Shop</li>
              <li className="footer-li">Blog</li>
              <li className="footer-li">Contact us</li>
            </ul>
          </div>
          <div className="useful">
            <div className="column-title">Useful Links</div>
            <ul className="footer-column">
              <li className="footer-li">Privacy Policy</li>
              <li className="footer-li">Terms of use</li>
              <li className="footer-li">Support</li>
              <li className="footer-li">Shipping details</li>
              <li className="footer-li">FAQs</li>
            </ul>
          </div>
          <div className="newsletter">
            <div className="newsletter-title">Newsletter</div>
            <div className="subscribe">
              Subscribe to be the first to hear about deals, offers and upcoming
              collections.
            </div>
            <div className="email-form">
              <div className="input-form">
                <input type="text" placeholder="Enter your e-mail" />
                <img src={sendImg} alt="" />
              </div>
              <div className="border-bottom"></div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="border-bottom"></div>
          <div className="bottom-bar">
            <div className="bottom-bar-info">
              © All right reserved. Fashionee 2020
            </div>
            <div className="payment-methods">
              <div>Payment Methods:</div>
              <div className="payment-list">
                <img src={visaIcon} alt="" />
                <img src={masterCardIcon} alt="" />
                <img src={paypalIcon} alt="" />
                <img src={payoneerIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className="rectangle-massive-two" src={vectorObjTwo} alt="" />
      <img className="rectangle-massive-three" src={vectorObjThree} alt="" />
    </div>
  );
}
