import React from 'react';
import styles from './Wall.module.css';

function Wall() {

  return (
    <div className={ styles.wall }>
      <div className={ styles.wallPost }>1</div>
      <div className={ styles.wallPost }>2</div>
      <div className={ styles.wallPost }>3</div>
      <div className={ styles.wallPost }>4</div>
      <div className={ styles.wallPost }>5</div>
      <div className={ styles.wallPost }>1</div>
      <div className={ styles.wallPost }>2</div>
      <div className={ styles.wallPost }>3</div>
      <div className={ styles.wallPost }>4</div>
      <div className={ styles.wallPost }>5</div>
    </div>
  );
}

export default Wall;
