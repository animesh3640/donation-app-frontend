import React, { useState } from 'react';
import axios from "axios";
function MakeDonation() {
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const [amount, setAmount] = useState('');

  const handleMakeDonation = () => {
    const newDonationObject={
      date:date,
      amount:amount,
      
    }
    axios.post("https://donation-app-animesh-karne.onrender.com/donation",newDonationObject)
    .then((response)=>{alert(response.data.message)})
    .catch((err)=>{console.log(err)});
    // Reset the form after submission
    setDate(new Date().toISOString().substr(0, 10));
    setAmount('');
  };

  return (
    <div className='wrapper'>
      <h1>Make New Donation</h1>
      <form className='makedonation-form'>
        <div>
          <label>Date:</label><br />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Amount:</label><br />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </form>
      <button className='makedonation-button' onClick={handleMakeDonation}>Make Donation</button>
    </div>
  );
}

export default MakeDonation;
