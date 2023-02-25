'use client';

import Bubble from '@/components/Bubble/bubble';
import Nav from '@/components/Navigation/nav';
import Block, { TypeBlock } from '@/components/sections/block/Block';
import Splash from '@/components/sections/Splash/splash';
import styles from './page.module.scss';

const jobs: Array<TypeBlock> = [
  {
    title: 'Java Fullstack developer at Laberit Sistemas',
    description: 'From 2020 to 2022 in Valencia, Spain',
    img: '/sun.svg',
  },
  {
    title: 'Java Fullstack developer at Laberit Sistemas',
    description: 'From 2020 to 2022 in Valencia, Spain',
    img: '/sun.svg',
  },
  {
    title: 'Java Fullstack developer at Laberit Sistemas',
    description: 'From 2020 to 2022 in Valencia, Spain',
    img: '/sun.svg',
  },
]

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <Splash />
      <div className={styles.mainPage} id='main'>
        <Nav></Nav>
        <section id='scroll-next'>
          {jobs.map((job: TypeBlock, index: number) =>
            <Block block={job} key={index} />
          )}
        </section>
        <section>
          <div className={styles.info}>
            <div className="noInfo">
              <h2>Omg no info yet!!</h2>
              <h3>I don't have any hobbies :(</h3>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}