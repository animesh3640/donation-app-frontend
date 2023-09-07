import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Navbar from './components/Navbar';
import MakeDonation from './Pages/MakeDonation';
import DonationHistory from './Pages/DonationHistory';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/makedonation' element={<MakeDonation/>}/>
          <Route path='/donationhistory' element={<DonationHistory/>}/>
        </Routes>
    </div>
  );
}

export default App;
