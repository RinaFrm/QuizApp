import { Content } from '../../components/Content/Content';
import { Button } from '../../components/UI/Button/Button';
import { Container } from '../../components/UI/Container/Container';
import styles from './resultPage.module.css';

export const ResultPage = () => {
  return (
    <Container className={styles.resultContainer}>
      <Content className={styles.resultContent}>
        <img 
          src="./saly15.png" 
          alt="Иконка" 
          className={styles.img}
        />
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Результат
          </h2>
          <p className={styles.text}>
            Ты ответил правильно <br/>на
            <span className={styles.correct}>
              {' '}12{' '}
            </span>
            вопросов и сделал 
            <span className={styles.wrong}>
              {' '}6{' '}
            </span>
            ошибок.
          </p>
        </div>
        
        <Button 
          text={'Попробовать еще'}
          disabled={false}
          tip={true}
        />
      </Content>
    </Container>
  )
}