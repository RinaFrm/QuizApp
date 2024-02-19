import styles from './logo.module.css';
import { LogoSvg } from '../icons';

export const Logo = ({ text }) => {
  return (
    <div className={styles.logoContainer}>
      <LogoSvg />
      <span>
        {text}
      </span>
    </div>
  )
}