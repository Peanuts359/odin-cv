import { useState } from "react";
import Header from "./Header";
import Info from "./Info";
import ShowCV from "./ShowCV";
import Footer from "./Footer";
import "../Styles/App.css";

function App() {
    const [personalInfo, setPersonalInfo] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
    });

    const [schools, setSchools] = useState([]);

    const [companies, setCompanies] = useState([]);

    const handlePersonalInfoFormChange = (event) => {
        const { name, value } = event.target;

        setPersonalInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="mainContainer">
            <div className="header">
                <Header />
            </div>

            <div className="content">
                <Info
                    personalInfo={personalInfo}
                    setPersonalInfo={setPersonalInfo}
                    onInputChange={handlePersonalInfoFormChange}
                    schools={schools}
                    setSchools={setSchools}
                    companies={companies}
                    setCompanies={setCompanies}
                />
                <ShowCV personalInfo={personalInfo} schools={schools} companies={companies} />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default App;
