import React, { useState } from "react";
import "./AgeCalculator.css";

const AgeCalculator = () => {

    const [dob, setDob] = useState("");
    const [age, setAge] = useState(0);

    const calculateAge = () => {
        const today = new Date()
        const birthdate = new Date(dob);


        let age = today.getFullYear() - birthdate.getFullYear();
        let monthDiff = today.getMonth() - birthdate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        setAge(age);

    }


    const resetAge = () => {
        setDob("");
        setAge(0);
    }


  return (
    <div className="container">
      <h2 className="heading container_title">Age Calculator</h2>
      <p className="para container_title">
        This can determine the Age of a person. The calculated age will be
        displayed in Years.
      </p>

      <div className="mid_container">
        <div className="left">
          <h4>Date Of Birth</h4>
          <input className="date" type="date" value={dob} onChange={e => setDob(e.target.value)} />
          <div className="button_div">
            <button className="button-65" onClick={calculateAge}>Calculate Age</button>
            <button className="button-65" onClick={resetAge}>Reset</button>
          </div>
        </div>

        <div className="right">
          <div className="mid_container_para">
            <h1>Your Age is</h1>
          </div>

                  <h1 className="age_heading">{ age > 0 ? `${age}` : "" }</h1>
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
