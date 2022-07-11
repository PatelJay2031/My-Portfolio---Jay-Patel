import "./App.css";

import { Header } from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from './Homepage';
import {ContactUs} from './ContactUs';
import ProjectContainer from 
'./ProjectContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/project" element={<ProjectContainer />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>        
      </BrowserRouter>
    </div>
  );
}

export default App;