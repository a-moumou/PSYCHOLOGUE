import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { Link } from "react-router-dom";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const openCalendly = () => {
    console.log("Tentative d'ouverture du lien Calendly");
    window.open('https://calendly.com/bou214540', '_blank'); // Ouvrir le lien dans un nouvel onglet
  };

  const MenuItem = () => {
    return (
      <>
        <Link to="/home">
          <CustomNavLinkSmall>
            <Span>{t("Accueil")}</Span>
          </CustomNavLinkSmall>
        </Link>
        <Link to="/nos-services">
          <CustomNavLinkSmall>
            <Span>{t("Nos services")}</Span>
          </CustomNavLinkSmall>
        </Link>
        <Link to="/a-propos">
          <CustomNavLinkSmall>
            <Span>{t("À propos")}</Span>
          </CustomNavLinkSmall>
        </Link>
        <Link to="/tarifs">
          <CustomNavLinkSmall>
            <Span>{t("Tarifs")}</Span>
          </CustomNavLinkSmall>
        </Link>
        <Link to="/contact">
          <CustomNavLinkSmall>
            <Span>{t("Contact")}</Span>
          </CustomNavLinkSmall>
        </Link>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={openCalendly}
        >
          <Span>
            <Button onClick={openCalendly}>{t("Prendre RDV")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
