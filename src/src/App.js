import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MainComponent } from './component/MainComponent';
import MovieDetail from './component/MovieDetail';
import { NavBar } from './component/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<MainComponent/>}/>
        <Route path='moviedetail/:id' element={<MovieDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
