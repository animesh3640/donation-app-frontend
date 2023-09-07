import React, { useState } from 'react';
import './styles.css';

interface Donation {
    date: string;
    amount: number;
    numberOfDonations: number;
}

interface AccordionProps {
    donations: Donation[];
}

const Accordion: React.FC<AccordionProps> = ({ donations }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    let numberOfDonationgFlag = false;
    if(donations[donations.length-1].numberOfDonations>=2){
        numberOfDonationgFlag=true;
    }
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion ${isOpen ? 'open' : ''}`}>
            <button className="accordion-button" onClick={toggleAccordion}>
                Donation History
            </button>
            <h3>Number Of Donations : {donations.length}</h3>
            {numberOfDonationgFlag
            ? <h3>Yehhh Special Thanks for your donations</h3> 
            : <h3>Thank you for donating <a href="/makedonation">You want to donate more ?</a> </h3>}
            {isOpen && (
                <div className="accordion-content">
                    <ul>
                        {donations.map((donation, index) => (
                            <li key={index}>
                                <strong>Date:</strong> {donation.date}, <strong>Amount:</strong> ${donation.amount.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Accordion;
