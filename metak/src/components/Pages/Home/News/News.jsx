import React from "react";
import styles from "./News.module.scss";
import data from "../../../../Mock/MockNews";

const News = () => {
  return (
    <section className={styles.news}>
      <div className="container">
        <div className={styles.blog_home}>
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <div className={styles.title}>
                <h2>Xəbərlər və yeniliklər</h2>
              </div>
            </div>
          </div>
          <div className="row m-t-40">
            <div className={styles.photos}>
              {data.map((element, index) => (
                <div className={styles.card_img}>
                  <img src={element.imgUrl} alt="" />
                  <div className={styles.date}>{element.textData}</div>
                  <p>{element.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="row justify-content-center align-items-center">
            <div className="col-md-12">
              <div className={styles.btn}>
                <a href="https://www.metak.az/news">Bütün xəbərlər</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
