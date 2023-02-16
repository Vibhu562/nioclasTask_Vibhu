import logo from './logo.svg';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import bootstrap from  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import Math1 from './screens/Math1';
import Math2 from './screens/Math2';
import Math3 from './screens/Math3';
import Math4 from './screens/Math4';
import Math5 from './screens/Math5';
function App() {
  return (
    <div className="App">
    <BrowserRouter> 
      <Routes>
      <Route exact path= '/'  element ={<Math1/>}  />
      <Route exact path= '/math2'  element ={<Math2/>}  />
      <Route exact path= '/math3'  element ={<Math3/>}  />
      <Route exact path= '/math4'  element ={<Math4/>}  />
      <Route exact path= '/math5'  element ={<Math5/>}  />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
