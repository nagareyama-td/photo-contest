import styles from "styles/modules/Yushusakuhin.module.scss";
import Image from "next/image";
import Ribon from "images/saiyushu_ribon_sp.svg";
import sectionTitleSp from "images/section_title02_sp.svg";
import sectionTitleMd from "images/section_title02_md.svg";
import sectionTitleLg from "images/section_title02_lg.svg";
import calenderImage from "images/saiyushu_image_sp.png";
import { ContextData } from "pages/_app";
import { useContext } from "react";
import Link from "next/link";

const Yushusakuhin = () => {
  const ctx = useContext(ContextData);
  const isMd = ctx.windowWidth > 600 && ctx.windowWidth <= 1024;
  const isLg = ctx.windowWidth > 1024;

  const titleImage = isMd
    ? sectionTitleMd
    : isLg
    ? sectionTitleLg
    : sectionTitleSp;
  return (
    <div className={styles.yushusakuhinBox}>
      <div className={styles.titleBox}>
        <div className={styles.ribonImage}>
          <Image src={Ribon} alt={"優秀作品は・・・"} />
        </div>
        <Image src={titleImage} alt={"カレンダーとして販売！"} />
      </div>
      <section>
        <div className={styles.contents}>
          <p className={styles.text}>
            審査の結果、優秀作品に選ばれた投稿作品は、2022年4月始まりのカレンダーとしてまとめて、流山市内で販売します。
            <br />
            また、
            <Link href="https://nagareyama-td.com/reimei/">
              <a target="_blank" className="a-link">
                「杜のアトリエ黎明」
              </a>
            </Link>
            で、優秀作品のリアル展示会も予定しています。
          </p>
          <div className={styles.calenderImageBox}>
            <Image src={calenderImage} alt={"カレンダー"} />
            <p className={styles.note}>※画像はイメージです</p>
          </div>
        </div>
      </section>
      <div className="namiBox shiro" />
    </div>
  );
};

export default Yushusakuhin;
