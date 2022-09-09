import React from 'react';
import { Link } from 'react-router-dom';
import { RecommendDataNode } from '~/typings/data';
import styles from './index.module.less';

interface Props {
  data: RecommendDataNode[];
}

function Recommend(props: Props) {
  const data = props.data;
  return (
    <div>
      <div className={styles.title}>为你推荐</div>
      <div className={styles.reContainer}>
        {data.map((item) => (
          <Link key={item.data.heat} className={styles.reContent} to="/">
            <img src={item.data.img} />
            <div className={styles.vTitle}>{item.data.title}</div>
            <div className={styles.subTitle}>{item.data.subtitle}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Recommend;
