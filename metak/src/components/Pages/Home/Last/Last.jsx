import React from "react";
import styles from "./Last.module.scss";

const Last = () => {
  return (
    <section>
      <div className={styles.spacer}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className={styles.field}>
                <a href="">
                  {" "}
                  <img
                    src="https://www.metak.az/template/front/assets/images/l-career.webp"
                    alt=""
                  />
                </a>
              </div>
              <div className={styles.text_part}>
                <a href=""> Karyera Portalı</a>
                <p>
                  “METAK” şirkətinin əsas aktivi onun əməkdaşlarıdır.
                  Komandamıza qoşulmaq istəyirsinizsə, Karyera portalımızda
                  qeydiyyatdan keçərək iş üçün muraciət edə bilərsiniz
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className={styles.field}>
                <a href="">
                  {" "}
                  <img
                    src="https://www.metak.az/template/front/assets/images/web-vendor.webp"
                    alt=""
                  />
                </a>
              </div>
              <div className={styles.text_part}>
                <a href=""> Tədarükçü Portalı</a>
                <p>
                  {" "}
                  “METAK” şirkəti təchizat şirkətlərini əməkdaşlığa dəvət edir!
                  Səmərəli əməkdaşlıq üçün xüsusi olaraq yaradılmış korporativ
                  təchizat portalını təqdim edirik
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className={styles.field}>
                <a href="">
                  {" "}
                  <img
                    src="https://www.metak.az/template/front/assets/images/l-calcapp.webp"
                    alt=""
                  />
                </a>
              </div>
              <div className={styles.text_part}>
                <a href=""> Metal kalkulyatoru</a>
                <p>
                  Polad boru, profil və digər məhsulların çəkisini və ya
                  uzunluğunu standartlara uyğun hesablamaq üçün mobil
                  tədbiqimizdən yararlana bilərsiniz
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Last;
