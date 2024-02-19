import styles from './welcomePage.module.css';
import { Container } from "../../components/UI/Container/Container";
import { Content } from "../../components/Content/Content";
import { Counter } from "../../components/UI/Counter/Counter";
import { Button } from "../../components/UI/Button/Button";

export const WelcomePage = () => {
  return (
    <Container className={styles.welcomeContainer}>
      <Content className={styles.welcomeContent}>
        <h1 className={styles.title}>
          Добро пожаловать
          <span>
            на викторину по странам <br />и столицам!
          </span>
        </h1>
        <Counter
          title='Выбери количество вопросов:'
        />
        <Button
          text='Начать'
          tip={true}
          disabled={false}
        />
      </Content>
    </Container>
  )
}