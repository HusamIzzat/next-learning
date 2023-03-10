import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/EventItem.module.css';

export default function EventItem({evt}) {
  return (
    <div className={styles.event}>
        <div className={styles.image}>
            <Image src={evt.image ? evt.image : '/images/event-default.png'} height={100}  width= {170} />
            
      
        </div>
        <div className={styles.info}>
                <span>{evt.date} at {evt.time}</span>
                <h3>{evt.name}</h3>
               
            </div>
            <Link href ={`/events/${evt.slug}`} className='btn-secondary'> View Event </Link>
       
    </div>
  )
}
