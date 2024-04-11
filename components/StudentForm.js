import {useState} from "react";

const StudentForm = ({formData,setFormData,onNextStep}) => {
    const [formErrors, setFormErrors] = useState({
        formData: {
            firstName: false,
            middleName: false,
            lastName: false,
            emailAddress: false,
            age: false,
        },
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            studentInfo: {
                ...prevData.studentInfo,
                [name]: type === 'checkbox' ? checked : value,
            }
        }));

        setFormErrors((prevErrors) => ({
            ...prevErrors,
            formData: {
                ...prevErrors.formData,
                [name]: false,
            },
        }));
    };

    const validateForm = () => {
        const nonRequiredFields = ['aptUnit'];
        const errors = {};
        let isValid = true;
        for (const [key, value] of Object.entries(formData)) {
            if (!nonRequiredFields.includes(key) && value.trim() === '') {
                errors[key] = true;
                isValid = false;
            } else {
                errors[key] = false;
            }
        }
        setFormErrors({ formData: errors });
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
            <h1 style={{textAlign:'center',fontWeight:'bold',margin:'30px 0',fontSize:'2rem'}}>Student Information</h1>
            <div className='administration-input-div'>
                <label className='administraion-form-label administration-form-flex'>
                    <div>
                        First Name <span className='administration-required'>*</span>
                    </div>
                    <input
                        className={`form-control ${formErrors.formData.firstName ? 'is-invalid' : ''}`}
                        placeholder='First Name'
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required/>
                    {formErrors.formData.firstName && <div className="invalid-feedback">This field is required.</div>}
                </label>
                <label className='administraion-form-label administration-form-flex'>
                    <div className='mb-0'>
                        Middle Name <span className='administration-required'></span>
                    </div>
                    <input
                        className={`form-control ${formErrors.formData.middleName ? 'is-invalid' : ''}`}
                        placeholder='Middle Name'
                        type="text" name="middleName"
                        value={formData.middleName}
                        onChange={handleChange}/>
                    {formErrors.formData.middleName && <div className="invalid-feedback">This field is required.</div>}
                </label>
                <label className='administraion-form-label administration-form-flex'>
                    <div>
                        Last Name <span className='administration-required'>*</span>
                    </div>
                    <input
                        className={`form-control ${formErrors.formData.lastName ? 'is-invalid' : ''}`}
                        placeholder='Last Name'
                        type="text" name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required />
                    {formErrors.formData.lastName && <div className="invalid-feedback">This field is required.</div>}
                </label>
            </div>
            <div className='administration-input-div'>
                <label className='administraion-form-label administration-form-flex'>
                    <div>
                        Email Address <span className='administration-required'>*</span>
                    </div>
                    <input
                        className={`form-control ${formErrors.formData.emailAddress ? 'is-invalid' : ''}`}
                        placeholder='Email Address'
                        type="email"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        required />
                    {formErrors.formData.emailAddress && <div className="invalid-feedback">This field is required.</div>}
                </label>
                <label className='administraion-form-label administration-form-working'>
                    <div>
                        Age <span className='administration-required'>*</span>
                    </div>
                    <input
                        className={`form-control ${formErrors.formData.age ? 'is-invalid' : ''}`}
                        placeholder='Age'
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required/>
                    {formErrors.formData.age && <div className="invalid-feedback">This field is required.</div>}
                </label>
            </div>
            <div className='administration-form-btn-div'>
                <button type="submit" className="btn btn-success" onClick={handleSubmit}>Next</button>
            </div>
        </div>
    );
};

export default StudentForm;