import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Dites-nous tout")}</Large>
              <Para>
                {t(`Avez-vous des questions ? N'hésitez pas à nous contacter.`)}
              </Para>
              <a href="mailto:fzmoumou.psy@gmail.com">
                <Chat>{t(`Discutons`)}</Chat>
              </a>
            </Col>

            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Société")}</Title>
              <Large to="/">{t("Accueil")}</Large>
              <Large to="/">{t("Nos services")}</Large>
              <Large to="/">{t("Produit")}</Large>
              <Large to="/">{t("Tarifs")}</Large>
              <Large to="/">{t("Contact")}</Large>
            </Col>

            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Language>{t("Adresse")}</Language>
              <Para>29 Rue du Calvaire,</Para>
              <Para>44000 Nantes</Para>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
