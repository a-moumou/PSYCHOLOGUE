declare global {
    interface Window {
        Calendly: {
            initBadgeWidget: (options: {
                url: string;
                text: string;
                color: string;
                textColor: string;
                branding: boolean;
            }) => void;
        };
    }
}

export { }; 