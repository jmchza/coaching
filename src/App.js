import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';

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
          <Col xs={8}>
            <h2 className="center">Manuel Chouza is an Argentinian former Tennis player & IT Engineer living and Working in Munich.</h2>
          </Col>
        </Row>
        {/* <Row className="spacer"></Row> */}
        <Row>
          <Col>
            <h3 className='about'>About</h3>
          </Col>
          <Col xs={8}>
            <h3 className='custom-h3'>I began my tennis training at the age of 8, during the peak of tennis popularity in Argentina. Additionally, I was introduced to Padel at the same age. Throughout my academic years, I actively participated in (semi-professional) competitive tennis tournaments as a junior, adolescent, and adult. I also collaborated in tennis sparring sessions for players involved in challenges tournaments which is how profesional ATP players get shaped.</h3>

            <h3 className='custom-h3'>At the age of 14, I ventured into competitive Padel. Over the years, I have coached tennis across various skill levels in New Zealand, and I am currently coaching Padel here in Germany. Whether you're looking to refine your technique or enhance your strategic approach, I am here to assist you in reaching your goals.</h3>
          </Col>
        </Row>
        <Row className="spacer"></Row>
        <Row>
          <Col>
            <h3 className='about'>Contact</h3>
          </Col>
          <Col xs={8}>
            <h3 className='custom-h3'>Feel fre to ask me any question or consultation you might have at: 017674676326, 
            <br/>but before doing so please do yourself a favour, do not ignore the FAQ section down below that might answer all your questions beforehand. 
            <br/>Thank you &#128591; </h3>
          </Col>
        </Row>
        <Row className="spacer"></Row>
        <Row>
          <Col xs={4}>
            <h3 className='about'>FAQ</h3>
          </Col>
        </Row>
          <Accordion defaultActiveKey="0" className='accordion-body-alignment'>
            <Accordion.Item eventKey="0">
              <Accordion.Header><b>What shoes to wear</b></Accordion.Header>
              <Accordion.Body>Any Tennis or Padel shoes will be ok.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><b>What shoes not to wear</b></Accordion.Header>
              <Accordion.Body>Any trekking or hiking shoes will not be ok :) </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header><b>How to book my time</b></Accordion.Header>
              <Accordion.Body>You can contact me via whatsApp or text message.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header><b>What to mention in your first message or introduction to me</b></Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Whether you have never plaied Padel before</li>
                  <li>What time of the day is your preference, [morning, afternoon or evenings(after 5pm)]</li>
                  <li>Preference of location of the courts: <a href='https://maps.app.goo.gl/hvPj1EbxmHwUwvrC6'>Scheck</a>, <a href='https://maps.app.goo.gl/ZY98xuKTXVJa8p7y6'>Starnberg</a>, <a href='https://maps.app.goo.gl/5YWM6bfQ4ktGTDFfA'>Padel City</a></li>
                  <li>Whether you have a friend or partner to whom you will be taken lessons with</li>
                  <li>Whether you want to take lessons by yourself only. See pricing <a href="https://jmchza.github.io/coaching/img/Tarif%20Trainerstunde%20MC.pdf">here</a></li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header><b>Do I need to pay the cost of the court?</b></Accordion.Header>
              <Accordion.Body>
                Short answer is yes. The cost of the court is responibility of the client, while I can facilitate the booking if it is easier for you, 
                at the end of the class the total cost will be the sum of the cost of the class plus the booking costs.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header><b>Facilities</b></Accordion.Header>
              <Accordion.Body>Starnberg club is the only club that partitions the time in slots of 45 min, 
              therefore you can get some benefits by paying smaller slots to improve very specific feature per slot.<br/>
              During summer, we can relay on outdoor facilities, while in winter we need indoor facilities instead.<br/>
              <a href='https://maps.app.goo.gl/hvPj1EbxmHwUwvrC6'>Scheck</a>, <a href='https://maps.app.goo.gl/ZY98xuKTXVJa8p7y6'>Starnberg</a>, <a href='https://maps.app.goo.gl/5YWM6bfQ4ktGTDFfA'>Padel City</a>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header><b>Do I need to buy a racket before I take my 1st lesson?</b></Accordion.Header>
              <Accordion.Body>No you don't, you can borrow one from me and I can always advise you what racket to buy afterwards.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header><b>Can I take lessons with a friend or my partner?</b></Accordion.Header>
              <Accordion.Body>
                Naturelich, Yes you can, and there are some discounts on the cost per person if you take lessons with a partner.
                <br/>See pdf document for pricing and discounts <a href="https://jmchza.github.io/coaching/img/Tarif%20Trainerstunde%20MC.pdf">here</a>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header><b>If you are in doubt whether to take your first lesson with a friend or not? You can read this</b></Accordion.Header>
              <Accordion.Body>
                <br/>My recommendation is to take the first lesson always by yourself if you can.
                <br/>Why? for various factors or reasons: 
                <ul>
                  <li>Individual lessons, allow me to get to know you better sooner, that means I can explore and discover your strengths, weakneses and needs sooner rather than later.</li>
                  <li>By doing so, I get to know you better to personalise the classes to your real needs, thus you are in a way taking a shortcut to your progress.</li>
                  <li>If you want to take Padel more serious, this is the best way to understand the game as whole, because not only do I work with your game but I also give you the game stategy and understanding for you to actually join the dots sooner as if you have play the game for many years.</li>
                </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header><b>10 benefits of playing padel/tennis</b></Accordion.Header>
              <Accordion.Body>
              <b>1. It is suitable for all ages</b><br/>
No matter how old you are, padel can be played at any age because it adapts very well to the rhythms of its players.

You determine the level and intensity of the game and you will have no problem finding people at the same level as you to share the pitch with.
<br/><br/>
<b>2. Helps relieve stress</b><br/>
If you are looking for a sport that helps you take your mind off the worries of everyday life and relieve stress, padel tennis can be an excellent answer. It is a game that requires concentration and focus on the movements of the ball, so during the match you will not have time to think about anything else. In addition, the structure of the padel court and the game within four walls increases the feeling of being in a protected area where the only thing that matters is the game. A real cure-all for the mind!
<br/><br/>
<b>3. Improve coordination and reflexes</b><br/>
Similar to tennis, padel is also a sport in which good coordination and quick reflexes are required. Don’t worry if these skills aren’t (yet) your forte: match after match you’ll notice an exciting improvement in your coordination of movements and reflexes.
<br/><br/>
<b>4. Weather is not an obstacle</b><br/>
Padel tennis is a sport that can be played both indoors and outdoors. For this reason, time will not be an obstacle to your playing practice. You can enjoy the padel in the open air in spring and summer; when the days get cold, it rains or snows, on the other hand, the indoor fields will come to your rescue. There are no excuses!
<br/><br/>
<b>5. Improve muscle tone</b><br/>
One of the great health benefits you will get from padel tennis is muscle toning, especially in the legs and buttocks. With constant practice, you will also notice benefits for the arms, abdomen and back. Padel is the perfect definition of a complete sport to stay in shape!
<br/><br/>
<b>6. Strengthens cardiovascular activity</b><br/>
During a 45-minute padel match you will find yourself running from one side of your half to the other. Running strengthens the cardiovascular system by improving your heart rate and peripheral system , but also your ability to endurance to exertion. By practicing padel tennis consistently you will realize that the effort of the early days will leave room for greater physical and respiratory resistance.
<br/><br/>
<b>7. Helps you focus on your goals</b><br/>
Practicing paddle tennis is an excellent tool for mental discipline and focus on goals. Are you aiming to improve your service? Do you want to be able to play more games per week? Or do you want to train for a tournament? You will be the one to set your goals and goals to be achieved in the short, medium and long term. Setting concrete and achievable goals will help you find motivation, it will require commitment, focus and coordination with your teammate. These are benefits that will eventually have an impact on your daily life off the pitch.
<br/><br/>
<b>8. Team play</b><br/>
Padel is first and foremost a team sport. This means that the game’s actions will also impact the people he plays with. You will learn when to make your move or when to let your playing partner act; together you will act as a team that takes responsibility for its actions and results. All values ​​that will also prove very useful in other aspects of your daily life.
<br/><br/>
<b>9. It’s fun</b><br/>
Like many team sports, padel tennis is really fun. Regardless of your level, padel is a sport that unloads, which makes you laugh and enjoy the game and good company. Isn’t that a cure-all for stemming stress and living your worries in a healthier way?
<br/><br/>
<b>10. Improve sociability</b><br/>
Given its huge popularity, you will have no problem finding people to share your passion for padel tennis with. Try playing with people from your family, friends and work circles – you may discover interesting facets of people you’ve only interacted with in other areas so far.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10">
              <Accordion.Header><b>Interesting Articles to read about Tennis and Padel as Sport activities</b></Accordion.Header>
              <Accordion.Body>
                * <a href='https://www.minterdial.com/2024/03/what-does-playing-padel-teach-us-about-how-to-be-better-at-work/'>What does playing padel teach us about how to be better at work</a><br/>
                * <a href='https://experiencelife.lifetime.life/article/7-life-lessons-from-tennis/'>7 life lessons from tennis </a><br/>
                * <a href='https://www.forbes.com/sites/francesbridges/2017/07/14/the-6-best-career-lessons-we-can-learn-from-tennis/'>The 6 Best Career Lessons We can Learn From Tennis</a>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
      </Container>
    </div>
  );
}

export default App;
