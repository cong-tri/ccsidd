/** @format */
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";

import styleFooter from "./css/footer.module.scss";
import styleGlobal from "../styles/index.module.scss";
const Footer = () => {
  return (
    <>
      <footer id={styleFooter.footerNav}>
        <div id={styleFooter.footerContent}>
          <Link href={"/"} id={styleFooter.footerLogoLink}>
            <Image
              id={styleFooter.footerLogo}
              src={logo}
              quality={100}
              alt='Logo Compony'
            />
            <div
              id={styleFooter.footerCompanyName}
              className={styleGlobal.colorBlue1}>
              Connecting Communication & Solutions
            </div>
          </Link>
          <div id={styleFooter.footerLink}>
            <Link className={styleGlobal.colorBlue2} href={"/"}>
              Home
            </Link>
            <Link className={styleGlobal.colorBlue2} href={"/services"}>
              Services
            </Link>
            <Link className={styleGlobal.colorBlue2} href={"/resources"}>
              Resources
            </Link>
            <Link className={styleGlobal.colorBlue2} href={"/contact"}>
              Contact
            </Link>
          </div>
        </div>
        <div
          id={styleFooter.footerCopyRight}
          className={styleGlobal.colorBlue1}>
          Copyright &copy; 2015 CCS. All right reserved |<br /> Privacy |
          Disclaimer | RSS
        </div>
      </footer>
    </>
  );
};

export default Footer;
