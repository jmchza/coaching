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
        <Row className="spacer"></Row>
        <Row>
          <Col xs={6}>
            <h3 className='about'>FAQ</h3>
          </Col>
          <Col xs={6}>
            <h3 className='custom-h3'>
              Starnberg club is the only club that partitions the time in slots of 45 min, 
              therefore you can get some benefits by paying smaller slots to improve very specific feature per slot.<br/>
              Alternatively, we ca always use other facilities as the weather and seasons of the year progress, 
              for an instance  an indoor facility might well be required during winter.<br/>
              <br/>
              <b>What shoes to wear:</b> Any Tennis or Padel shoes will be ok.<br/>
              <b>What shoes not to wear:</b> Any trekking or hiking shoes :) 
              <br/>
              <b>How to book my time:</b> You can contact me via whatsApp or text message.
              <br/>
              <b>What to mention in your first message or introduction to me: </b><br/>
              * Whether you have never plaied Padel before<br/>
              * What time of the day is your preference, [morning, afternoon or evenings(after 5pm)]<br/>
              * Preference of location of the courts: <a href='https://maps.app.goo.gl/hvPj1EbxmHwUwvrC6'>Scheck</a>, <a href='https://maps.app.goo.gl/ZY98xuKTXVJa8p7y6'>Starnberg</a>, <a href='https://maps.app.goo.gl/5YWM6bfQ4ktGTDFfA'>Padel City</a><br/>
              * Whether you have a friend or partner to whom you will be taken lessons with<br/>
              * Whether you want to take lessons by yourself only.
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
