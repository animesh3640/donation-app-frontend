import React, { useEffect, useState } from 'react';
import Accordion from '../components/accordion/Accordion';
import axios from 'axios';

const Homepage = () => {
  // Sample donation history data
  const [donationData, setDonationData] = useState([]);
  const [greetMessage, setGrretMessage] = useState('');
  
useEffect(() => {
  axios.get("https://donation-app-animesh-karne.onrender.com/donation")
    .then((response) => { setDonationData(response.data.data); })
    .catch((err) => { console.log(err) })

  axios.get("https://donation-app-animesh-karne.onrender.com/thankyou")
    .then((response) => { setGrretMessage(response.data.message) })

}, [])
return (
  <div className="wrapper">
    <h1>Welcome to Our Homepage</h1>
    <div className='message'>
      {greetMessage != '' && <h2>{greetMessage}</h2>}
    </div>
    {donationData.length > 0 &&
      <Accordion donations={donationData} />
    }

  </div>
);
};

export default Homepage;
