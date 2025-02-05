import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";

const ContentBlock = ({
  className,
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      console.error(`L'élément avec l'ID "${id}" n'existe pas.`);
    }
  };

  return (
    <ContentSection className={className}>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon || "default-icon.svg"} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {section && section.length > 0 && (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {section.map((item, id) => (
                      <Col key={id} span={11}>
                        <SvgIcon src={item.icon} width="60px" height="60px" />
                        <MinTitle>{t(item.title)}</MinTitle>
                        <MinPara>{t(item.content)}</MinPara>
                      </Col>
                    ))}
                  </Row>
                </ServiceWrapper>
              )}
              {direction === "right" && button && (
                <ButtonWrapper>
                  {button.map((item, id) => (
                    <Button
                      key={id}
                      color={item.color}
                      textColor={item.textColor}
                      onClick={() => {
                        if (item.title === "Nos Services") {
                          window.location.href = "/nos-services";
                        } else if (item.id) {
                          scrollTo(item.id);
                        } else {
                          console.error("L'ID de l'élément n'est pas défini.");
                        }
                      }}
                    >
                      {t(item.title)}
                    </Button>
                  ))}
                </ButtonWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
