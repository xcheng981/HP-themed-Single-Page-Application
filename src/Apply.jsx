import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import "./Apply.css";

const Apply = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        house: '',
        otherHouse: '',
        instructor: '',
        otherInstructor: '',
    });

    const [isOtherHouseVisible, setOtherHouseVisible] = useState(false);
    const [isOtherInstructorVisible, setOtherInstructorVisible] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));

        if (name === 'house') {
            setOtherHouseVisible(value === 'Other');
        } else if (name === 'instructor') {
            setOtherInstructorVisible(value === 'Other');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted:', formData);

        setFormData({
            name: '',
            email: '',
            house: '',
            otherHouse: '',
            instructor: '',
            otherInstructor: '',
        });

        setOtherHouseVisible(false);
        setOtherInstructorVisible(false);
    };

    return (
        <>
            <Header />
            <Navigation />
            <div id="main-content" className="apply">
                <h2>Hogwarts Application Form</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name (reuiqred)<span className="required">*</span>:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>


                    <label>
                        Email (reuiqred)<span className="required">*</span>:
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            title="Enter a valid email address"
                            autocomplete="off"
                        />
                    </label>


                    <label>
                        House (reuiqred)<span className="required">*</span>:
                        <select name="house" value={formData.house} onChange={handleChange}>
                            <option value="" disabled>Please Select</option>
                            <option value="Gryffindor">Gryffindor</option>
                            <option value="Hufflepuff">Hufflepuff</option>
                            <option value="Ravenclaw">Ravenclaw</option>
                            <option value="Slytherin">Slytherin</option>
                        </select>
                    </label>

                    {isOtherHouseVisible && (
                        <label>
                            Other House:
                            <input
                                type="text"
                                name="otherHouse"
                                value={formData.otherHouse}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    )}

                    <label>
                        Instructor (reuiqred)<span className="required">*</span>:
                        <select name="instructor" value={formData.instructor} onChange={handleChange}>
                            <option value="" disabled>Please Select</option>
                            <option value="Aurora Sinistra">Aurora Sinistra</option>
                            <option value="Bathsheda Babbling">Bathsheda Babbling</option>
                            <option value="Cuthbert Binns">Cuthbert Binns</option>
                            <option value="Filius Flitwick">Filius Flitwick</option>
                            <option value="Firenze">Firenze</option>
                            <option value="Horace Slughorn">Horace Slughorn</option>
                            <option value="Minerva McGonagall">Minerva McGonagall</option>
                            <option value="Rolanda Hooch">Rolanda Hooch</option>
                            <option value="Rubeus Hagrid">Rubeus Hagrid</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>

                    {isOtherInstructorVisible && (
                        <label>
                            Other Instructor:
                            <input
                                type="text"
                                name="otherInstructor"
                                value={formData.otherInstructor}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    )}

                    <button type="submit" className="submit-button">Submit</button>
                </form>

                <div className="apply-info">
                    <h3>Current Application Information</h3>
                    <p>Name: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <p>Selected House: {formData.house === 'Other' ? formData.otherHouse : formData.house}</p>
                    <p>Selected Instructor: {formData.instructor === 'Other' ? formData.otherInstructor : formData.instructor}</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Apply;