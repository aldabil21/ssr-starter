import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.less';

function Rectangle(props) {
  const data = props.data[0];
  return (
    <div className={styles.pbbContainer}>
      {data.itemMap.map((val) => {
        const imgUrl = val.img;
        return (
          <Link
            className={styles.pbbItemContainer}
            key={val.img}
            to="/detail/cbba934b14f747049187"
          >
            <div className={styles.pbbDescContainer}>
              <div
                className={styles.defaultItemBg}
                style={{
                  background: `url('${imgUrl}') 0  0 /cover`,
                }}
              />
              <div className={`${styles.pName} ${styles.pbbName}`}>
                {val.title}
              </div>
              <div className={`${styles.pDesc} ${styles.pbbName}`}>
                {val.subtitle}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Rectangle;
