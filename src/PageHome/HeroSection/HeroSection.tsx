import cx from "classnames";
import Image from "next/image";
import React from "react";

import FeatureIcon1 from "./assets/1.svg?react";
import FeatureIcon2 from "./assets/2.svg?react";
import FeatureIcon3 from "./assets/3.svg?react";
import FeatureIcon4 from "./assets/4.svg?react";
import mainImage from "./assets/main-banner.png";

import styles from "./HeroSection.module.scss";

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={cx(styles.main, className)}>
      <Image src={mainImage} alt="" className={styles.bgImage} />
      <div className={styles.overlay} />
      <div className={styles.spacerBeforeContent} />
      <div className={styles.content}>
        <div className={styles.leftBlock}>
          <h1>
            <span className={styles.sunText}>СОНЦЕ</span>
            <br />
            ВАМ В МЕРЕЖУ
          </h1>
          <p className={styles.description}>
            Спеціалізований центр зниження енергозалежності
          </p>
          <p className={styles.install}>Встановлюємо за 2 дні</p>
          <p className={styles.subInstall}>панелі, інвертор, акумулятори</p>
          <button className={styles.moreBtn}>Дізнатися більше</button>
        </div>

        <div className={styles.rightBlock}>
          <div className={styles.features}>
            <div className={styles.feature}>
              <FeatureIcon1 />
              <span>Виправляємо чужі помилки</span>
            </div>
            <div className={styles.feature}>
              <FeatureIcon2 />
              <span>Гарантований виїзд на ремонт</span>
            </div>
            <div className={styles.feature}>
              <FeatureIcon3 />
              <span>Гарантія 1 рік</span>
            </div>
            <div className={styles.feature}>
              <FeatureIcon4 />
              <span>Фіксована ціна</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.spacerBetweenContentAndCallback} />
      <div className={styles.callback}>
        <a className={styles.callActionContainerHref} href="tel:+380966116116">
          <button className={styles.callbackBtn}>Зворотній дзвінок</button>
          <span className={styles.phone}>
            +38&nbsp;<b>096 611 61 16</b>
          </span>
        </a>
      </div>
      <div className={styles.spacerAfterCallback} />
    </section>
  );
};

export default HeroSection;
