import { useState } from 'react';

const ParentInfo = ({ onNextStep, onPreviousStep, parentFormData, setFormData }) => {

    const [formErrors, setFormErrors] = useState({
        parentFormData: {
            parent1FullName: false,
            parent1Relationship: false,
            parent1LevelOfEducation: false,
            parent1Info: false,
        },
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            parentInfo: {
                ...prevData.parentInfo,
                [name]: type === 'checkbox' ? checked : value,
            },
        }));

        setFormErrors((prevErrors) => ({
            ...prevErrors,
            parentFormData: {
                ...prevErrors.parentFormData,
                [name]: false,
            },
        }));
    };

    const validateForm = () => {
        const nonRequiredFields = [
            'parent1AptUnit',
            'parent2FullName',
            'parent2Relationship',
            'parent2LevelOfEducation',
            'parent2Info',
            'parent2WorkingStatus',
            'parent2WorkingHours',
            'parent2Address',
            'parent2CellPhone',
            'parent2AptUnit',
            'parent2City',
            'parent2State',
            'parent2ZipCode',
            'parent2EmailAddress',
        ];

        const errors = {};
        let isValid = true;
        for (const [key, value] of Object.entries(parentFormData)) {
            if (!nonRequiredFields.includes(key) && value.trim() === '') {
                errors[key] = true;
                isValid = false;
            } else {
                errors[key] = false;
            }
        }
        setFormErrors({ parentFormData: errors });
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = validateForm();
        if (isFormValid) {
            onNextStep();
        }
    };


    return (
        <div>
            <h1 style={{ textAlign: 'center', fontWeight: 'bold', margin: '30px 0', fontSize: '2rem' }}>Parent Information</h1>
            <div>
                <h2 className='info-header'>Parent/Guardian 1</h2>
                <div className='administration-input-div'>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            Parent/Guardian Name <span className='administration-required'>*</span>
                        </div>
                        <input
                            className={`form-control ${formErrors.parentFormData.parent1FullName ? 'is-invalid' : ''}`}
                            placeholder='Parent/Guardian Name'
                            type="text"
                            name="parent1FullName"
                            value={parentFormData.parent1FullName}
                            onChange={handleChange}
                            required
                        />
                        {formErrors.parentFormData.parent1FullName && <div className="invalid-feedback">This field is required.</div>}
                    </label>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            Relationship <span className='administration-required'>*</span>
                        </div>
                        <input
                            className={`form-control ${formErrors.parentFormData.parent1Relationship ? 'is-invalid' : ''}`}
                            placeholder='Relationship with student'
                            type="text"
                            name="parent1Relationship"
                            value={parentFormData.parent1Relationship}
                            onChange={handleChange}
                            required />
                        {formErrors.parentFormData.parent1Relationship && <div className="invalid-feedback">This field is required.</div>}
                    </label>
                </div>
                <div className='administration-input-div'>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            Parent/Guardian Level of Education <span className='administration-required'>*</span>
                        </div>
                        <input
                            className={`form-control ${formErrors.parentFormData.parent1LevelOfEducation? 'is-invalid' : ''}`}
                            placeholder='Education Level'
                            type="text"
                            name="parent1LevelOfEducation"
                            value={parentFormData.parent1LevelOfEducation}
                            onChange={handleChange}
                            required />
                        {formErrors.parentFormData.parent1LevelOfEducation && <div className="invalid-feedback">This field is required.</div>}
                    </label>
                    <label className='administraion-form-label administration-form-flex'>
                        <div>
                            No of working hours per week <span className='administration-required'>*</span>
                        </div>
                        <input
                            className={`form-control ${formErrors.parentFormData.parent1WorkingHours? 'is-invalid' : ''}`}
                            placeholder='Working Hours'
                            type="text"
                            name="parent1WorkingHours"
                            value={parentFormData.parent1WorkingHours}
                            onChange={handleChange}
                            required />
                        {formErrors.parentFormData.parent1WorkingHours && <div className="invalid-feedback">This field is required.</div>}
                    </label>
                </div>
            </div>
            <div className='administration-form-btn-div'>
                <button type="button" className="btn btn-primary me-2" onClick={onPreviousStep}>Previous</button>
                <button type="submit" className="btn btn-success" onClick={handleSubmit}>Next</button>
            </div>
        </div>
    );
};

export default ParentInfo;