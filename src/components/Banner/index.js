import React from 'react';
import styles from './banner.module.css';
import classnames from 'classnames'

const Banner = () => {
  return(
    <div className={styles['banner']}>
      <div className={styles.content}>
        <h1>The Rick and morty <br/> Challenge</h1>
        <h3>Wubba lubba dab dab</h3>
        <button className={classnames('btn', styles.btn)}>
          Subscribe
        </button>
      </div>
    </div>
  )
}


export default Banner;
