import { Minus, Plus } from '../icons'
import styles from './counter.module.css'

export const Counter = ({ title }) => {
  return (
    <div className={styles.counterContainer}>
      <h2 className={styles.title}>
        {title}
      </h2>
      <div className={styles.counter}>
        <button className={styles.btn}>
          <Minus />
        </button>
        <div className={styles.count}>
          18
        </div>
        <button className={styles.btn}>
          <Plus />
        </button>
      </div>
    </div>
  )
}