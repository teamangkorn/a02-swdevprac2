import styles from './ProductCard.module.css';
import Image from 'next/image';

export default function ProductCard() {
    return(
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src="/img/productCard.jpeg" alt="Party Room" fill={true} objectFit='cover'/>
            </div>
            <div className={styles.cardtext}>
                <h3>Room1</h3>
                <p>For the night of fun, we prepared the biggest party room size for you.</p>
                
            </div>
        </div>

    );
}