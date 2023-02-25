import Nav from '@/components/Navigation/nav';
import Block, { TypeBlock } from '@/components/sections/block/Block';
import Splash from '@/components/sections/Splash/splash';
import getPosts, { PostData } from '@/lib/posts/post';
import styles from '../styles/Home.module.scss';

const jobs: Array<TypeBlock> = [
  {
    heading: "Laberit Sistemas",
    title: 'Java Fullstack developer',
    description: 'From 2020 to 2022 in Valencia, Spain',
    img: '/red.png',
    tags: ['java', 'fullstack', 'react', 'web']
  },
  {
    heading: "Laberit Sistemas",
    title: 'Java Fullstack developer',
    description: 'From 2020 to 2022 in Valencia, Spain',
    img: '/red.png',
    tags: ['java', 'fullstack', 'react', 'web']
  },
  {
    heading: "Laberit Sistemas",
    title: 'Java Fullstack developer',
    description: 'From 2020 to 2022 in Valencia, Spain',
    img: '/red.png',
    tags: ['java', 'fullstack', 'react', 'web']
  },
];

export default function Home({ posts }: { posts: Array<PostData> }) {
  return (
    <main className={`${styles.main}`}>
      <Splash />
      <Nav></Nav>
      <section id='scroll-next'>
        {jobs.map((job: TypeBlock, index: number) =>
          <Block block={job} key={index} />
        )}
      </section>
      <section>
        <div className="noInfo">
          <h2>Omg no info yet!!</h2>
          <h3>I don't have any hobbies :(</h3>
        </div>
      </section>
      <section>
        <ul>
          {posts.map((post: PostData) => {
            return <li key={post.id}>{post.id}</li>
          })}
        </ul>
      </section>
    </main>
  )
}

export async function getStaticProps() {
  const posts = await getPosts(3);
  return {
    props: { posts: posts }
  }
}