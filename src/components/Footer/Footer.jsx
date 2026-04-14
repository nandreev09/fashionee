import logoImg from "../../assets/icons/logo.svg";
import sendImg from "../../assets/icons/send.svg";
import visaIcon from "../../assets/icons/visa.svg";
import masterCardIcon from "../../assets/icons/master-card.svg";
import paypalIcon from "../../assets/icons/paypal.svg";
import payoneerIcon from "../../assets/icons/payoneer.svg";
import vectorObjTwo from "../../assets/icons/vector-object-two.svg";
import vectorObjThree from "../../assets/icons/vector-object-three.svg";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.borderTop}></div>
      <div className={styles.block}>
        <div className={styles.footerBlock}>
          <div className={styles.column}>
            <div className={styles.fashioneeLogo}>
              <img className={styles.logo} src={logoImg} alt="" />
              <div>
                Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt
                nostrud excepteur voluptate.
              </div>
              <div className={styles.borderBottom}></div>
            </div>
            <div className={styles.socials}>
              <div className={styles.findUs}>Find us here:</div>
              <div className={styles.socialList}>
                <div>FB</div>
                <div className={styles.spaceLine}></div>
                <div>TW</div>
                <div className={styles.spaceLine}></div>
                <div>INS</div>
                <div className={styles.spaceLine}></div>
                <div>PT</div>
              </div>
            </div>
          </div>
          <div className={styles.about}>
            <div className={styles.columnTitle}>About</div>
            <ul className={styles.footerColumn}>
              <li className={styles.footerLi}>About us</li>
              <li className={styles.footerLi}>Collections</li>
              <li className={styles.footerLi}>Shop</li>
              <li className={styles.footerLi}>Blog</li>
              <li className={styles.footerLi}>Contact us</li>
            </ul>
          </div>
          <div className={styles.useful}>
            <div className={styles.columnTitle}>Useful Links</div>
            <ul className={styles.footerColumn}>
              <li className={styles.footerLi}>Privacy Policy</li>
              <li className={styles.footerLi}>Terms of use</li>
              <li className={styles.footerLi}>Support</li>
              <li className={styles.footerLi}>Shipping details</li>
              <li className={styles.footerLi}>FAQs</li>
            </ul>
          </div>
          <div className={styles.newsletter}>
            <div className={styles.newsletterTitle}>Newsletter</div>
            <div className={styles.subscribe}>
              Subscribe to be the first to hear about deals, offers and upcoming
              collections.
            </div>
            <div className={styles.emailForm}>
              <div className={styles.inputForm}>
                <input type="text" placeholder="Enter your e-mail" />
                <img src={sendImg} alt="" />
              </div>
              <div className={styles.borderBottom}></div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.borderBottom}></div>
          <div className={styles.bottomBar}>
            <div>© All right reserved. Fashionee 2020</div>
            <div className={styles.paymentMethods}>
              <div>Payment Methods:</div>
              <div className={styles.paymentList}>
                <img src={visaIcon} alt="" />
                <img src={masterCardIcon} alt="" />
                <img src={paypalIcon} alt="" />
                <img src={payoneerIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className={styles.rectangleMassiveTwo} src={vectorObjTwo} alt="" />
      <img
        className={styles.rectangleMassiveThree}
        src={vectorObjThree}
        alt=""
      />
    </div>
  );
}
