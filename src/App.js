import './App.css'
import { useEffect, useState } from 'react';
import NavigationDots from './components/NavigationDots';
import { Header, Brands, Overview, Amenities, Features, Units, Showroom, Location, Agent, Contact, Footer } from './containers'

function App() {
  const [activeDot, setActiveDot] = useState('home')
  useEffect(() =>{
    console.log(activeDot)
  },[activeDot])
  return (
    <div className="App">
      <NavigationDots activeDot={activeDot} setActiveDot={setActiveDot}  />
      <Header id='home' setActiveDot={setActiveDot}/>
      <Brands />
      <Overview id='overview' setActiveDot={setActiveDot} />
      <Amenities id='amenities' setActiveDot={setActiveDot} />
      <Features id='features' setActiveDot={setActiveDot} />
      <Units id='units' setActiveDot={setActiveDot} />
      <Showroom id='tour' setActiveDot={setActiveDot} />
      <Location id='location' setActiveDot={setActiveDot} />
      <Agent id='agent' setActiveDot={setActiveDot} />
      <Contact id='contact' setActiveDot={setActiveDot} />
      <Footer />
    </div>
  );
}

export default App;
