import styles from './button.module.css';
import clsx from '../../../utils/clsx.ts'

export const Button = ({ text, tip, disabled }) => {
  return (
    <div className={styles.btnContainer}>
      <button 
        className={clsx(styles.btn, disabled ? styles.disabled : '')}
      >
        {text}
      </button>
      {tip &&
        <span className={styles.tip}>
          или нажми {' '}
          <span>
            Enter ↵
          </span>
        </span>
      }
    </div>
  )
}