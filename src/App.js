
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Booklists from './components/Booklists';
import Bookdetails from './components/Bookdetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favorite from './components/Favorite';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
     
     <Routes>

      <Route  path="/" element={<Login/>}/>
      </Routes>
      <Navbar />
      <Routes>
      <Route  path="/home" element={<Booklists/>}/>
        <Route path="/books/:id" element={<Bookdetails/>}/>
        <Route path="/favorites" element={<Favorite/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
