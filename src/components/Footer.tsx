/** @format */
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";

import styleComponent from "./css/footer.module.scss";
import styles from "../app/index.module.scss";
const Footer = () => {
  return (
    <>
      <footer id={styleComponent.footerNav}>
        <div id={styleComponent.footerContent}>
          <Link href={"/"} id={styleComponent.footerLogoLink}>
            <Image
              id={styleComponent.footerLogo}
              src={logo}
              quality={100}
              alt='Logo Compony'
            />
            <div
              id={styleComponent.footerCompanyName}
              className={styles.colorBlue1}>
              Connecting Communication & Solutions
            </div>
          </Link>
          <div id={styleComponent.footerLink}>
            <Link className={styles.colorBlue2} href={"/"}>
              Home
            </Link>
            <Link className={styles.colorBlue2} href={"/services"}>
              Services
            </Link>
            <Link className={styles.colorBlue2} href={"/resources"}>
              Resources
            </Link>
            <Link className={styles.colorBlue2} href={"/contact"}>
              Contact
            </Link>
          </div>
        </div>
        <div id={styleComponent.footerCopyRight} className={styles.colorBlue1}>
          Copyright &copy; 2015 CCS. All right reserved |<br /> Privacy |
          Disclaimer | RSS
        </div>
      </footer>
    </>
  );
};

export default Footer;
