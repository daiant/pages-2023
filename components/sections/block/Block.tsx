import Image from "next/image"
import styles from './block.module.scss';

export type TypeBlock = {
    img: string,
    heading: string,
    title: string,
    description: string,
    tags: Array<string>
}
export default function Block({ block }: { block: TypeBlock }) {
    return <div className={styles.block}>
        <header>
            <p>{block.heading}</p>
            <Image src={block.img} fill alt={block.description} />
        </header>
        <main>
            <p className={styles.title}>{block.title}</p>
            <p className={styles.description}>{block.description}</p>
            <div className={styles.separator}></div>
            <ul>
                {block.tags.map((tag: string) => {
                    return <li className="tag" key={tag}>{tag}</li>
                })}
            </ul>
        </main>
    </div>
}