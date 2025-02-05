import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSending, setIsSending] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setSuccessMessage("");
        setErrorMessage("");

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: "Destinataire",
        };
        try {
            await emailjs.send(
                "service_027fu9e",
                "template_7lteqxr",
                templateParams,
                "2cdFmToLT3gRQkNWm"
            );
            setSuccessMessage("Message envoyé avec succès !");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setErrorMessage("Erreur lors de l'envoi du message. Veuillez réessayer.");
        }
        setIsSending(false);
    };

    return (
        <div className="contact-container">
            <div className="contact-text">
                <h2>Contactez-moi</h2>
                <p>
                    N'hésitez pas à me contacter pour toute question ou demande d'information. Je suis là pour vous aider et répondre à vos besoins. Vous pouvez me joindre par email ou via le formulaire de contact ci-dessous.
                </p>
            </div>
            <div className="contact-form-container">
                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nom et Prénom</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Votre nom et prénom"
                            value={formData.name}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Votre email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Votre message"
                            value={formData.message}
                            onChange={handleChange}
                            className="textarea-field"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isSending}
                        className="submit-button"
                    >
                        {isSending ? "Envoi en cours..." : "Envoyer"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;