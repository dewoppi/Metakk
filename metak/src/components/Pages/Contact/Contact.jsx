import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className={styles.bg}>
          <div className="row justify-content-center">
            <div className="col-md-6 col-6 text-center align-self-center">
              <div className={styles.text}>
                <h1>ƏLAQƏ</h1>
                <h5>Bizim əlaqə vasitələrimiz</h5>
              </div>
            </div>
            <div className="col-lg-6 col-6 text-center">
              <div className={styles.img}>
                <img
                  src="https://www.metak.az/template/front/assets/images/bg/pin.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className={styles.adress}>
              <h6>Ünvan</h6>
              <p>Böyükşor 15A, AZ1029, Bakı, Azərbaycan</p>
              <h6>Telefon</h6>
              <p>
                <a href="">
                  +994 (12) 958 <br />
                  +994 (12) 31 00 228
                </a>
              </p>
              <h6>Email</h6>
              <p>
                <a href="">office@metak.az</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
