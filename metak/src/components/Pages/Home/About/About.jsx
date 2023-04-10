import React from "react";
import styles from "./About.module.scss";
import { FaRegHandshake } from "react-icons/fa";
import { TbBuildingFactory } from "react-icons/tb";
import { GiFruitTree } from "react-icons/gi";
const About = () => {
  return (
    <section>
      <div className="container ">
        <div className={styles.about}>
          <div className="row justify-content-center">
            <div className="col-md-7 text-center">
              <div className={styles.text}>
                <h1>Biz kimik?</h1>
                <p>
                  Fəaliyyətə 1997-ci ildə başlamış “METAK” ölkəmizin ən nüfuzlu
                  şirkətlərindən <br /> biri olub, istehlakçıların böyük
                  etibarını qazana bilmişdir
                </p>
              </div>
            </div>
          </div>

          <div className="row m-t-40 justify-content-center">
            <div class="col-md-6 col-12 m-0 p-0">
              <div className={styles.fourbox}>
                <h2>Fəaliyyət sahələri</h2>
                <p>
                  “METAK” Azərbaycan Respublikasının müxtəlif bölgələrində öz
                  istehsalat müəssisələri olan, həmçinin Bakı və Sumqayıt
                  şəhərlərində iki bazası fəaliyyət göstərən və daima uğurlara
                  imza atan bir ticarət və sənaye şirkətidir
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12 m-0 p-0">
              <div className={styles.body} d-flex>
                <div className={styles.icon}>
                  <FaRegHandshake />
                </div>
                <div className={styles.textpart}>
                  <h3>Satış</h3>
                  <p>
                    Etibarlı təchizatçılar və dəqiq müəyyən olunmuş qiymət
                    siyasəti nəticəsində “METAK” ölkədə metal boru, profil və
                    boru kəməri fitinqləri satan ən böyük müəssisələrdən birinə
                    çevrilmiş və uzun illərdir yerli bazarda öz qabaqcıl
                    mövqeyini qoruyub saxlamaqdadır
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 m-0 p-0 ">
              <div className={styles.bodynext} d-flex>
                <div className={styles.icon}>
                  <TbBuildingFactory />
                </div>
                <div className={styles.textpart}>
                  <h3>Satış</h3>
                  <p>
                    Etibarlı təchizatçılar və dəqiq müəyyən olunmuş qiymət
                    siyasəti nəticəsində “METAK” ölkədə metal boru, profil və
                    boru kəməri fitinqləri satan ən böyük müəssisələrdən birinə
                    çevrilmiş və uzun illərdir yerli bazarda öz qabaqcıl
                    mövqeyini qoruyub saxlamaqdadır
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 m-0 p-0 ">
              <div className={styles.bodythird} d-flex>
                <div className={styles.icon}>
                  <GiFruitTree />
                </div>
                <div className={styles.textpart}>
                  <h3>Satış</h3>
                  <p>
                    Etibarlı təchizatçılar və dəqiq müəyyən olunmuş qiymət
                    siyasəti nəticəsində “METAK” ölkədə metal boru, profil və
                    boru kəməri fitinqləri satan ən böyük müəssisələrdən birinə
                    çevrilmiş və uzun illərdir yerli bazarda öz qabaqcıl
                    mövqeyini qoruyub saxlamaqdadır
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
