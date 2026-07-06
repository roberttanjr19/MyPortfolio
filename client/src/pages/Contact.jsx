import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CopyButton from "../components/copy-button";
import { contactMethods } from "../data/portfolio-data";
import { EmailIcon, InstagramIcon, PhoneIcon } from "../components/icons";

function ContactIcon({ contactIconType }) {
    const iconStyleClassName = "icon";

    switch (contactIconType) {
        case "phone":
            return <PhoneIcon className={iconStyleClassName} />;
        case "instagram":
            return <InstagramIcon className={iconStyleClassName} />;
        case "email":
        default:
            return <EmailIcon className={iconStyleClassName} />;
    }
}

export default function Contact() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        email: "",
        message: "",
    });

    function handleChange(e) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/");
    }

    return (
        <section className="page-section">
            <header className="section-block fade-in">
                <p className="section-kicker">Contact</p>
                <h1>Contact Cards</h1>
            </header>

            <div className="contact-grid">
                {contactMethods.map((contactMethod) => (
                    <article key={contactMethod.label} className="contact-card fade-in">
                        <div className="contact-card__icon" aria-hidden="true">
                            <ContactIcon contactIconType={contactMethod.icon} />
                        </div>
                        <div className="contact-card__body">
                            <p className="contact-card__label">{contactMethod.label}</p>
                            <a className="contact-card__value" href={contactMethod.href}>
                                {contactMethod.value}
                            </a>
                        </div>
                        <div className="contact-card__actions">
                            <a className="secondary-button secondary-button--small" href={contactMethod.href}>
                                Open
                            </a>
                            <CopyButton value={contactMethod.copyValue} label="Copy" />
                        </div>
                    </article>
                ))}
            </div>

            <div className="contact-form-wrapper fade-in">
                <header className="section-block">
                    <p className="section-kicker">Send a Message</p>
                    <h2 className="contact-form-heading">Get in Touch</h2>
                </header>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-form__row">
                        <div className="contact-form__field">
                            <label className="contact-form__label" htmlFor="firstName">First Name</label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                className="contact-form__input"
                                placeholder="e.g. Robert"
                                value={form.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="contact-form__field">
                            <label className="contact-form__label" htmlFor="lastName">Last Name</label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                className="contact-form__input"
                                placeholder="e.g. Tan"
                                value={form.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="contact-form__row">
                        <div className="contact-form__field">
                            <label className="contact-form__label" htmlFor="contactNumber">Contact Number</label>
                            <input
                                id="contactNumber"
                                name="contactNumber"
                                type="tel"
                                className="contact-form__input"
                                placeholder="e.g. +1 416-000-0000"
                                value={form.contactNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="contact-form__field">
                            <label className="contact-form__label" htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="contact-form__input"
                                placeholder="e.g. you@email.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="contact-form__field">
                        <label className="contact-form__label" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="contact-form__input contact-form__textarea"
                            placeholder="Write your message here..."
                            value={form.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="contact-form__actions">
                        <button type="submit" className="primary-button">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}