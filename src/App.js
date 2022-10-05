import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import GlobalStyles from './styles/global';
import MovieCardsContainer from './components/movie-cards-container';

function App() {
  return (
    <div className="App">
      <Home />
      <MovieCardsContainer />
      <GlobalStyles />
    </div>
  );
}

export default App;
