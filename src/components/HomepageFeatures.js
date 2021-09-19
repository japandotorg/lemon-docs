import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'SECURITY',
    Svg: require('../../static/img/sheild.svg').default,
    description: (
      <>
        <b className="lemon-text"> Lemon </b> has all the tools that you'll need to moderate effectively and efficiently.
      </>
    ),
  },
  {
    title: 'LEVELING',
    Svg: require('../../static/img/level.svg').default,
    description: (
      <>
        <b className="lemon-text"> Lemon </b> has a weekly points system. Points are like leveling system that users
        accumulate for engaging in your server.
      </>
    ),
  },
  {
    title: 'COLORS',
    Svg: require('../../static/img/color.svg').default,
    description: (
      <>
        <b className="lemon-text"> Lemon </b> has one of the best color role system.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
