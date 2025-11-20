import React from "react";

import LogoIcon from "./assets/logo.svg?react";
import HeroSection from "./HeroSection";

import styles from "./PageHome.module.scss";

const PageHome: React.FC = () => {
  return (
    <div className={styles.firstScreen}>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logoIcon}>
            <LogoIcon />
          </div>
          <div className={styles.logoText}>
            <span>
              <i>С</i>ВМ
            </span>
          </div>
        </div>
      </div>
      <HeroSection className={styles.hero} />
      {/* <div className={styles.estimateBanner}>
        <span>
          Розрахуйте вартість за <span>2 кроки</span>
        </span>
      </div> */}
    </div>
  );
};

export default PageHome;
