import { useState } from "react";
import downArrow from "../../Assets/down.svg";
import upArrow from "../../Assets/up.svg";
import user from "../../Assets/user.svg";

function Personal({ personalInfoData, onInputChange }) {
    const [isFormExpanded, setIsFormExpanded] = useState(true); // State for form display

    const toggleForm = () => {
        setIsFormExpanded(!isFormExpanded);
    };
    return (
        <div className="personalInfo">
            <div className="infoHeader">
                <img src={user} alt="Person" />
                <h2 id="segmentTitle">Personal Information</h2>
                <button className="dropdownToggle" type="button" id="formToggleBtn" onClick={toggleForm}>
                    {isFormExpanded ? <img src={upArrow} alt="Up Arrow" /> : <img src={downArrow} alt="Down Arrow" />}
                </button>
            </div>

            <form id="personalInfoForm" className={isFormExpanded ? "expanded" : ""}>
                <div className="inputGroup">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={personalInfoData.fullName}
                        onChange={onInputChange}
                        required
                    ></input>
                </div>
                <div className="inputGroup">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" value={personalInfoData.email} onChange={onInputChange} required></input>
                </div>
                <div className="inputGroup">
                    <label htmlFor="phone">Phone *</label>
                    <input type="tel" id="phone" name="phone" value={personalInfoData.phone} onChange={onInputChange} required></input>
                </div>
                <div className="inputGroup">
                    <label htmlFor="address">Address *</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={personalInfoData.address}
                        onChange={onInputChange}
                        required
                    ></input>
                </div>
            </form>
        </div>
    );
}

export default Personal;