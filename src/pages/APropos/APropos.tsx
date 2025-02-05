import React from 'react';
import './APropos.css';
import { Styles } from '../../styles/styles';
import { Button } from '../../common/Button';

const openCalendly = () => {
    console.log("Tentative d'ouverture du lien Calendly");
    window.open('https://calendly.com/bou214540', '_blank'); // Ouvrir le lien dans un nouvel onglet
};

const APropos = () => {
    return (
        <>
            <Styles />
            <div className="service-body">
                <div className="apropos-container">
                    <img src="/img/svg/Image.jpeg" alt="Présentation" className="apropos-image" />
                    <div className="apropos-content">
                        <h1>Fatima zahra MOUMOU</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <div className="contact-container">
                            <p className="contact-title">Contact :</p>
                            <p className="contact-text">fzmoumou.psy@gmail.com</p>
                            <p className="contact-text">06 68 07 58 02</p>
                            <p className="contact-text">N°RPPS : 10110224424</p>
                        </div>
                        <div className='btn'>
                            <Button onClick={openCalendly}>{("Prendre RDV")}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default APropos;