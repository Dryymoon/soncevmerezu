// import Image from "next/image";

import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.leftBlock}>
          <div className={styles.logo}>СВМ</div>
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
            <div className={styles.feature}>Виправляємо чужі помилки</div>
            <div className={styles.feature}>Гарантований виїзд на ремонт</div>
            <div className={styles.feature}>Гарантія 1 рік</div>
            <div className={styles.feature}>Фіксована ціна</div>
          </div>
          <div className={styles.callback}>
            <button className={styles.callbackBtn}>Зворотній дзвінок</button>
            <a className={styles.phone} href="tel:+380966116116">
              +38 096 611 61 16
            </a>
          </div>
        </div>
      </div>
      <div className={styles.estimateBanner}>
        Розрахуйте вартість за <span className={styles.highlight}>2 кроки</span>
      </div>
    </section>
  );
}
