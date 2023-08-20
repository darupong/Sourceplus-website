import React from "react";

import {
  AboutSection,
  BannerSection,
  ContactSection,
  ExampleProjectSection,
  MemberSection,
  ServiceSection,
} from "./components";

const Home = () => {
  return (
    <>
      <AboutSection />
      <BannerSection />
      <ServiceSection />
      <ExampleProjectSection />
      <MemberSection />
      <ContactSection />
    </>
  );
};

export default Home;
