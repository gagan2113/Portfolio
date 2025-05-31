import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
  <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
    <div className="container p-6 sm:p-12 flex justify-between items-center flex-wrap gap-4">
      <Image src="/cropped-logo.ico" alt="Logo" width={32} height={32} />
      <p className="text-slate-600 text-sm sm:text-base">All rights reserved.</p>
    </div>
  </footer>

  );
};

export default Footer;
