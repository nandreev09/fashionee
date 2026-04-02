import ShopImg from "../assets/img/shop.png";
import VectorObjImg from "../assets/icons/vector-object.svg";
import Navbar from "./Navbar";
import { usePageTitle } from "../hooks/usePageTitle";

export default function ContentBlock() {
  const title = usePageTitle();
  return (
    <div className="content-block">
      <div className="content">
        <div className="title">{title}</div>
        <div className="bread-crumbs">
          <Navbar />
          <div className="vertical-line"></div>
        </div>
        <div className="line"></div>
        <img className="rectangle-massive-one" src={VectorObjImg} alt="" />
      </div>
      <img className="content-img" src={ShopImg} alt="" />
    </div>
  );
}
