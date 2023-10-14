import logo from './logo.svg';
import './App.css';
import { Container,Row,Col } from 'react-bootstrap';
import ContactForm from './components/contactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactList from './components/contactList';
//개발전체과정 정리
//1. 왼쪽엔 연락처 등록폼, 오른쪽엔 연락처와 검색창
//2. 이름과 번호를 입력하면 연락처에 추가
//3. 리스트의 사람 수가 보임
//4. 이름으로 연락처 검색 가능
// 리덕스를 사용한다!
function App() {
  return (
    <div>
      <h1 className="title">Redux Phone Book</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm></ContactForm>
          </Col>
          <Col>
            <ContactList></ContactList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
