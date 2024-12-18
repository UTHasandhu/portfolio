import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ActionCard from './Components/ActionCard';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p>
        <div class="container space-around">
            <div class="col-4">
              <ActionCard />
            </div>
            <div class="col-4">
            </div>
        </div>
          So no logo
        </p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
