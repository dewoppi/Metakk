import React from "react";
import styles from "./Langu.module.scss";

const Langu = () => {
  return (
    <section>
      <div className={styles.langu}>
        <div className="container"></div>
        <div className="row justify-content-center">
          <div className="col-lg-10 align-self-center">
            <div className={styles.title}>
              <img
                src="https://www.metak.az/template/front/assets/images/langu-sticker.svg"
                alt=""
              />
              <h2>Aqrar-sənaye kompleksimiz</h2>
              <p>
                “LANGU” aqrar-sənaye kompleksi 15 ildir fəaliyyət göstərir və
                müxtəlif meyvələrin yetişdirilməsi və satışı ilə məşğul olur.
                “LANGU” bağında ilk meyvə ağacları 2006-cı ildə əkilmişdir. Bu
                gün 200 hektarlıq intensiv bağ sahəsində yerli və Avropa
                ölkələrindən gətirilmiş şitillər artıq zəngin bar verir.
                Hal-hazırda təsərrüfat genişlənir, yaxınlıqda yerləşən 100
                hektar əlavə ərazidə yeni bağın salınması üzrə işlər aparılır.
                Bağ ərazisində yerləşən bir neçə süni suvarma gölü də “LANGU”
                kompleksinə məxsusdur. Şirin meyvələrimiz süfrənizin yaraşığı
                olacaq!
              </p>
              <a href="https://www.langu.az/">Ətraflı</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Langu;
