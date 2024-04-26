import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function App() {

  return (
    <div className="App" >
      <Container fluid>
        <Row className="spacer"></Row>
        <Row>
          <Col>
            <Image src="img/216.jpg" className='image img-fluid' fluid rounded 
            srcSet='img/216.jpg' 
            sizes='(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px'/>
          </Col>
          <Col>
            <h2 className="center">Manuel Chouza is an Argentinian former Tennis player & IT Engineer living and Working in Munich.</h2>
          </Col>
        </Row>
        {/* <Row className="spacer"></Row> */}
        <Row>
          <Col xs={6}>
            <h3 className='about'>About</h3>
          </Col>
          <Col xs={6}>
            <h3 className='custom-h3'>I began my tennis training at the age of 8, during the peak of tennis popularity in Argentina. Additionally, I was introduced to Padel at the same age. Throughout my academic years, I actively participated in (semi-professional) competitive tennis tournaments as a junior, adolescent, and adult. I also collaborated in tennis sparring sessions for players involved in challenges tournaments which is how profesional ATP players get shaped.</h3>

            <h3 className='custom-h3'>At the age of 14, I ventured into competitive Padel. Over the years, I have coached tennis across various skill levels in New Zealand, and I am currently coaching Padel here in Germany. Whether you're looking to refine your technique or enhance your strategic approach, I am here to assist you in reaching your goals.</h3>
          </Col>
        </Row>
        <Row className="spacer"></Row>
        <Row>
          <Col xs={6}>
            <h3 className='about'>Contact</h3>
          </Col>
          <Col xs={6}>
            <h3 className='custom-h3'>Feel fre to ask me any question or consultation you might have at: 017674676326</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
