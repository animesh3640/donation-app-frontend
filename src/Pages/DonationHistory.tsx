import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"
import Accordion from '../components/accordion/Accordion';
import axios from "axios";
const DonationHistory = () => {
    const navigate = useNavigate()
    const [donationData,setDonationData] = useState([]);
    useEffect(()=>{
      axios.get("https://donation-app-animesh-karne.onrender.com/donation")
      .then((response)=>{setDonationData(response.data.data);})
      .catch((err)=>{console.log(err)})
    },[])

  return (
    <div className="wrapper">
      <h1>Your Donation History</h1>
      { donationData.length>0 &&
        <Accordion donations={donationData} />
      }
      <button className='makedonation-button' onClick={()=>{navigate('/makedonation')}}>Make New Donation</button>
    </div>
  );
};

export default DonationHistory;
