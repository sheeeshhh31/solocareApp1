import React from "react";
import './main.css'

const NextRegister = () => {
    return (
        <div>
            <div>
            <button onClick={() => {window.history.back()}}>Back</button>
            </div>
            <div className="scroll-content">
                <h1>Register</h1>
                <div className="box-box1">
                    <div className="alert-icon">⚠️</div>
                    <div className="text-text1">
                        Fields with <span className="asterisk">*</span> are required.
                    </div>
                </div>
                <p className="personal-info">Personal Information</p>
                <div>
                    <div className="hea-text">Highest Educational Attainment <span className="asterisk">*</span></div>
                    <select className="hea-form">
                        <option value="hea-option1">N/A</option>
                        <option value="hea-option2">Elementary Undergraduate</option>
                        <option value="hea-option3">Elementary Graduate</option>
                        <option value="hea-option4">High School Undergraduate</option>
                        <option value="hea-option5">High School Graduate</option>
                        <option value="hea-option6">College Undergraduate</option>
                        <option value="hea-option7">College Graduate</option>
                    </select>
                </div>
                <div>
                    <div className="occupation-text">Occupation <span className="asterisk">*</span></div>
                    <input type="text" className="occupation-form" placeholder="Occupation" />
                </div>
                <div>
                    <div className="mi-text">Monthly Income <span className="asterisk">*</span></div>
                    <select className="mi-form">
                        <option value="mi-option1">Below 10,000</option>
                        <option value="mi-option2">10,001-25,000</option>
                        <option value="mi-option3">25,001-50,000</option>
                        <option value="mi-option4">50,000 above</option>
                    </select>
                </div>
                <div>
                    <div className="presadd-text">Present Address <span className="asterisk">*</span></div>
                    <input type="text" className="presadd-form" placeholder="Present Address" />
                </div>
                <div>
                    <div className="soho-text">Status of Home Occupancy <span className="asterisk">*</span></div>
                    <select className="soho-form">
                        <option value="soho-option1">Owned</option>
                        <option value="soho-option2">Rented</option>
                        <option value="soho-option3">Sharer</option>
                        <option value="soho-option4">Caretaker</option>
                    </select>
                </div>
                <div>
                    <div className="fourps-text">4Ps Beneficiary <span className="asterisk">*</span></div>
                    <div>
                        <input type="radio" id="yes" name="fourps" />
                        <label htmlFor="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="fourps" />
                        <label htmlFor="no">No</label>
                    </div>
                </div>
                <div>
                    <div className="philhealth-text">Philhealth <span className="asterisk">*</span></div>
                    <input type="text" className="philhealth-form" placeholder="Philhealth" />
                </div>
                <div>
                    <button className="next2-button" onClick={() => {window.location.href = '/familyCompositionList'}}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default NextRegister;
