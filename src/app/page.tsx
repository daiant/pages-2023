'use client';

import Bubble from '@/components/Bubble/bubble';
import Nav from '@/components/Navigation/nav';
import styles from './page.module.scss';


const bubbles: Array<Bubble> = [
  { title: 'me', img: 'https://github.com/daiant.png' },
  { title: 'Drag me' }
];
function scrollIntoContent() {
  document.getElementById('scroll-next')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
export default function Home() {
  const devMode: boolean = false;
  return (
    <main className={`${styles.main}`}>
      <section id='splash' className={`${devMode ? styles.disableAnimations : ''} ${styles.front}`}>
        <div className={styles.title}>
          <h1>Carlos</h1>
          <h2>Frontend developer</h2>
          <h3>CSS magician</h3>
        </div>
      </section>
      <section className="monsteri">
        
      </section>
      <div className={styles.mainPage}>
        <Nav></Nav>

        <section id='scroll-next'>
          <div className={styles.info}>
            <h1>a CSS magician</h1>
            <div className={styles.content}>
              <p className={styles.jobDescription}>Java Fullstack developer at Laberit Sistemas</p>
              <p className={styles.jobAdditionalInfo}>From 2020 to 2022 in Valencia, spain.</p>
              <div className={styles.block}></div>
            </div>
            <div className={styles.content}>
              <p className={styles.jobDescription}>Java Fullstack developer at Laberit Sistemas</p>
              <p className={styles.jobAdditionalInfo}>From 2020 to 2022 in Valencia, spain.</p>
              <div className={styles.block}></div>
            </div>
            <div className={styles.content}>
              <p className={styles.jobDescription}>Java Fullstack developer at Laberit Sistemas</p>
              <p className={styles.jobAdditionalInfo}>From 2020 to 2022 in Valencia, spain.</p>
              <div className={styles.block}></div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.info}>
            <h1>a Hobbyist</h1>
          </div>
        </section>
      </div>
    </main>
  )
}

type Bubble = {
  title: string,
  img?: string,
}