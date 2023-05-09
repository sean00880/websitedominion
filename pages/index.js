import { Swiper, SwiperSlide } from "swiper/react";
import { About2 } from "../src/components/About";
import Collection from "../src/components/Collection";
import Contact from "../src/components/Contact";
import Faq from "../src/components/Faq";
import News from "../src/components/News";
import RoadMapSlider from "../src/components/RoadMapStep";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
import ParticlesBackground from "../src/ParticlesBackground";
import HeroSlider2 from "../src/components/HeroSliderTwo";
import HeroSlider from "../src/components/HeroSlider";
const Index5 = () => {
  return (
    <Layout pageTitle={"Web Design San Diego"}>
      <HeroSlider2 />
      {/* !Home Section #2 */}
      {/* Section About #2 */}
      <About2 />
      {/* !Section About #2 */}
      {/* Section Divider */}
      {/* !Section News */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section */}
      <Contact />
    </Layout>
  );
};
export default Index5;
