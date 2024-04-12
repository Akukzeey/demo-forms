'use client'
import { useState } from 'react';
import StudentInfo from "@/components/StudentForm";
import ParentInfo from "@/components/ParentForm";

export default function AdministrationForm() {
  const [formData, setFormData] = useState({
    studentInfo: {
      firstName: '',
      middleName: '',
      lastName: '',
      emailAddress: '',
      age: '',
    },
    parentInfo: {
      parent1FullName: '',
      parent1Relationship: '',
      parent1LevelOfEducation: '',
      parent1WorkingStatus: 'working',
    },
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep  = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const combinedFormData = {
      ...formData.studentInfo,
      ...formData.parentInfo,
    };

    const flattenedFormData = {};

    Object.keys(combinedFormData).forEach(key => {
      if (Array.isArray(combinedFormData[key])) {
        flattenedFormData[key] = combinedFormData[key][0];
      } else {
        flattenedFormData[key] = combinedFormData[key];
      }
    });

    const textArea = document.createElement('textarea');
    textArea.style.display = 'none';
    textArea.name = 'formData';
    textArea.value = JSON.stringify(flattenedFormData, null, 2);
    form.appendChild(textArea);

      form.submit();
  };

  return (
      <div id='Administration-form' className='container'>
        <div className='administation-note-container'>
          <p className='administration-form-p-tag'>The following form must be completed before your application will be considered. Please complete each item carefully.</p>
        </div>
        <div className="step-indicator">
          Step {currentStep} of 3
        </div>
        {/*<form name="administration-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleFormSubmit} action="/admission-success" data-netlify-success="/admission-success">*/}
        {/*  <input type="hidden" name="form-name" value="administration-form" />*/}
        {/*  <input type="hidden" name="bot-field" />*/}
        {/*  <div className={currentStep !== 1 ? 'hidden' : ''}>*/}
        {/*    <StudentInfo formData={formData.studentInfo} setFormData={setFormData} onNextStep={handleNextStep} />*/}
        {/*  </div>*/}
        {/*  <div className={currentStep !== 2 ? 'hidden' : ''}>*/}
        {/*    <ParentInfo parentFormData={formData.parentInfo} setFormData={setFormData} onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />*/}
        {/*  </div>*/}
        {/*  {currentStep === 3 && (*/}
        {/*      <div>*/}
        {/*        if you have entered the forms correctly you can move to the next step*/}
        {/*        <button>Submit</button>*/}
        {/*      </div>*/}
        {/*  )}*/}
        {/*</form>*/}
        <form method='POST' name='contact' data-netlify='true'>
          <input type="hidden" name="form-name" value="contact"/>
          <input type="text"/>
          <p>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name'/>
          </p>
          <p>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email'/>
          </p>
          <button type='submit'>
            submit
          </button>
        </form>
      </div>
  );
}
