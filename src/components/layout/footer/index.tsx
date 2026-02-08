import React from "react";
import FooterBrand from "./footer-brand";
import FooterNav from "./footer-nav";
import FooterBottom from "./footer-bottom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-ink px-4 md:px-8 pt-20 pb-10 md:pt-28 md:pb-14">
      <div className="max-w-[1400px] mx-auto">
        <FooterBrand />
        <FooterNav />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
