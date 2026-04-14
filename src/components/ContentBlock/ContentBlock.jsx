import ShopImg from "../../assets/img/shop.png";
import VectorObjImg from "../../assets/icons/vector-object.svg";
import Navbar from "../Navbar/Navbar";
import { usePageTitle } from "../../hooks/usePageTitle";
import styles from "./ContentBlock.module.scss";

export default function ContentBlock() {
  const title = usePageTitle();
  return (
    <div className={styles.contentBlock}>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.breadCrumbs}>
          <Navbar />
          <div className={styles.verticalLine}></div>
        </div>
        <div className={styles.line}></div>
        <img className={styles.rectangleMassiveOne} src={VectorObjImg} alt="" />
      </div>
      <img className={styles.contentImg} src={ShopImg} alt="" />
    </div>
  );
}
