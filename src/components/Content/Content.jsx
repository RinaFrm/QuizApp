import clsx from '../../utils/clsx';
import styles from './content.module.css';

export const Content = ({ children, className }) => {
  return (
    <div className={clsx(styles.content, className)}>
      { children }
    </div>
  )
}