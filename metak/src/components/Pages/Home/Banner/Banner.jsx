import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <section>
      <div className="container-fluid m-0 p-0">
        <div className={styles.corusel}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="container">
                <div className={styles.menu}>
                  <div className="row">
                    <div className="col-lg-5 text-cent align-self-center">
                      <div className={styles.content}>
                        <p className={styles.dark}>PE-RT Boru</p>
                        <p className={styles.mdark}>
                          Yüksək temperatura davamlı polietilen <br /> yerdən
                          isitmə boruları
                        </p>
                        <div className={styles.btn}>
                          <a href="https://www.metak.az/catalog/pe-rt-boru">
                            Məhsula bax
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      {" "}
                      <img
                        src="https://www.metak.az/uploads/slider/8/s_img_8.webp"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="container">
                <div className={styles.menu}>
                  <div className="row">
                    <div className="col-lg-7">
                      {" "}
                      <img
                        src="https://www.metak.az/uploads/slider/9/s_img_9.webp"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-5 text-cent align-self-center">
                      <div className={styles.content}>
                        <p className={styles.dark}>METAL KALKULYATORU</p>
                        <p className={styles.mdark}>
                          Metal məhsullarının çəkisini <br /> standartlara uyğun
                          hesablayın
                        </p>
                        <div className={styles.btn}>
                          <a href="https://www.metak.az/calculator-app">
                            Ətraflı{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="container">
                <div className={styles.menu}>
                  <div className="row">
                    <div className="col-lg-5 text-cent align-self-center">
                      <div className={styles.content}>
                        <p className={styles.dark}>PLASTİK YEŞİKLƏR</p>
                        <p className={styles.mdark}>
                          Müxtəlif təyinatlı plastik yeşik və <br />{" "}
                          konteynerlər
                        </p>
                        <div className={styles.btn}>
                          <a href="https://www.metak.az/catalog/plastik-yesikler">
                            Məhsullara keç
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      {" "}
                      <img
                        src="https://www.metak.az/uploads/slider/10/s_img_10.webp"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="container">
                <div className={styles.menu}>
                  <div className="row">
                    <div className="col-lg-7">
                      {" "}
                      <img
                        src="https://www.metak.az/uploads/slider/11/s_img_11.webp"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-5 text-cent align-self-center">
                      <div className={styles.content}>
                        <p className={styles.dark}>KARYERA</p>
                        <p className={styles.mdark}>
                          METAK komandasına qoşulun və uğurlu <br /> karyeranı
                          bizimlə qurun
                        </p>
                        <div className={styles.btn}>
                          <a href="https://www.metak.az/calculator-app">
                            Ətraflı{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Banner;
