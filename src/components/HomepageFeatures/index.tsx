import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: React.JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'German Yoyo Nationals 2023',
    imgSrc: require('@site/static/img/hero/german_nats_logo.png').default,
    description: (
      <>
        <p>
          <a href={"https://gyya.de/deutsche-yo-yo-meisterschaft/deutsche-yo-yo-meisterschaft-2023"} target={"blank"}>GYYA page for 2023 nationals</a>
        </p>
        <p>
          <a href={"https://www.youtube.com/@deutscheyo-yomeisterschaft7356/streams"} target={"blank"}>Livestreams to re-watch</a>
        </p>
      </>
    ),
  },
  {
    title: 'BurninBerlin Open Contest 2024',
    imgSrc: require('@site/static/img/hero/bbo_cover_image.png').default,
    description: (
      <>
        <p>
          <a href={"https://www.facebook.com/events/flakturm-humboldthain/burninberlin-open-yoyocontest-2024/661038858937892/"} target={"blank"}>Facebook Event Page</a>
        </p>
      </>
    ),
  },
  {
    title: 'German Yoyo Nationals 2022',
    imgSrc: require('@site/static/img/hero/german_nats_logo.png').default,
    description: (
      <>
        <p>
          <a href={"https://gyya.de/deutsche-yo-yo-meisterschaft/deutsche-yo-yo-meisterschaft-2022"} target={"blank"}>GYYA page for 2022 nationals</a>
        </p>
      </>
    ),
  },
];

function Feature({title, imgSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={imgSrc} alt="" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): React.JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
