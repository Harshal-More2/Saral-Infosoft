import "./Contact.css";
import {
    FaCheckCircle,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";

function Contact() {
    return (
        <>
            {/* CONTACT FORM */}

            <section className="contact-form-section">

                <div className="contact-left">

                    <span className="small-title">
                        GET STARTED
                    </span>

                    <h2>
                        Let's Discuss
                        <br />
                        <span>Your Project</span>
                    </h2>

                    <p>
                        Ready to transform your brand's digital presence?
                        Fill out the form and our team will get back to you
                        within 24 hours.
                    </p>

                    <div className="feature">
                        <FaCheckCircle />
                        <span>Free strategy consultation</span>
                    </div>

                    <div className="feature">
                        <FaCheckCircle />
                        <span>Custom tailored solutions</span>
                    </div>

                    <div className="feature">
                        <FaCheckCircle />
                        <span>24-hour response time</span>
                    </div>

                </div>

                <div className="contact-form">

                    <form>

                        <input
                            type="text"
                            placeholder="Full Name"
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                        />

                        <input
                            type="text"
                            placeholder="Company Name"
                        />

                        <textarea
                            rows="5"
                            placeholder="Tell us about your project..."
                        ></textarea>

                        <button type="submit">
                            Submit →
                        </button>

                    </form>

                </div>

            </section>
            {/* OFFICE SECTION */}

            <section className="office-section">

                <div className="office-grid">

                    <div className="office-card">

                        <h3>Kalyan Office Location</h3>

                        <p>
                            <FaMapMarkerAlt />
                            207, Second Floor, Shubhlaxmi Shopping Complex,
                            Chhatrapati Shivaji Maharaj Chowk,
                            Kalyan West, Maharashtra 421301
                        </p>

                        <a href="mailto:info@saralinfosoft.com">
                            <FaEnvelope />
                            info@saralinfosoft.com
                        </a>

                        <a href="tel:+919702923728">
                            <FaPhoneAlt />
                            +91 97029 23728
                        </a>

                        <a href="tel:+918879591324">
                            <FaPhoneAlt />
                            +91 88795 91324
                        </a>

                    </div>

                    <div>

                        <div className="office-card">

                            <h3>Palava Office Location</h3>

                            <p>
                                <FaMapMarkerAlt />
                                CHS, E-Wing, Platina Lane,
                                Casa Bella Gold,
                                Palava City, Dombivli,
                                Maharashtra 421204
                            </p>

                        </div>

                        <div className="office-card office-gap">

                            <h3>Vashi Office Location</h3>

                            <p>
                                <FaMapMarkerAlt />
                                103, Prem Sagar CHS,
                                Parmarth Niketan Marg,
                                Sector 29,
                                Vashi,
                                Navi Mumbai 400703
                            </p>

                            <a href="tel:+919137460561">
                                <FaPhoneAlt />
                                +91 91374 60561
                            </a>

                        </div>

                    </div>

                    <div className="map-card">

                        <iframe
                            title="Saral Infosoft"
                            src="https://www.google.com/maps?q=Saral%20Infosoft%20Kalyan&output=embed"
                            loading="lazy"
                            allowFullScreen
                        ></iframe>

                    </div>

                </div>

            </section>


        </>
    );
}

export default Contact;