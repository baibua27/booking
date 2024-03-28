import React, { useState } from 'react';

function Contact() {
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const hdlChange = (e) => {
        setInput(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const hdlSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
    }

    return (
        <div className="mt-16 p-4 border rounded-lg w-1/3 min-w-[300px] mx-auto bg-gray-100 shadow-md flex items-center justify-center">
            <div className="background-containerC relative flex flex-col justify-center p-4">
                <h1 className="text-3xl font-semibold text-center text-blue-600 mb-4">ติดต่อเรา</h1>
                <form className="mx-auto max-w-lg mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                name="firstName"
                                placeholder="ชื่อ"
                                value={input.firstName}
                                onChange={hdlChange}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                name="lastName"
                                placeholder="นามสกุล"
                                value={input.lastName}
                                onChange={hdlChange}
                            />
                        </div>
                    </div>
                    <div className="mt-2">
                        <input
                            type="email"
                            className="input input-bordered w-full"
                            name="email"
                            placeholder="อีเมล์"
                            value={input.email}
                            onChange={hdlChange}
                        />
                    </div>
                    <div className="mt-2">
                        <textarea
                            id="message"
                            className="textarea textarea-bordered w-full"
                            name="message"
                            rows="4"
                            placeholder="กรอกข้อความที่ต้องการส่ง"
                            value={input.message}
                            onChange={hdlChange}
                        ></textarea>
                    </div>
                    <div className="mt-2 flex justify-end">
                        <button type="submit" className="btn btn-red px-4 py-2">ส่งข้อความ</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;
