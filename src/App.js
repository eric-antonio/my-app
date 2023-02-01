import logo from './logo.svg';
import './App.css';
import './components/Main'
import'./components/Navbar'
import NavBar from './components/Navbar';
import Main from './components/Main';
function App() {
  return (

    <div className="App">
      {/* Adiconar os componentes que estaram na pasta aqui! */}
      <NavBar/>
      <Main/>
    </div>
    
  );
}

export default App;
