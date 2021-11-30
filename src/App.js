import './App.css';
import FirstHeader from './components/FirstHeader';
import Fruit from './components/Fruit';
import Heading from './components/Heading';
import Hero from './components/Hero';
import LightBox from './components/LightBox';
import LogosBody from './components/LogosBody';
import Menu from './components/Menu';
import Message from './components/Message';
import NewsBody from './components/NewsBody';
import NewsLetter from './components/NewsLetter';
import Offers from './components/Offers';
import OrganicCard from './components/OrganicCard';
import ProductsBody from './components/ProductsBody';
import SecondHeader from './components/SecondHeader';
import SectionHeader from './components/SectionHeader';
import SellerBody from './components/SellerBody';
import Subscribe from './components/Subscribe';
import TopBody from './components/TopBody';
import Follow from './components/Follow';
import Contact from './components/Contact';
import FooterInfo from './components/FooterInfo';
import {footerData} from './components/data';
import Credit from './components/Credit';
import Payment from './components/Payment';
import Map from './components/Map';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ContactMe from './components/ContactMe';
import ThirdHeader from './components/ThirdHeader';

function App() {
  return (
    <Router>
      <Message/>
      <LightBox/>

      <header>
        <FirstHeader/>
        <SecondHeader />
      </header>

      <ThirdHeader/>
      
      <Switch>

        <Route path="/" exact>
          <section className="home" id="home">
            <Menu/>
            <Hero/>
          </section>

          <section className="offers">
            <Offers icon="far fa-heart" text="Free shopping on orders over 200$"/>
            <Offers icon="fas fa-sync" text="30 - day returns money back"/>
            <Offers icon="fas fa-shield-alt" text="24/7 support"/>
          </section>

          <section className="top" id="top">
            <Heading text="top categories"/>
            <TopBody/>
          </section>

          <section className="organic">
            <OrganicCard text="exclusive brands" image="bg2" tag="organic foods"/>
            <OrganicCard text="new arrivals organic" image="bg3" tag="organic new" right/>
          </section>

          <section className="products">
            <SectionHeader filter/>
            <ProductsBody/>
          </section>

          <section className="oranges">
            <div className="box-container">
              <Fruit image="product-1" text="banana fruit" bg="#f0f04c" bgh="#cfcf2a"/>
              <Fruit image="product-2" text="tomato vegetable" bg="#e74c3c" bgh="#c0392b"/>
              <Fruit image="product-3" text="orange fruit" bg="#e67e22" bgh="#d35400"/>
              <Fruit image="product-5" text="berry fruit" bg="#9b59b6" bgh="#8e44ad"/>
              <Fruit image="product-7" text="apple fruit" bg="#e84118" bgh="#c23616"/>
              <Fruit image="product-9" text="carrot vegetable" bg="#fd9644" bgh="#fa8231"/>
            </div>
          </section>

          <section className="seller" id="seller">
            <Heading text="best seller"/>
            <SellerBody/>
          </section>

          <section className="news">
            <Heading text="greenfarm news"/>
            <NewsBody/>
          </section>

          <section className="logos">
            <Heading text="brand logos"/>
            <LogosBody/>
          </section>

        </Route>

        <Route path="/contact">
          <section className="contact">
            <Map/>
            <ContactMe/>
          </section>
        </Route>

      </Switch>

      <section className="subs">
        <NewsLetter/>
        <Subscribe/>
      </section>

      <section className="footer">

        <div className="footer1">
          <Follow/>
          <Contact/>
        </div>

        <div className="divider"></div>

        <div className="footer2">
          {
            footerData.map(({header, text1, text2, text3, text4}, ind)=>(<FooterInfo key={ind} header={header} text1={text1} text2={text2} text3={text3} text4={text4}/>))
          }
        </div>

        <div className="divider"></div>

        <div className="footer3">
          <Credit/>
          <Payment/>
        </div>

      </section>
    </Router>
  );
}

export default App;
