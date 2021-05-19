import React from "react";
import * as FaIcons from "react-icons/fa";
function Footer() {
  return (
    <div class="w-full bg-white-500 text-black">
      <div class="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
        <div class="w-full pt-12 flex justify-start content-center"></div>
      </div>
      <a class="socials" href="www.linkedin.com/in/erik-glaser-b809711b9/">
        <FaIcons.FaLinkedin />
      </a>
    </div>
  );
}

export default Footer;
