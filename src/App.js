import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addstudent from './component/Addstudent';
import Viewdata from './component/Viewdata';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './component/Search';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Addstudent/>}/>
        <Route path="/view" exact element={<Viewdata/>}/>
        <Route path="/search" exact element={<Search/>}/>
      </Routes>
      </BrowserRouter>
          </div>
  );
}

export default App;
