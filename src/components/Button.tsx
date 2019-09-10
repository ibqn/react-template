import React from 'react';
import styles from './Button.module.sass';


export const Button = () => {
  return (
    <>
      <button
        className={styles.btn}
        onClick={() => alert('I am styled with CSS Modules')}
      >
        Button 2
      </button>
    </>
  );
};

// export default Button;