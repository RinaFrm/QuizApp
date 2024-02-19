import { Content } from "../../components/Content/Content"
import { Card } from "../../components/UI/Card/Card"
import { Container } from "../../components/UI/Container/Container"
import styles from './questionPage.module.css';

export const QuestionPage = () => {
  return (
    <Container className={styles.questionContainer}>
      <Content>
        <Card 
          img={'./flag.png'}
          title={'Флаг какой страны изображен?'}
        />
      </Content>
    </Container>
  )
}