import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import MissionContent from "../../content/MissionContent.json";
import ContactContent from "../../content/ContactContent.json";
import NewPage1Content from "../../content/ConsultationIndividuelleContent.json";
import NewPage2Content from "../../content/GuidanceParentaleContent.json";
import NewPage3Content from "../../content/RemédiationContent.json";
import './Home.css';

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <div className="grid-container">
        <ContentBlock
          className="content-block"
          direction="right"
          title={NewPage1Content.title}
          content={NewPage1Content.text}
          button={[
            {
              title: "Nos Services",
              color: "#18216d",
              textColor: "#ffffff",
              id: "nos-services"
            }
          ]}
          icon="img.avif"
          id="newpage1"
        />
        <ContentBlock
          className="content-block"
          direction="right"
          title={NewPage2Content.title}
          content={NewPage2Content.text}
          button={[
            {
              title: "Nos Services",
              color: "#18216d",
              textColor: "#ffffff",
              id: "nos-services"
            }
          ]}
          icon="img2.jpeg"
          id="newpage2"
        />
        <ContentBlock
          className="content-block"
          direction="right"
          title={NewPage3Content.title}
          content={NewPage3Content.text}
          button={[
            {
              title: "Nos Services",
              color: "#18216d",
              textColor: "#ffffff",
              id: "nos-services"
            }
          ]}
          icon="img3.avif"
          id="newpage3"
        />
      </div>

      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="waving.svg"
        id="mission"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
