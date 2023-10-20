import { Container } from 'react-bootstrap';
import './App.css';
import Header from './componenets/header/header';
import Navigation from './componenets/navigation/navigation';
import AboutUs from './componenets/aboutUs/aboutUs';
import Footer from './componenets/footer/footer';
import Testimonial from './componenets/Testimonial/Testimonial';
import ContactUs from './componenets/contactUs/contactUs';
import Services from './componenets/Services/Services';


function App() {
  return (
   <>
    
     {/* <h1>dfgdshd fsdfghg dsjhdsh fshf sghd sgfds fhsdhf sdhfsh fsgf dshds</h1>
  */}
     <Navigation /> 
    <Container fluid>
     <Header />
     <AboutUs />
     <Services />
     <Testimonial />
     <ContactUs />
     <Footer /> 
    </Container>  
   </>
  );
}

export default App;
