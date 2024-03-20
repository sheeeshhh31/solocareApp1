import React, { useState, useRef } from "react";
import { useMaskito } from '@maskito/react';
import { chevronBackOutline } from 'ionicons/icons';
import './main.css';

const Verification = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const phoneMask = useMaskito({
        options: {
            mask: [/\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
        },
    });
    const phoneInputRef = useRef<HTMLInputElement>(null);

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
        if (phoneInputRef.current) {
            phoneMask(phoneInputRef.current);
        }
    };

    return (
        <div>
            <div className="toolbar">
                <button onClick={() => window.history.back()} className="back-button">
                     Back
                </button>
            </div>
            <div className="content">
                <h1>Verification</h1>
                <div className="box-box">
                    <div className="text-text">
                        <p>
                            We will send you a One Time Password (OTP) on your phone number for verification.
                        </p>
                    </div>
                </div>
                <div className="input-wrapper">
                    <input
                        className="contact-number"
                        value={phoneNumber}
                        type="tel"
                        onChange={handlePhoneNumberChange}
                        ref={phoneInputRef}
                        placeholder="Enter your phone number"
                    />
                    <div className="countryCode">+63</div>
                </div>
                <div className="button-wrapper">
                    <button className="getotp-button" onClick={() => {window.location.href = '/register'}}>
                        Get OTP
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Verification;
