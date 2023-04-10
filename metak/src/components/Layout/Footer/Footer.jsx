import React from "react";
import styles from "./Footer.module.scss";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <section className={styles.footer3}>
      <div className="container">
        <div className={styles.cont}>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className={styles.textside}>
                <a href="">
                  <img
                    src="https://www.metak.az/template/front/assets/images/logo-light.svg"
                    alt=""
                  />
                </a>
                <p>1997-ci ildən fəaliyyət göstərən əsl Azərbaycan brendi</p>
              </div>
            </div>
            <div className="col-lg-2 col-6 ">
              <div className={styles.list}>
                <p>ŞİRKƏT</p>
                <ul>
                  <li>
                    <a href="">Haqqımızda</a>
                  </li>
                  <li>
                    <a href="">Korporativ tarix</a>
                  </li>
                  <li>
                    <a href="">Karyera</a>
                  </li>
                  <li>
                    <a href="">Əməkdaşlıq</a>
                  </li>
                  <li>
                    <a href="">Xəbərlər</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6 ">
              <div className={styles.list}>
                <p>FAYDALI</p>
                <ul>
                  <li>
                    <a href="">İş portalı</a>
                  </li>
                  <li>
                    <a href="">Tədarükçü portalı</a>
                  </li>
                  <li>
                    <a href="">Metal kalkulyatoru</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6 ">
              <div className={styles.list}>
                <p>XİDMƏTLƏR</p>
                <ul>
                  <li>
                    <a href="">Metal emalı</a>
                  </li>
                  <li>
                    <a href="">Rəngləmə</a>
                  </li>
                  <li>
                    <a href="">Laboratoriya</a>
                  </li>
                  <li>
                    <a href="">Qəlib istehsalı</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6 ">
              <div className={styles.list}>
                <p>ƏLAQƏ</p>
                <p>
                  Böyük Şor 15 A, AZ1029 <br /> Bakı, Azərbaycan
                </p>
                <div className="info">
                  +994 (12) 958
                  <img
                    src="https://www.metak.az/template/front/assets/images/mail-footer.png"
                    alt=""
                  />
                </div>
                <div className={styles.social}>
                  <GrFacebookOption />
                  <FaInstagram />
                  <TfiYoutube />
                  <GrLinkedinOption />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom_bar}>
        <div className="container">
          <div className={styles.text_center}>© 2023 METAK</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
