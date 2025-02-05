import React from 'react';
import ContentBlock from '../../components/ContentBlock';
import serviceContent from '../../content/NosServicesContent.json';
import './NosServices.css';
import { Styles } from '../../styles/styles';

const ServiceContent = () => {
    return (
        <>
            <Styles /> {/* Application des styles globaux */}
            <div className="service-body"> {/* Ajout de la classe pour le body */}
                {serviceContent.services.map((service, index) => (
                    <ContentBlock
                        key={index}
                        className="service-block"
                        icon={service.icon}
                        title={service.title}
                        content={service.content}
                        section={[]}
                        direction={index % 2 === 0 ? "right" : "left"}
                        id={`service${index + 1}`}
                    />
                ))}
            </div>
        </>
    );
};

export default ServiceContent;