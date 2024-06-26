import mail from "../Assets/mail.svg";
import phone from "../Assets/phone.svg";
import location from "../Assets/location.svg";
import "../Styles/ShowCV.css";

function ShowCV({ personalInfo, schools, companies }) {
    return (
        <div className="card">
            <div className="showPersonalInfo">
                <div className="applicantName">{personalInfo.fullName}</div>
                <div className="restInfo">
                    <div className="infoBox">
                        {personalInfo.email && <img src={mail} alt="Email Icon" />}
                        <div className="applicantEmail">{personalInfo.email}</div>
                    </div>
                    <div className="infoBox">
                        {personalInfo.phone && <img src={phone} alt="Phone Icon" />}
                        <div className="applicantPhone">{personalInfo.phone}</div>
                    </div>
                    <div className="infoBox">
                        {personalInfo.address && <img src={location} alt="Location Icon" />}
                        <div className="applicantAddress">{personalInfo.address}</div>
                    </div>
                </div>
            </div>
            <div className="showEducation">
                {schools.length > 0 && (
                    <div className="educationList">
                        <div className="title">Education</div>
                        {schools.map((school, index) => {
                            return (
                                <div key={index} className="school">
                                    <div className="timePeriod">
                                        {school.startDate} - {school.endDate}
                                    </div>
                                    <div className="nameDegree">
                                        <div className="schoolName">{school.name}</div>
                                        <div className="degree">{school.degree}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            <div className="showExperience">
                {companies.length > 0 && (
                    <div className="experienceList">
                        <div className="title">Experience</div>
                        {companies.map((company, index) => {
                            return (
                                <div key={index} className="company">
                                    <div className="timePeriod">
                                        {company.startDate} - {company.endDate}
                                    </div>
                                    <div className="namePosition">
                                        <div className="companyName">{company.name}</div>
                                        <div className="positionTitle">{company.positionTitle}</div>
                                        <div className="description">{company.description}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ShowCV;