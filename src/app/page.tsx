'use client';

import Bubble from '@/components/Bubble/bubble';
import { Montserrat } from '@next/font/google'
import styles from './page.module.scss';


const montse = Montserrat({ subsets: ['latin'], display: 'swap' })
const bubbles: Array<Bubble> = [
  { title: 'me', img: 'https://github.com/daiant.png' },
  { title: 'Drag me' }
];
function scrollIntoContent() {
  window.scrollBy({ behavior: 'smooth', top: window.innerHeight - window.scrollY });
}
export default function Home() {
  const devMode: boolean = false;
  return (
    <main className={`${styles.main} ${montse.className}`}>
      <section id='splash' className={`${devMode ? styles.disableAnimations : ''} ${styles.front}`}>
        <div className={styles.title}>
          <h1>Carlos</h1>
          <h2>Frontend developer</h2>
          <h3>CSS magician</h3>
        </div>
        <div className={styles.bubbles}>
          {/* {bubbles.map((bubble: Bubble) => <Bubble key={bubble.title} title={bubble.title} img={bubble.img}></Bubble>)} */}
        </div>
        <div className={styles.scrollDown} onClick={scrollIntoContent}>
          <span>See my</span>
          <img src="/scroll.png" title='scroll down' />
          <span>work</span>
        </div>
      </section>
      <nav className={styles.nav}>
        <p>Carlos is</p>
        <span>Burgir</span>
      </nav>
      <section>
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
    </main>
  )
}

type Bubble = {
  title: string,
  img?: string,
}