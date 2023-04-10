import React from "react";
import styles from "./Services.module.scss";
// import service from '../../../../Mock/MockServices'
import { MdOutlineEngineering } from "react-icons/md";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { TfiSpray } from "react-icons/tfi";
import { TbMicroscope } from "react-icons/tb";
import { TbBuildingFactory } from "react-icons/tb";
import { FcBusinessman } from "react-icons/fc";
import { BsBoxSeam } from "react-icons/bs";

const Services = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className={styles.text}>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-7 text-center">
              <h2>Xidmətlərimiz</h2>
              <p>
                “METAK” müştərilər üçün metal emalı, metal məmulatların, qəlib
                və <br /> ştampların hazırlanması və laborator sınaqlar kimi
                müxtəlif növ xidmətlər <br /> təklif edir
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 p-0">
              <div className={styles.services}>
                <div className={styles.card_img}>
                  <img
                    src="https://www.metak.az/template/front/assets/images/metal.webp"
                    alt=""
                  />
                  <div className={styles.textbox}>
                    <MdOutlineEngineering />
                    <h3>Metal emalı</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 p-0">
              <div className={styles.services}>
                <div className={styles.card_img}>
                  <img
                    src="https://www.metak.az/template/front/assets/images/molding.webp"
                    alt=""
                  />
                  <div className={styles.textbox}>
                    <TfiRulerAlt2 />
                    <h3>Qəlib istehsalı</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 p-0">
              <div className={styles.services}>
                <div className={styles.card_img}>
                  <img
                    src="https://www.metak.az/template/front/assets/images/paint.webp "
                    alt=""
                  />
                  <div className={styles.textbox}>
                    <TfiSpray />
                    <h3>Rəngləmə</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 p-0">
              <div className={styles.services}>
                <div className={styles.card_img}>
                  <img
                    src="https://www.metak.az/template/front/assets/images/lab.webp"
                    alt=""
                  />
                  <div className={styles.textbox}>
                    <TbMicroscope />
                    <h3>Laboratoriya</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.spacer}>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 col-md-4 text-center">
              <div className={styles.iconbox}>
                <TbBuildingFactory />
                <div className={styles.text}>
                  <p className={styles.first}>25</p>
                  <p className={styles.second}>İl təcrübə</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 text-center">
              <div className={styles.iconbox}>
                <FcBusinessman />
                <div className={styles.text}>
                  <p className={styles.first}>900+</p>
                  <p className={styles.second}>əməkdaş sayı</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 text-center">
              <div className={styles.iconbox}>
                <BsBoxSeam />
                <div className={styles.text}>
                  <p className={styles.first}>2500+</p>
                  <p className={styles.second}>çeşid məhsul</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
