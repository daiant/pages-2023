import Bubble from '@/components/Bubble/bubble';
import { Montserrat } from '@next/font/google'
import styles from './page.module.scss'

const montse = Montserrat({ subsets: ['latin'] })
const bubbles: Array<Bubble> = [
  {title: 'me', img: 'https://github.com/daiant.png'},
  {title: 'Drag me'}
];
export default function Home() {
  const devMode: boolean = true;
  return (
    <main className={`${styles.main} ${montse.className} ${styles.disableAnimations}`}>
      <div className={styles.title}>
        <h1>Carlos</h1>
        <h2>Frontend developer</h2>
        <h3>CSS magician</h3>
      </div>
      <div className={styles.bubbles}>
        {/* {bubbles.map((bubble: Bubble) => <Bubble key={bubble.title} title={bubble.title} img={bubble.img}></Bubble>)} */}
      </div>
      <div className={styles.scrollDown}>
        <img src="/scroll.png" title='scroll down' />
      </div>
    </main>
  )
}

type Bubble = {
  title: string,
  img?: string,
}