import React, { useState, useRef, ChangeEvent } from "react";
import './main.css';
import { ChevronBackOutline, AlertCircleOutline } from 'react-ionicons';
import { useMaskito } from '@maskito/react';

const Register = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [showPopover, setShowPopover] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [age, setAge] = useState<number | undefined>(undefined);

    const phoneMask = useMaskito({
        options: {
            mask: [/\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
        },
    });

    const datepickerRef = useRef<HTMLIonPopoverElement>(null);

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedDate = new Date(event.target.value);
        setSelectedDate(selectedDate);
        calculateAge(selectedDate);
    };

    const calculateAge = (birthdate: Date) => {
        const currentDate = new Date();
        const ageDiff = currentDate.getFullYear() - birthdate.getFullYear();
        setAge(ageDiff);
    };

    const openPopover = () => {
        setShowPopover(true);
    };

    const closePopover = () => {
        setShowPopover(false);
    };

    const formattedDate = selectedDate ? selectedDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : '';

    return (
        <div>
        <div>
            <button onClick={() => {window.history.back()}}>Back</button>
        </div>
        <div className="scroll-content">
            <h1>Register</h1>
            <div className="box-box1">
                <div>
                    <AlertCircleOutline color="#00000" height="32px" width="32px" />
                </div>
                <div>
                    <span>
                        Fields with <span>*</span> are required.
                    </span>
                </div>
            </div>
            <p className="personal-info">Personal Information</p>
            <div className="field-group">
                <div>
                    <div className="surname-text">Surname <span>*</span></div>
                    <div>
                        <input type="text" placeholder="Surname" className="surname-form" />
                    </div>
                </div>
                <div>
                    <div className="name-text">Given Name <span>*</span></div>
                    <div>
                        <input type="text" placeholder="Given Name" className="name-form" />
                    </div>
                </div>
                <div>
                    <div className="suffix-text">Suffix <span>*</span></div>
                    <div>
                        <select className="suffix-form">
                            <option value="option1">N/A</option>
                            <option value="option2">II</option>
                            <option value="option3">III</option>
                            <option value="option4">JR</option>
                            <option value="option5">SR</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div className="middle-text">Middle Name <span>*</span></div>
                    <div>
                        <input type="text" placeholder="Middle Name" className="middle-form" />
                    </div>
                </div>
                <div>
                    <input type="text" placeholder="Age" className="age-form" value={age !== undefined ? age.toString() : ''} readOnly />
                    <input type="text" placeholder="Date of Birth" className="birthday-form" value={formattedDate} onClick={openPopover} readOnly />
                </div>
                <div>
                    <div className="pob-text">Place of Birth <span>*</span></div>
                    <div>
                        <input type="text" placeholder="Place of Birth" className="pob-form" />
                    </div>
                </div>
                <div>
                    <div className="sex-text">Sex <span>*</span></div>
                    <div>
                        <label>
                            <input type="radio" name="gender" value="male" /> Male <br></br>
                        </label>
                        <label>
                            <input type="radio" name="gender" value="female" /> Female
                        </label>
                    </div>
                </div>
            </div>
            <div>
            <button className="next-button" onClick={() => {window.location.href = '/nextRegister'}}>Next</button>
            </div>
        </div>
    </div>
    
    );
}

export default Register;

