/** @format */
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import styles from "../app/index.module.scss";

const Footer = () => {
  return (
    <>
      <footer id={styles.footerNav}>
        <div id={styles.footerContent}>
          <Link href={"/"} id={styles.footerLogoLink}>
            <Image
              id={styles.footerLogo}
              src={logo}
              quality={100}
              alt='Logo Compony'
            />
            <div id={styles.footerCompanyName}>
              Connecting Communication & Solutions
            </div>
          </Link>
          <div id={styles.footerLink}>
            <Link href={"/"}>Home</Link>
            <Link href={"/services"}>Services</Link>
            <Link href={"/resources"}>Resources</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div>
        <div id={styles.footerCopyRight}>
          Copyright &copy; 2015 CCS. All right reserved |<br /> Privacy |
          Disclaimer | RSS
        </div>
      </footer>
    </>
  );
};

export default Footer;
