import './App.scss';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Card from './components/card/card';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Card/>
    </div>
  );
}

export default App;