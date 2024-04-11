import StudentInfo from "@/components/StudentForm";
import ParentInfo from "@/components/ParentForm";

export default function AdministrationForm() {
    function handleSubmit(e) {
        e.preventDefault()
    }
    return(
        <form name="contact v3" data-netlify="true" method='post' onSubmit={handleSubmit} data-netlify-honeypot='bot-field' action="/success" data-netlify-success="/success">
            <input type='hidden' name='form-name' value='contact v3'/>
            <div hidden>
                <input name='bot-field'/>
            </div>
            <div className="mb-lg-4 mb-md-3 mb-2">
                <label htmlFor="your-name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="your-name" name='your-name' required/>
            </div>
            <div className='mb-lg-4 mb-md-3 mb-2'>
                <label htmlFor="phone-number" className="form-label">Number</label>
                <input type="tel" className="form-control" id="phone-number" name="phone-number" required/>
            </div>
            <div className='d-flex justify-content-center'>
                <input type="submit" className='btn sign-up-btn' value='Sign Up'/>
            </div>
        </form>
    )
}