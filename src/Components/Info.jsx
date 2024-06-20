import Personal from "./Forms/Personal";
import Education from "./Forms/Education";
import Experience from "./Forms/Experience";
import Example from "./Forms/Example";

function Info({ personalInfo, setPersonalInfo, onInputChange, schools, setSchools, companies, setCompanies }) {
    return (
        <div className="informationFill">
            <Example setPersonalInfo={setPersonalInfo} setSchools={setSchools} setCompanies={setCompanies} />
            <Personal personalInfoData={personalInfo} onInputChange={onInputChange} />
            <Education schools={schools} setSchools={setSchools} />
            <Experience companies={companies} setCompanies={setCompanies} />
        </div>
    );
}

export default Info;