import { Button } from '../Button/Button';
import styles from './card.module.css';
import { Close } from '../icons';

export const Card = ({ img, title }) => {
  return (
    <div className={styles.cardContainer}>
      <button className={styles.closeBtn}>
        <Close />
      </button>
      <img src={img} alt="Картинка" />
      <h3 className={styles.title}>
        {title}  
      </h3>
      <div className={styles.answers}>
        <button className={styles.btn}>
          <span>1 {' '}</span>
          Камерун
        </button>
        <button className={styles.btn}>
        <span>2 {' '}</span>
          Нигерия
        </button>
        <button className={styles.btn}>
        <span>3 {' '}</span> 
          Центрально-Африканская Республика
        </button>
        <button className={styles.btn}>
        <span>4 {' '}</span> 
          Гаити
        </button>
      </div>
      <div className={styles.cardBottom}>
        <Button 
          text={'Ответить'}
          tip={true}
          disabled={true}
        />
        <div className={styles.counter}>
          1 / 18
        </div>
      </div>
    </div>
  )
}