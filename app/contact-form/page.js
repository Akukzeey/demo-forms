import React from 'react';

const ContactForm = () => {
    return (
        <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
