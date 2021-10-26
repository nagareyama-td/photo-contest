import Head from "next/head";
import TopImage from "@/components/TopImage";
import Ichioshi from "@/components/Ichioshi";
import Yushusakuhin from "@/components/Yushusakuhin";
import Posts from "@/components/Posts";
import HowToApply from "@/components/Apply";
import Torikatakouza from "@/components/Torikatakouza";
import Boshuyoukou from "@/components/Boshuyoukou";
import Footer from "@/components/Footer";
import { ContextData } from "./_app";
import { useContext, useState } from "react";
import BoshuyoukouLg from "@/components/BoshuyoukouLg";
import Rules from "@/components/Rules";
import styles from "styles/modules/index.module.scss";

const IndexPage = () => {
  const ctx = useContext(ContextData);
  const isLg = ctx.windowWidth > 1025;

  const [isOpenRules, setIsOpenroules] = useState(false);
  const openRules = () => {
    const body = document.querySelector("body");
    body.classList.add("isFixed");
    setIsOpenroules(true);
  };
  const closeRules = () => {
    const body = document.querySelector("body");
    body.classList.remove("isFixed");
    setIsOpenroules(false);
  };
  const goApply = () => {
    const target = document.getElementById("apply");
    target.scrollIntoView({
      behavior: "smooth",
    });
  };
  const goTorikata = () => {
    const target = document.getElementById("torikata");
    target.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <Head>
        <title>予告 流山カレンダーフォトコンテスト開催！</title>
      </Head>
      {/* <TopImage />
      <Ichioshi goApply={goApply} />
      <Yushusakuhin />
      <Posts />
      <HowToApply goTorikata={goTorikata} />
      <Torikatakouza />
      {isLg ? (
        <BoshuyoukouLg onClick={openRules} goApply={goApply} />
      ) : (
        <Boshuyoukou onClick={openRules} goApply={goApply} />
      )}
      <Footer />
      <div
        className={`${styles.rulesWrapper} ${
          isOpenRules && styles.isOpen
        }`}
      >
        <Rules onClick={closeRules} />
      </div> */}
      <div className={styles.teaserWrap}>
        <header className={styles.header}>
          <div id={styles.logo}>
            <img
              src="/images/teaser-title.svg"
              alt="nagareyama photo contest comming soon"
            />
          </div>
        </header>

        <footer className={styles.footer}>
          <small>
            &copy;{" "}
            <a
              className={styles.footerLink}
              href="https://nagareyama-td.com/"
              target="_blank"
            >
              流山ツーリズムデザイン
            </a>{" "}
            All Rights Reserved.
          </small>
        </footer>
      </div>
    </>
  );
};

export default IndexPage;
