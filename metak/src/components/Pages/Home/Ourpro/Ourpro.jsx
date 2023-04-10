import React from "react";
import styles from "./Ourpro.module.scss";
import data from "../../../../Mock/MockProduct";

const Ourpro = () => {
  return (
    <header>
      <div className={styles.our}>
        {data.map((element, index) => (
          <div className={styles.card_img}>
            <img src={element.imgUrl} alt="" />
            <h6>{element.textData}</h6>
            <p>{element.desc}</p>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Ourpro;
