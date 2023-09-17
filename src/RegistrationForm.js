import React, { useState } from 'react';
import './RegistrationForm.css'; // Import your custom CSS file
import axios from 'axios';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    age: '',
    highestEducation: '',
    instituteName: '',
    major: '', 
    workExperience: '', 
    instituteInCanada: '',
    programInCanada: '',
    countryApplyingFrom: '',
    futureGoals: '',
    englishListening: '',
    englishReading: '',
    englishSpeaking: '',
    englishWriting: '',
    paidFirstYearTuition: '',
    tuitionFee: '',
    didGIC: '',
    gicAmount: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaidChange = (event) => {
    setFormData({ ...formData, paidFirstYearTuition: event.target.value });
  };

  const handleGICChange = (event) => {
    setFormData({ ...formData, didGIC: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      
      await axios.post('http://localhost:3001/submit-form', formData);
      console.log('Form submitted successfully');
  
    } catch (error) {
      console.error('Error submitting form:', error);
      
    }
  };


  return (
    <section className="container">
    <header>Customized SOP Generator</header>
    <form action="#" className="form" onSubmit={handleSubmit}>
    <div class="input-box">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" name="email"
            value={formData.email}
            onChange={handleInputChange }required />
        </div>
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" name="fullName"
            value={formData.fullName}
            onChange={handleInputChange }
            required  />
        </div>
        <div class="column">
          <div class="input-box">
            <label>Age</label>
            <input type="number" placeholder="Age"
            name="age"
            value={formData.age}
            onChange={handleInputChange } required />
          </div>
        </div>
        <div class="input-box address">
          <label>Highest Level of Education</label>
          <div class="column">
            <div class="select-box">
              <select  name="highestEducation"
                value={formData.highestEducation}
                onChange={handleInputChange }
                required>
                <option hidden>Education</option>
                <option>Grade 12</option>
                <option>Diploma</option>
                <option>Bachelors Degree</option>
                <option>Masters Degree</option>
                <option>Phd</option>
              </select>
            </div>
          </div>
          <div class="column">

          </div>
        </div>
        <div className="input-box">
          <label>Institute where you completed your highest level of education</label>
          <input type="text" placeholder="Enter Institute Name"  name="instituteName"
                value={formData.instituteName}
                onChange={handleInputChange }
                required/>
        </div>
        <div className="input-box">
          <label>What did you study</label>
          <input type="text" placeholder="Enter Your Major ?" name="major"
                value={formData.major}
                onChange={handleInputChange }required />
        </div>
        <div className="input-box">
          <label>Do you have any relevant work experience ?</label>
          <br/>
          <p>
            <b>
            Write<span className="colored"> None</span> if no work experience. Provide the following details if yes:
            </b>
          </p>
          <br/>
                <p>  1. Job Title </p>
                <p>  2. Company Name </p>
                <p>  3. Job duties</p>
                <br/>
          <p><b>Sample Answer:</b> I worked as a Sales Manager at Effizient Immigration Inc from Jan 2022 till Feb 2023. In this role, I managed sales operations, reaching out to leads, lead the outreach program, ensured meeting monthly targets.
</p>
          <input type="text" placeholder="Your Experience" name="workExperience"
                value={formData.workExperience}
                onChange={handleInputChange } required />
        </div>
        <div className="input-box">
          <label>What institute did you get admitted to in Canada ?</label>
          <input type="text" placeholder="Enter Institute Name" name="instituteInCanada"
                value={formData.instituteInCanada}
                onChange={handleInputChange }required />
        </div>
        <div className="input-box">
          <label>What is your program of study in Canada ?</label>
          <input type="text" placeholder="Enter Program Name" name="programInCanada"
                value={formData.programInCanada}
                onChange={handleInputChange } required />
        </div>
        <div className="input-box">
          <label>Which country are you applying from ?</label>
          <input type="text" placeholder="Enter Country Name" name="countryApplyingFrom"
                value={formData.countryApplyingFrom}
                onChange={handleInputChange } required />
        </div>
        <div className="input-box">
          <label>What are your future goals ?</label>
          <input type="text" placeholder="Your Goals" name="futureGoals"
                value={formData.futureGoals}
                onChange={handleInputChange } required />
        </div>
        <div className="input-box">
          <label>English Scores - Listening</label>
          <input type="text" placeholder="Enter Your Scorces" name="englishListening"
                value={formData.englishListening}
                onChange={handleInputChange } required />
        </div>
        <div className="input-box">
          <label>English Scores - Reading</label>
          <input type="text" placeholder="Enter Your Scorces"  name="englishReading"
                value={formData.englishReading}
                onChange={handleInputChange } required />
        </div>
        <div className="input-box">
          <label>English Scores - Speaking</label>
          <input type="text" placeholder="Enter Your Scorces"  name="englishSpeaking"
                value={formData.englishSpeaking}
                onChange={handleInputChange } required />
        </div>
        <div className="input-box">
          <label>English Scores - Writing</label>
          <input type="text" placeholder="Enter Your Scorces"  name="englishWriting"
                value={formData.englishWriting}
                onChange={handleInputChange } required />
        </div>
        <div className="input-box">
          <label>Did you pay your first year tuition?</label>
          <div>
            <label>
              <input
                type="radio"
                value="yes"
                checked={formData.paidFirstYearTuition === 'yes'}
                onChange={handlePaidChange}
                
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                checked={formData.paidFirstYearTuition === 'No'}
                onChange={handlePaidChange}
              />
              No
            </label>
          </div>
        </div>
        
        <div className="input-box">
          <label>How much tuition fee did you pay?</label>
          <input type="Number" placeholder="" name="tuitionFee"
                value={formData.tuitionFee}
                onChange={handleInputChange } required />
        </div>

        <div className="input-box">
          <label>Did you do a GIC?</label>
          <div>
            <label>
              <input
                type="radio"
                value="yes"
                checked={ formData.didGIC === 'yes'}
                onChange={handleGICChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="no"
                checked={formData.didGIC === 'no'}
                onChange={handleGICChange}
              />
              No
            </label>
          </div>
        </div>

        <div className="input-box">
          <label>How much did you pay towards GIC?</label>
          <input type="Number" placeholder="" name="gicAmount"
                value={formData.gicAmount}
                onChange={handleInputChange }required />
        </div>
      
        <button type="submit">Submit</button>
        
      </form>
    </section>
  );
}

export default RegistrationForm;
