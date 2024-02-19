import clsx from '../../../utils/clsx';
import { Logo } from '../Logo/Logo';
import styles from './container.module.css';

export const Container = ({ children, className }) => {
  return (
    <div className={clsx(className, styles.container)}>
      <div className={styles.contentContainer}>
        <Logo text='по странам и столицам' />
        {children}
        <p className={styles.preax}>
          Проект выполнен в рамках стажировки {' '}
          <a
          href='https://preax.ru/'
          target="_blank">
            PREAX
          </a>
        </p>
      </div>
    </div>
  )
}