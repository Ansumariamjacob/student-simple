import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addstudent from './component/Addstudent';
import Viewdata from './component/Viewdata';

function App() {
  return (
    <div >
      <Addstudent/>
      <Viewdata/>
          </div>
  );
}

export default App;
