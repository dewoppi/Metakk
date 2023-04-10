import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import route from "../../../router";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { GrLinkedinOption } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <nav className="navbar navbar-expand-lg h4-nav-bar pl-0 pr-0">
          <img src="https://www.metak.az/template/front/assets/images/logo.svg" />
        </nav>
        <div className={styles.collapse}>
          <ul>
            {route &&
              route.map((link) => (
                <Link to={link.path} key={`navbar-items_name${link.name}`}>
                  <li>{link.name}</li>
                </Link>
              ))}

            <li>ru</li>
            <li>en</li>
            <img
              src="https://www.metak.az/template/front/assets/images/958.svg"
              alt=""
            />
          </ul>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <ul>
            <li>ŞİRKƏT</li>
            <li>XƏBƏRLƏR</li>
            <li className={styles.mehsul}>
              MƏHSULLAR
              <div className="container">
                <div className={styles.cont}>
                  <div className="row">
                    <div className="col-3">
                      <div className={styles.red}>
                        <h3>
                          Müasir tələblərə <br />
                          cavab verən <br /> məhsullar
                        </h3>
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="container mt-3 mb-3">
                        <div className="row">
                          <div className="col-3">
                            <ul>
                              <h6> POLAD</h6>
                              <li> Polad borular</li>
                              <li> Polad məhsullar</li>
                              <li> Polad hissələr</li>
                              <li> Birləşdirici hissələr</li>
                              <li> Tikinti işləkləri</li>
                            </ul>
                          </div>
                          <div className="col-3">
                            <ul>
                              <h6> PLASTİK</h6>
                              <li> PPR borular</li>
                              <li> PPR fitinqlər</li>
                              <li> Polad hissələr</li>
                              <li> Birləşdirici hissələr</li>
                              <li> Tikinti işləkləri</li>
                            </ul>
                          </div>
                          <div className="col-3">
                            <ul>
                              <h6> POLAD</h6>
                              <li> Polad borular</li>
                              <li> Polad məhsullar</li>
                              <li> Polad hissələr</li>
                              <li> Birləşdirici hissələr</li>
                              <li> Tikinti işləkləri</li>
                            </ul>
                          </div>
                          <div className="col-3">
                            <ul>
                              <h6> POLAD</h6>
                              <li> Polad borular</li>
                              <li> Polad məhsullar</li>
                              <li> Polad hissələr</li>
                              <li> Birləşdirici hissələr</li>
                              <li> Tikinti işləkləri</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.xidmet}>
              XİDMƏTLƏR
              <ul>
                <li>Metal emalı</li>
                <li>Rəngləmə və qumlama</li>
                <li>Laboratoriya</li>
                <li>Qəlib istehsalı</li>
              </ul>
            </li>
            <li>KARYERA</li>
            <li>TRENDLƏR</li>
            <li>
              <a href="./">ƏLAQƏ</a>
            </li>
          </ul>
          {/* <ul className={styles.first}>
      <li className={styles.shirket}>ŞİRKƏT <MdKeyboardArrowDown/>
      <ul className={styles.drop} >
        <li  >Haqqımızda</li>
        <li  >Tariximiz</li>
        <li  >Sertifikatlar</li>
      </ul></li>
      <li>XƏBƏRLƏR</li>
      <li className={styles.mehsul}>MƏHSULLAR <MdKeyboardArrowDown/>
     <div className="container">
     <div className={styles.cont}>

<div className="row">
  <div className="col-lg-3">
    <div className="red">
    <h3>Müasir tələblərə <br /> cavab verən <br />məhsullar</h3>

    </div>
  </div>
  <div className="col-9">salam</div>
  </div>
  
</div>
     </div>


      </li>
      <li>XİDMƏTLƏR <MdKeyboardArrowDown/></li>
      <li>KARYERA <MdKeyboardArrowDown/></li>
      <li>TRENDLƏR</li>
      <li>ƏLAQƏ</li>
    </ul> */}
          <ul className={styles.second}>
            <li>
              {" "}
              <GrFacebookOption />{" "}
            </li>
            <li>
              {" "}
              <FaInstagram />{" "}
            </li>
            <li>
              {" "}
              <TfiYoutube />{" "}
            </li>
            <li>
              {" "}
              <GrLinkedinOption />{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
