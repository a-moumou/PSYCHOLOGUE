import React from 'react';
import './Tarifs.css'; // Importez le fichier CSS pour le style
import { Button } from '../../common/Button'; // Importer le composant Button
import ContentBlock from '../../components/ContentBlock'; // Corriger le chemin d'importation
import { withTranslation, WithTranslation } from 'react-i18next'; // Importer withTranslation et WithTranslation

// Définir les props du composant
interface TarifsProps extends WithTranslation { }

const Tarifs: React.FC<TarifsProps> = ({ t }) => {
    const tarifs = [
        {
            title: "Consultation Enfant",
            duration: "45 mins",
            description: "Pour les consultations enfant, un entretien d'anamnèse aura lieu lors de la première séance en présence d'au moins un parent (motif de consultation, développement de l'enfant, évènements de vie, etc.)",
            price: "60€",
        },
        {
            title: "Consultation Adolescent",
            duration: "45 mins",
            description: "Pour les consultations adolescent, un entretien d'anamnèse aura lieu lors de la première séance en présence d'au moins un parent (motif de consultation, développement de l'enfant, évènements de vie, etc.)",
            price: "60€",
        },
        {
            title: "Consultation Adulte",
            duration: "45 mins",
            description: "",
            price: "70€",
        },
        {
            title: "Guidance parentale / Soutien à la parentalité",
            duration: "1H",
            description: "Pour la guidance parentale, une consultation d'anamnèse aura lieu en amont.",
            price: "70€",
        },
    ];

    const openCalendly = () => {
        console.log("Tentative d'ouverture du lien Calendly");
        window.open('https://calendly.com/bou214540', '_blank'); // Ouvrir le lien dans un nouvel onglet
    };

    return (
        <div className="tarifs-container">
            <h1>{t('Tarifs')}</h1>
            {tarifs.map((tarif, index) => (
                <div key={index} className="tarif-item">
                    <h2>{tarif.title}</h2>
                    <p>{tarif.duration}</p>
                    {tarif.description && <p>{tarif.description}</p>}
                    <div className="price-button">
                        <span>{tarif.price}</span>
                        <Button onClick={openCalendly}>
                            {t('Prendre RDV')}
                        </Button>
                    </div>
                </div>
            ))}
            <ContentBlock
                className="full-width"
                icon="graphs.jpg"
                title={t("Si vous ne pouvez pas venir")}
                content={t("Si vous ne pouvez pas venir à la séance, veuillez nous prévenir au minimum 24 heures à l'avance, sans quoi elle sera due. Nos jours et horaires de consultations sont accessibles sur Doctolib, et nous vous accueillons le lundi et le mercredi. Certaines mutuelles peuvent rembourser des séances en cabinet libéral ; sur demande, une facture pourra vous être remise à chaque séance pour bénéficier d'un remboursement. Enfin, nous ne faisons pas partie du dispositif MonPsy (remboursé par la Sécurité sociale), car il ne correspond pas à notre pratique et à notre manière de proposer la thérapie.")}
                id="tarifs"
                direction="left"
            />
        </div>
    );
};

export default withTranslation()(Tarifs);