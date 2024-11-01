import React from 'react';

const ContactUs = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Contact Us</h1>
            <p>If you have any questions, feel free to reach out!</p>
            <form>
                <input type="text" placeholder="Name" className="border rounded p-2 mb-2 w-full" />
                <input type="email" placeholder="Email" className="border rounded p-2 mb-2 w-full" />
                <textarea placeholder="Message" className="border rounded p-2 mb-2 w-full" />
                <button type="submit" className="bg-blue-500 text-white rounded p-2">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;
