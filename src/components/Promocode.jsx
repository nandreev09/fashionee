import ArrowOneImg from "../assets/icons/arrow-1.svg";
import { useState } from "react";

export default function Promocode({ applyPromo }) {
  const [value, setValue] = useState("");
  return (
    <div className="promocode">
      <div className="promo-title-and-subtitle">
        <div className="promo-title">You have a promo code?</div>
        <div className="promo-subtitle">
          To receive up-to-date promotional codes, subscribe to us on social
          networks.
        </div>
      </div>
      <div className="input-promo">
        <input
          type="text"
          placeholder="Enter promo code"
          name="promo"
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="apply-promo">
          <button onClick={() => applyPromo(value)} className="promo-btn">
            <img src={ArrowOneImg} alt="" />
          </button>
          <div className="border-right"></div>
        </div>
      </div>
    </div>
  );
}
