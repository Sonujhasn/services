import {BrowserRouter as Router ,Route,Routes} from "react-router-dom"
import  Header  from "./components/Header";
import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/fouter.scss"
import './styles/contact.scss'
import Home from "./components/Home";
import Fouter from './components/Fouter';
import Contact from './components/Contact';
import Service from "./components/Service";
import './styles/mediaquery.scss'
function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/service" element={<Service/>}/>
        </Routes>
        <Fouter/>
      </Router>
  );
}

export default App;
