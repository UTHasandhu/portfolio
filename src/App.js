import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ActionCard from './Components/ActionCard';

import cardData from './tempData/profileData'

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <div class="container-fluid">
        <div className="row">
        <div class="col-1"> </div>
            <div class="col-3">
              <ActionCard {...cardData[0]}/>
            </div>
            <div class="col-3"> </div>
            <div class="col-3">
              <ActionCard {...cardData[1]}/>
            </div>
            <div class="col-1"> </div>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
