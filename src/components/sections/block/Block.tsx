import Image from "next/image"
import styles from './block.module.scss';

export type TypeBlock = {
    img: string,
    title: string,
    description: string,
}
export default function Block(props: { block: TypeBlock }) {
    return <div className={styles.block}>
        <Image src={props.block.img} width={250} height={150} alt={props.block.description} />
        <p className={styles.title}>{props.block.title}</p>
        <p className={styles.description}>{props.block.description}</p>
    </div>
}